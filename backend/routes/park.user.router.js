const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');
const { calDistance } = require('../distance');
const { sortByRate, sortByPrice, sortByDistance } = require('../sort');
const parkRouter = express.Router();

var address = '';
var parkObj = [];
var timein = null;
var lat = null;
var lng = null;

parkRouter.use(express.json());

parkRouter.route('/')
    //fetch all park for marker
    .get((req, res, next) => {
        console.log(req.headers.origin);
        dbConnect.query("SELECT park_id, location FROM park WHERE isActivated = 1", {
            type: dbConnect.QueryTypes.SELECT
        }).then((result) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
            .catch(err => next(err))
    })

//fetch search info
parkRouter.route('/search')
    .get((req, res, next) => {
        if (req.query.search_id == 'null') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ address: '', lat: '', lng: '', timein: '' })
        } else {
            dbConnect.query("SELECT address, lat, lng, timein FROM search WHERE search_id = " + req.query.search_id + ";", {
                type: dbConnect.QueryTypes.SELECT
            }).then(result => {
                var search = result[0];
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ address: search.address, lat: search.lat, lng: search.lng, timein: search.timein })
            }, err => next(err))
                .catch(err => next(err));
        }

    })
    //post search
    .post((req, res, next) => {
        if (!req.body.address) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Bạn chưa nhập vị trí' });
        } else if (!req.body.timein) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Bạn chưa nhập thời gian' });
        } else {
            console.log(req.body);
            address = req.body.address.name;
            timein = req.body.timein;
            lat = req.body.address.location.lat;
            lng = req.body.address.location.lng;
            dbConnect.query("SELECT park_id AS id, name, image_url AS image, price, location, hasCamera, hasRoof, allowBooking, allowOvernight, (SELECT AVG(rating) FROM comment WHERE rela_id IN " +
                "(SELECT rela_id FROM park_user WHERE park_id = park.park_id)) AS rate, (SELECT COUNT(rating) FROM comment WHERE" +
                " rela_id IN (SELECT rela_id FROM park_user WHERE park_id = park.park_id)) AS numOfRate FROM park WHERE isActivated = 1", {
                type: dbConnect.QueryTypes.SELECT
            }).then((parks) => {
                parkObj = parks;
                const promises = [];
                for (let i = 0; i < parkObj.length; ++i) {
                    promises.push(
                        calDistance(address, parkObj[i]['location'])
                            .then((distance) => {
                                parkObj[i]['distance'] = distance;
                            }, (err) => next(err))
                            .catch((err => next(err)))
                    );
                }
                Promise.all(promises)
                    .then(() => {
                        for (let i = parkObj.length - 1; i >= 0; --i) {
                            parkObj[i]['rate'] = parkObj[i]['rate'] === null ? 0 : parkObj[i]['rate'];
                            parkObj[i]['image'] = parkObj[i]['image'] === null ? '' : parkObj[i]['image'];
                            parkObj[i]['image'] = parkObj[i]['image'].split(',')[0];
                            parkObj[i]['distance'] = parkObj[i]['distance'].replace(',', '');
                            if (Number(parkObj[i]['distance'].slice(0, -3)) > 10)
                                parkObj.splice(i, 1);
                        }

                        models.Search.create({ address: address, timein: timein, lat: lat, lng: lng, parks: parkObj })
                            .then(result => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, search_id: result.dataValues.search_id });
                            }, err => next(err));

                    }, (err) => next(err))
                    .catch(err => next(err));
            }, (err) => next(err))
                .catch(err => next(err))
        }
    });


//Fetch best park
parkRouter.route('/best')
    .get((req, res, next) => {
        if (req.query.search_id == 'null') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json([]);
        } else {
            dbConnect.query("SELECT parks FROM search WHERE search_id = " + req.query.search_id + ";", {
                type: dbConnect.QueryTypes.SELECT
            }).then(result => {
                var bestPark = eval(result[0].parks);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bestPark.sort(sortByRate));
            }, err => next(err))
                .catch(err => next(err));
        }
    });


//Fetch cheap park
parkRouter.route('/cheap')
    .get((req, res, next) => {
        if (req.query.search_id == 'null') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json([]);
        } else {
            dbConnect.query("SELECT parks FROM search WHERE search_id = " + req.query.search_id + ";", {
                type: dbConnect.QueryTypes.SELECT
            }).then(result => {
                var cheapPark = eval(result[0].parks);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(cheapPark.sort(sortByPrice));
            }, err => next(err))
                .catch(err => next(err));
        }

    });


//Fetch near park
parkRouter.route('/near')
    .get((req, res, next) => {
        if (req.query.search_id == 'null') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json([]);
        } else {
            dbConnect.query("SELECT parks FROM search WHERE search_id = " + req.query.search_id + ";", {
                type: dbConnect.QueryTypes.SELECT
            }).then(result => {
                var nearPark = eval(result[0].parks);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(nearPark.sort(sortByDistance));
            }, err => next(err))
                .catch(err => next(err));
        }

    });

//get mark for favorite
parkRouter.route('/mark/:parkId')
    .get(async (req, res, next) => {
        if (!req.headers.authorization) {
            res.statusCode = 200;
            res.json({ isMark: false });
        } else {
            var user_id = authenticate.getAccountId(req);
            var value = await dbConnect.query("SELECT f.* FROM favorite f JOIN park_user pu ON f.rela_id = pu.rela_id "
                + "WHERE pu.park_id = " + req.params.parkId + " AND pu.user_id = " + user_id + ";", {
                type: dbConnect.QueryTypes.SELECT
            });
            if (value.length == 0) {
                res.statusCode = 200;
                res.json({ isMark: false });
            } else {
                res.statusCode = 200;
                res.json({ isMark: true });
            }
        }
    })

