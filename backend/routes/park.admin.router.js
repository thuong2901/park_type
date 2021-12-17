const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const parkRouter = express.Router();

parkRouter.use(express.json());

//Fetch park list for admin
parkRouter.route('/')
    .get(authenticate.verifyAdmin, (req, res, next) => {
        dbConnect.query("SELECT p.park_id AS id, p.name, p.location, p.price, p.hasRoof, p.hasCamera, p.allowOvernight, p.allowBooking, p.description, "
        + "p.isActivated, p.own_id AS owner_id, (SELECT CONCAT(firstname, ' ', lastname) FROM account WHERE id = p.own_id) AS owner, "
        + "(SELECT COUNT(*) FROM report WHERE rela_id IN (SELECT rela_id FROM park_user WHERE park_id = p.park_id)) AS reportNum FROM park p ORDER BY p.isActivated;", {
            type: dbConnect.QueryTypes.SELECT
        }).then(result => {
            console.log(result);
            const promises = [];
            for (let i = 0; i < result.length; ++i) {
                promises.push(
                    dbConnect.query("SELECT report_id AS id, content, createdAt AS time FROM report WHERE rela_id IN "
                    + "(SELECT rela_id FROM park_user WHERE park_id = " + result[i].id + ");", {
                        type: dbConnect.QueryTypes.SELECT
                    }).then(report => {
                        result[i].reports = report;
                    })
                )
            }
            Promise.all(promises)
            .then(() => {
                console.log(result);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            })
            
        }, (err) => next(err))
        .catch(err => next(err))
    })
    //delete park for admin
    .delete(authenticate.verifyAdmin, (req, res, next) => {
        console.log(req.body);
        models.Park.destroy({
            where: {
                park_id: req.body.parks_delete
            }
        }).then(() => {
            res.statusCode = 200;
            res.json({sucess: true});
        }, err => next(err))
        .catch(err => next(err));  
    })

parkRouter.route('/verify')
//verify park for admin
    .post(authenticate.verifyAdmin, (req, res, next) => {
        models.Park.update({isActivated: true}, {
            where: {
                park_id: req.body.park_id
            }
        }).then(() => {
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.json({sucess: true});
        }, err => next(err))
        .catch(err => next(err));
        
    })

module.exports = parkRouter;