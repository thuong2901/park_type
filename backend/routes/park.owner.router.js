const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const ownRouter = express.Router();

ownRouter.use(express.json());

ownRouter.route('/info')
    //Fetch parks info of an owner
    .get(authenticate.verifyOwner, (req, res, next) => {
        const own_id = authenticate.getAccountId(req);
        dbConnect.query("SELECT park_id AS id, name, image_url, location, total_space, price, isActivated, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time "
            + "FROM park WHERE own_id = " + own_id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then((result) => {
            for (let i = 0; i < result.length; ++i) {
                result[i]['image_url'] = result[i]['image_url'] === null ? '' : result[i]['image_url'];
                result[i]['image'] = result[i]['image_url'].split(',')[0];
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
            .catch((err) => next(err));
    })
    //Create a park
    .post(authenticate.verifyOwner, (req, res, next) => {
        const own_id = authenticate.getAccountId(req);
        if (!req.body.name) {
            res.statusCode = 403;
            res.json({ message: "Vui lòng nhập tên bãi đỗ" })
        } else if (!req.body.location) {
            res.statusCode = 403;
            res.json({ message: "Vui lòng nhập địa chỉ" })
        } else {
            dbConnect.query("SELECT isactivated FROM owner WHERE own_id = " + own_id, {
                type: dbConnect.QueryTypes.SELECT
            }).then((result) => {
                if (result[0].isactivated == false) {
                    res.statusCode = 403;
                    res.json({ message: "Tạo bãi đỗ thất bại. Tài khoản chưa được xác minh" })
                } else {
                    let parkJson = req.body;
                    parkJson["own_id"] = authenticate.getAccountId(req);
                    parkJson["location"] = JSON.parse(parkJson.location).name;
                    parkJson['open_time'] = parkJson['allow24h'] == true ? 'Cả ngày' : parkJson['open_time'] + ' - ' + parkJson['close_time'];
                    models.Park.create(parkJson)
                        .then((park) => {
                            res.statusCode = 201;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({ success: true, park_id: park.dataValues.park_id });
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }
            }, err => next(err))
                .catch(err => next(err));
        }
    });

//Fetch info of a park
ownRouter.route('/info/:id')
    .get(authenticate.verifyOwner, (req, res, next) => {
        dbConnect.query("SELECT park_id AS id, name, isActivated, image_url, location, total_space, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time "
            + "FROM park WHERE park_id = " + req.params.id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then((result) => {

            if (result[0]['open_time'] == 'Cả ngày') {
                result[0]['open_time'] = '';
                result[0]['close_time'] = '';
                result[0]['allow24h'] = true;
            } else {
                result[0]['close_time'] = result[0]['open_time'].split(' - ')[1];
                result[0]['open_time'] = result[0]['open_time'].split(' - ')[0];
                result[0]['allow24h'] = false;
            }
            const images = result[0]['image_url'] === null ? [] : result[0]['image_url'].split(',');
            result[0]['images'] = [];
            images.forEach((item) => result[0]['images'].push({ "img": item }));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result[0]);
        }, (err) => next(err))
            .catch((err) => next(err));
    })
    //Change info of a park
    .put(authenticate.verifyOwner, (req, res, next) => {
        let parkJson = req.body;
        console.log(parkJson);
        parkJson["own_id"] = authenticate.getAccountId(req);
        parkJson["location"] = JSON.parse(parkJson.location).name;
        parkJson['open_time'] = parkJson['allow24h'] == true ? 'Cả ngày' : parkJson['open_time'] + ' - ' + parkJson['close_time'];
        dbConnect.query("SELECT image_url FROM park WHERE park_id = " + req.params.id + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(images => {
            var image = images[0].image_url;
            var image_del = [];
            parkJson['removeImages'].forEach(image => {
                image_del.push(image.img)
            });
            var image_current = image === null ? [] : image.split(',');
            for (let i = image_current.length - 1; i >= 0; --i) {
                for (let j = 0; j < image_del.length; ++j) {
                    if (image_current[i] == image_del[j]) {
                        image_current.splice(i, 1);
                        break;
                    }
                }
            }
            var image_save = image_current.length == 0 ? '' : image_current[0];
            for (let i = 1; i < image_current.length; ++i) {
                image_save = image_save + ',' + image_current[i];
            }
            parkJson['image_url'] = image_save;
            models.Park.update(parkJson, {
                where: {
                    park_id: req.params.id
                }
            }).then((park) => {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json({ success: true });
            }, (err) => next(err))
                .catch((err) => next(err));
        }, (err) => next(err))
            .catch(err => next(err));
    })
    //Delete a park
    .delete(authenticate.verifyOwner, (req, res, next) => {
        models.Park.destroy({
            where: {
                park_id: req.params.id
            }
        }).then(() => {
            res.statusCode = 200;
            res.json({ success: true });
        }, err => next(err))
            .catch(err => next(err));
    })

//Fetch rating of a park
ownRouter.route('/rating/:parkId')
    .get(authenticate.verifyOwner, (req, res, next) => {
        dbConnect.query("SELECT AVG(rating) AS avg_rating, COUNT(*) AS total_rating, COUNT(CASE WHEN rating = 0 THEN 1 ELSE null END) AS rating_old, "
            + "COUNT(CASE WHEN rating = 1 THEN 1 ELSE null END) AS rating_one, "
            + "COUNT(CASE WHEN rating = 2 THEN 1 ELSE null END) AS rating_two, "
            + "COUNT(CASE WHEN rating = 3 THEN 1 ELSE null END) AS rating_three, "
            + "COUNT(CASE WHEN rating = 4 THEN 1 ELSE null END) AS rating_four, "
            + "COUNT(CASE WHEN rating = 5 THEN 1 ELSE null END) AS rating_five "
            + "FROM comment WHERE rela_id IN (SELECT rela_id FROM park_user WHERE park_id = " + req.params.parkId + ");", {
            type: dbConnect.QueryTypes.SELECT
        }).then(rating => {
            var result = rating[0];
            dbConnect.query("SELECT c.content, c.rating, (SELECT CONCAT(firstname, ' ', lastname) FROM account WHERE id = pu.user_id) AS name "
                + "FROM comment c JOIN park_user pu ON c.rela_id = pu.rela_id WHERE park_id = " + req.params.parkId + ";", {
                type: dbConnect.QueryTypes.SELECT
            }).then(comment => {
                result['comment'] = comment;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            }, err => next(err))
                .catch(err => next(err));
        }, err => next(err))
            .catch(err => next(err));
    })

//Fetch status of a park
ownRouter.route('/status/:parkId')
    .get(authenticate.verifyOwner, (req, res, next) => {
        dbConnect.query("SELECT park_id, name, total_space, total_in FROM park WHERE park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result[0]);
        }, err => next(err))
            .catch(err => next(err));
    })
    //change info of a park
    .post(authenticate.verifyOwner, (req, res, next) => {
        var control = req.body.control;
        if (control == true) {
            models.Park.increment({ total_in: 1 }, {
                where: {
                    park_id: req.params.parkId
                }
            }).then(() => {
                res.statusCode = 201;
                res.json({ status: "success" });
            }, err => next(err))
                .catch(err => next(err));
        } else {
            models.Park.increment({ total_in: -1 }, {
                where: {
                    park_id: req.params.parkId
                }
            }).then(() => {
                res.statusCode = 201;
                res.json({ status: "success" });
            }, err => next(err))
                .catch(err => next(err));
        }
    })

ownRouter.route('/pending/:parkId')
    //Fetch list pending of a park
    .get(authenticate.verifyOwner, (req, res, next) => {
        dbConnect.query("SELECT p.pending_id, a.username, CONCAT(a.firstname, ' ', a.lastname) AS name, a.phone, p.time_start "
            + "FROM pending p JOIN park_user pu ON p.rela_id = pu.rela_id JOIN account a ON pu.user_id = a.id "
            + "WHERE p.status = 'Đang đặt trước' AND pu.park_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        })
    })
    //Push one pending to park
    .put(authenticate.verifyOwner, (req, res, next) => {
        models.Pending.update({ status: "Đã hoàn thành" }, {
            where: {
                pending_id: req.params.parkId
            }
        }).then(result => {
            dbConnect.query("SELECT rela_id, (SELECT park_id FROM park_user WHERE rela_id = pending.rela_id) AS park_id "
                + "FROM pending WHERE pending_id = " + req.params.parkId + ";", {
                type: dbConnect.QueryTypes.SELECT
            }).then(result => {
                var rela_id = result[0].rela_id;
                var park_id = result[0].park_id;
                models.Park.increment({ total_in: 1 }, {
                    where: {
                        park_id: park_id
                    }
                }).then(() => {
                    models.Parking.create({ rela_id: rela_id, status: 'OK' });
                    res.statusCode = 201;
                    res.json({ sucess: true });
                }, err => next(err))
            }, err => next(err))

        }, err => next(err))
            .catch(err => next(err));
    })
    //delete one pending of park
    .delete(authenticate.verifyOwner, (req, res, next) => {
        dbConnect.query("SELECT time_start, createdAt, (SELECT user_id FROM park_user WHERE rela_id = pending.rela_id) AS id FROM pending WHERE pending_id = " + req.params.parkId + ";", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            if (result.length == 0) {
                res.statusCode = 400;
                res.json({ message: "Người dùng đã xóa đặt trước" });
            } else {
                const now = new Date();
                var differentFromPending = (now.getTime() - result[0].createdAt.getTime()) / (1000 * 60);
                var differentFromStart = (result[0].time_start.getTime() - now.getTime()) / (1000 * 60);
                if (differentFromPending <= 15 || differentFromStart > 60) {
                    models.Pending.update({ status: "Chủ bãi hủy" }, {
                        where: {
                            pending_id: req.params.parkId
                        }
                    }).then(() => {
                        res.statusCode = 200;
                        res.json({ sucess: true });
                    }, err => next(err))
                } else if (differentFromStart <= -10) {
                    models.User.increment({ penalty: 1 }, {
                        where: {
                            user_id: result[0].id
                        }
                    }, err => next(err))
                    models.Pending.update({ status: "Chủ bãi hủy" }, {
                        where: {
                            pending_id: req.params.parkId
                        }
                    }).then(() => {
                        res.statusCode = 200;
                        res.json({ sucess: true });
                    }, err => next(err));
                } else {
                    res.statusCode = 400;
                    res.json({message: "Hiện tại không thể hủy"});
                }
            }
        }, err => next(err))
            .catch(err => next(err));
    })

module.exports = ownRouter;