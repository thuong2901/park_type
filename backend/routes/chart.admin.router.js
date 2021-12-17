const express = require('express');
const models = require('../models/models');
const { dbConnect } = require('../connectDB');
const authenticate = require('../authenticate');

const chartRouter = express.Router();

chartRouter.use(express.json());

//Fetch rating chart
chartRouter.get('/rating-count', authenticate.verifyAdmin, async (req, res, next) => {
    var resObj = [
        {
            "rating": 1,
            "num": null
        },
        {
            "rating": 2,
            "num": null
        },
        {
            "rating": 3,
            "num": null
        },
        {
            "rating": 4,
            "num": null
        },
        {
            "rating": 5,
            "num": null
        },
    ];
    try {
        var query = await dbConnect.query("SELECT COUNT(*) AS count FROM comment WHERE rating = 1;", {
            type: dbConnect.QueryTypes.SELECT
        });
        resObj[0]['num'] = query[0]['count'];
        query = await dbConnect.query("SELECT COUNT(*) AS count FROM comment WHERE rating = 2;", {
            type: dbConnect.QueryTypes.SELECT
        });
        resObj[1]['num'] = query[0]['count'];
        query = await dbConnect.query("SELECT COUNT(*) AS count FROM comment WHERE rating = 3;", {
            type: dbConnect.QueryTypes.SELECT
        });
        resObj[2]['num'] = query[0]['count'];
        query = await dbConnect.query("SELECT COUNT(*) AS count FROM comment WHERE rating = 4;", {
            type: dbConnect.QueryTypes.SELECT
        });
        resObj[3]['num'] = query[0]['count'];
        query = await dbConnect.query("SELECT COUNT(*) AS count FROM comment WHERE rating = 5;", {
            type: dbConnect.QueryTypes.SELECT
        });
        resObj[4]['num'] = query[0]['count'];
    } catch (err) {
        next(err);
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(resObj);
    res.json(resObj);
});

//fetch user-number chart
chartRouter.get('/user-number', authenticate.verifyAdmin, async (req, res, next) => {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let count = 6;
    var resObj = [];
    while (count) {
        if (month == 0) {
            month = 12;
            year = year - 1;
        }
        var newObj = {"month": month, "userNumber": null};
        try {
            var query = await dbConnect.query("SELECT COUNT(*) AS count FROM account WHERE MONTH(createdAt) = " + month 
            + " AND YEAR(createdAt) = " + year + ";", {
                type: dbConnect.QueryTypes.SELECT
            });
            newObj["userNumber"] = query[0]['count'];
        } catch (err) {
            next(err);
        }
        resObj.push(newObj);
        --month;
        --count;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(resObj);
    res.json(resObj);
})

//fetch transaction chart
chartRouter.get('/transaction', authenticate.verifyAdmin, async (req, res, next) => {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let count = 6;
    var resObj = [];
    while (count) {
        if (month == 0) {
            month = 12;
            year = year - 1;
        }
        var newObj = {"month": month, "numOfSearch": null, "numOfBook": null};
        try {
            var query = await dbConnect.query("SELECT COUNT(*) AS count FROM search WHERE MONTH(createdAt) = " + month 
            + " AND YEAR(createdAt) = " + year + ";", {
                type: dbConnect.QueryTypes.SELECT
            });
            newObj["numOfSearch"] = query[0]['count']
            query = await dbConnect.query("SELECT COUNT(*) AS count FROM pending WHERE MONTH(createdAt) = " + month 
            + " AND YEAR(createdAt) = " + year + ";", {
                type: dbConnect.QueryTypes.SELECT
            });
            newObj["numOfBook"] = query[0]['count']
        } catch (err) {
            next(err);
        }
        resObj.push(newObj);
        --month;
        --count;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(resObj);
    res.json(resObj);
})

module.exports = chartRouter;