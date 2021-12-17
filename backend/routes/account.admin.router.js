const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const accountRouter = express.Router();

accountRouter.use(express.json());

//Fetch user list for admin to show
accountRouter.route('/userinfo')
    .get(authenticate.verifyAdmin, (req, res, next) => {
        dbConnect.query("SELECT a.id, a.username, CONCAT(a.firstname, ' ', a.lastname) AS name, a.address, a.phone, a.email, u.isActivated, u.penalty"
            + " FROM account a JOIN user u ON a.id = u.user_id ORDER BY u.penalty DESC;", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
            .catch(err => next(err))
    })
    //Delete user list for admin
    .delete(authenticate.verifyAdmin, (req, res, next) => {
        console.log(req.body);
        models.Account.findAll({
            where: {
                id: req.body.users_delete
            }
        }).then(result => {
            result.forEach(account => models.Banlist.create({ ban_email: account.dataValues.email }));
            models.User.destroy({
                where: {
                    user_id: req.body.users_delete
                }
            }).then(() => {
                models.Account.destroy({
                    where: {
                        id: req.body.users_delete
                    }
                }).then(() => {
                    res.statusCode = 200;
                    res.json({ sucess: true });
                }, err => next(err))
            }, err => next(err))
                .catch(err => next(err));
        }, err => next(err))
            .catch(err => next(err));

    })

accountRouter.route('/ownerinfo')
//Fetch owner list for admin
    .get(authenticate.verifyAdmin, (req, res, next) => {
        dbConnect.query("SELECT a.id, a.username, CONCAT(a.firstname, ' ', a.lastname) AS name, a.address, a.phone, a.email, o.isActivated"
            + " FROM account a JOIN owner o ON a.id = o.own_id;", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            const promises = [];
            var resObj = result;
            for (let i = 0; i < resObj.length; ++i) {
                promises.push(
                    dbConnect.query("SELECT park_id AS id, name, location FROM park WHERE own_id = " + resObj[i]['id'] + ";", {
                        type: dbConnect.QueryTypes.SELECT
                    }).then(parks => {
                        resObj[i]['parks'] = parks;
                    }, (err) => next(err))
                        .catch(err => next(err))
                );
            }
            Promise.all(promises)
                .then(() => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(resObj);
                }, (err) => next(err))
                .catch(err => next(err));
        }, (err) => next(err))
            .catch(err => next(err))
    })
    //delete owner list for admin
    .delete(authenticate.verifyAdmin, (req, res, next) => {
        console.log(req.body);
        models.Account.findAll({
            where: {
                id: req.body.owners_delete
            }
        }).then(result => {
            result.forEach(account => models.Banlist.create({ ban_email: account.dataValues.email }));
            models.Owner.destroy({
                where: {
                    own_id: req.body.owners_delete
                }
            }).then(() => {
                models.Account.destroy({
                    where: {
                        id: req.body.owners_delete
                    }
                }).then(() => {
                    res.statusCode = 200;
                    res.json({ sucess: true });
                }, err => next(err))
            }, err => next(err))
                .catch(err => next(err));
        }, err => next(err))
            .catch(err => next(err));
    })

module.exports = accountRouter;