function convert2digit(n) {
    return n > 9 ? "" + n : "0" + n;
}
//fetch status park
parkRouter.route('/status/:parkId')
    .get(async (req, res, next) => {
        dbConnect.query("SELECT park_id, name, price, location, total_space AS totalSpace, total_space - total_in"
            + " AS totalFreeSpace, open_time AS openTime FROM park WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(async result => {
            let park = result[0];

            if (park['openTime'] == 'Cả ngày') {
                park['isOpen'] = true;
            } else {
                let differentTimezone = (new Date().getTimezoneOffset() + 420) / 60;
                let currentHour = new Date().getHours() + differentTimezone;
                currentHour = currentHour >= 24 ? currentHour - 24 : currentHour;
                let currentMinute = new Date().getMinutes();
                let [start, end] = park['openTime'].split(" - ");
                let startHour = new Date(Date.parse(start)).getHours() + differentTimezone;
                startHour = startHour >= 24 ? startHour - 24 : startHour;
                let startMinute = new Date(Date.parse(start)).getMinutes();
                let endHour = new Date(Date.parse(end)).getHours() + differentTimezone;
                endHour = endHour >= 24 ? endHour - 24 : endHour;
                let endMinute = new Date(Date.parse(end)).getMinutes();
                park['openTime'] = convert2digit(startHour) + ":" + convert2digit(startMinute) + " - " + convert2digit(endHour) + ":" + convert2digit(endMinute);
                let startBool;
                let endBool;
                if ((currentHour > startHour) || (currentHour == startHour && currentMinute > startMinute)) {
                    startBool = true;
                } else {
                    startBool = false;
                }
                if ((currentHour < endHour) || (currentHour == endHour && currentMinute < endMinute)) {
                    endBool = true;
                } else {
                    endBool = false;
                }
                park['isOpen'] = startBool && endBool;
            }
            // for (let i = 0; i < parkObj.length; ++i) {
            //     if (parkObj[i]['id'] == park['park_id']) {
            //         park['distance'] = parkObj[i]['distance'];
            //         break;
            //     }
            // }
            if (req.query.search_id == 'null') {
                park['distance'] = '';
            } else {
                var address = await dbConnect.query("SELECT address FROM search WHERE search_id = " + req.query.search_id + ";", {
                    type: dbConnect.QueryTypes.SELECT
                });
                park['distance'] = await calDistance(address[0].address, park.location);
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(park);
        }, (err) => next(err))
            .catch((err) => next(err));
    });

//fetch info park
parkRouter.route('/info/:parkId')
    .get((req, res, next) => {
        dbConnect.query("SELECT park_id, hasCamera, hasRoof, allowBooking, allowOvernight, description, image_url FROM park " +
            " WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            let park = result[0];
            let images = park['image_url'] === null ? [] : park['image_url'].split(',');
            park['image'] = [];
            images.forEach((item) => park['image'].push({ "img": item }));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(park);
        }, (err) => next(err))
            .catch((err) => next(err));
    });


//Post comment
parkRouter.route('/comment')
    .post(authenticate.verifyUser, (req, res, next) => {
        let comment = req.body;
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT * FROM park_user WHERE park_id = " + comment['park_id'] + " AND user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                models.Park_User.create({ "park_id": comment['park_id'], "user_id": user_id })
                    .then(rela => {
                        comment['rela_id'] = rela.dataValues.rela_id;
                        models.Comment.create(comment)
                            .then(comment => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Post comment succesfully!' });
                            }, (err) => next(err))
                    }, (err) => next(err))
            } else {
                models.Comment.findOne({
                    where: {
                        rela_id: result[0].rela_id
                    }
                }).then((findcommend) => {
                    if (findcommend) {
                        models.Comment.update(comment, {
                            where: {
                                rela_id: result[0].rela_id
                            }
                        })
                            .then(() => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Post comment succesfully!' });
                            }, err => next(err))
                    } else {
                        comment['rela_id'] = result[0].rela_id;
                        models.Comment.create(comment)
                            .then(comment => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Post comment succesfully!' });
                            }, (err) => next(err))
                    }
                }, err => next(err))
            }
        }, (err) => next(err))
            .catch(err => next(err))
    })

//Fetch comment list of 1 park
parkRouter.route('/comment/:parkId')
    .get((req, res, next) => {
        dbConnect.query("SELECT c.cmt_id AS id, pu.park_id, c.rating, c.content, c.updatedAt AS createTime, "
            + "(SELECT CONCAT(firstname, ' ', lastname) FROM account WHERE id = pu.user_id) AS author "
            + "FROM comment c JOIN park_user pu ON c.rela_id = pu.rela_id WHERE pu.park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, (req, res, next) => {

    });

//Report park
parkRouter.route('/report')
    .post(authenticate.verifyUser, (req, res, next) => {
        let report = req.body;
        let user_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT * FROM park_user WHERE park_id = " + report['park_id'] + " AND user_id = " + user_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                models.Park_User.create({ "park_id": report['park_id'], "user_id": user_id })
                    .then(rela => {
                        comment['rela_id'] = rela.dataValues.rela_id;
                        models.Report.create(report)
                            .then(report => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json({ success: true, status: 'Post comment succesfully!' });
                            }, (err) => next(err))
                    }, (err) => next(err))
            } else {
                report['rela_id'] = result[0].rela_id;
                models.Report.create(report)
                    .then(report => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ success: true, status: 'Post report succesfully!' });
                    }, (err) => next(err))
            }
        }, (err) => next(err))
            .catch(err => next(err))
    });

module.exports = parkRouter;