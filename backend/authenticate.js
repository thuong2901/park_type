var jwt = require('jsonwebtoken');
const { dbConnect } = require('./connectDB');
const nodemailer = require('nodemailer');
var models = require('./models/models');
var config = require('./config');


exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, {expiresIn: "2d"});
}

exports.getCodeVerify = (id) => {
    return jwt.sign({"id": id}, config.verifyKey, {expiresIn: '1h'});
}

exports.getIdCode = (code) => {
    try {
        var decode = jwt.verify(code, config.verifyKey);
        return decode.id;
    } catch(error) {
        return 'Wrong';
    }
}

exports.getCodeForgotten = () => {
    const getRndInterger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 
    var rand1 = getRndInterger(0, 9);
    var rand2 = getRndInterger(0, 99999);
    var code = "" + rand1 + rand2;
    return code;
}

exports.getAccountId = (req) => {
    var token = req.headers.authorization.split(" ")[1];
    var id = jwt.verify(token, config.secretKey).id;
    return id;
}

exports.sendEmail = (url, email, code) => {
    var email = email;
    var code = code;
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'parkingwebtest@gmail.com',
            pass: 'parkingweb123'
        }
    });
    var mailOptions = {
        from: 'parkingwebtest@gmail.com',
        to: email,
        subject: 'Park Type - Account verification',
        html: '<p>You requested for email verification, kindly use this <a href="' + url 
        + '/verify?code=' + code + '">link</a> to verify your email address</p>'
    }
    mail.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return error.message;
        } else {
            return 'Success';
        }
    })
}

exports.sendCode = (email, code) => {
    var email = email;
    var code = code;
    console.log(code);
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'parkingwebtest@gmail.com',
            pass: 'parkingweb123'
        }
    });

    var mailOptions = {
        from: 'parkingwebtest@gmail.com',
        to: email,
        subject: 'Park Type - Account verification',
        html: '<p>Your code: ' + code + '</p>'
    }

    mail.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return error.message;
        } else {
            return code;
        }
    })
}


exports.verifyUser = (req, res, next) => {
    if (!req.headers.authorization) {
        res.statusCode = 401;
        res.json({message: 'Bạn chưa đăng nhập tài khoản người dùng'});
    }
    else {
        var token = req.headers.authorization.split(" ")[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            res.statusCode = 401;
            res.json({message: 'Bạn chưa đăng nhập tài khoản người dùng'});
        }
        dbConnect.query("SELECT * FROM user WHERE user_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                res.statusCode = 401;
                res.json({message: 'Bạn chưa đăng nhập tài khoản người dùng'});
            } else {
                return next();
            }
        }, (err) => next(err))
        .catch(err => next(err));
    }
}

exports.verifyOwner = (req, res, next) => {
    if (!req.headers.authorization) {
        res.statusCode = 401;
        res.json({message: 'Bạn chưa đăng nhập tài khoản chủ bãi đỗ'});
    }
    else {
        var token = req.headers.authorization.split(" ")[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            res.statusCode = 401;
            res.json({message: 'Bạn chưa đăng nhập tài khoản chủ bãi đỗ'});
        }
        dbConnect.query("SELECT * FROM owner WHERE own_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                res.statusCode = 401;
                res.json({message: 'Bạn chưa đăng nhập tài khoản chủ bãi đỗ'});
            } else {
                return next();
            }
        })
    }
}

exports.verifyUserOrOwner = (req, res, next) => {
    if (!req.headers.authorization) {
        res.statusCode = 401;
        res.json({message: 'Bạn chưa đăng nhập tài khoản chủ bãi đỗ hoặc tài khoản người dùng'});
    }
    else {
        var token = req.headers.authorization.split(" ")[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            res.statusCode = 401;
            res.json({message: 'Bạn chưa đăng nhập tài khoản chủ bãi đỗ hoặc tài khoản người dùng'});
        }
        dbConnect.query("SELECT * FROM owner WHERE own_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                dbConnect.query("SELECT * FROM user WHERE user_id = " + decode + ";", {
                    type: dbConnect.QueryTypes.SELECT
                }).then(result => {
                    if (result.length == 0) {
                        res.statusCode = 401;
                        res.json({message: 'Bạn chưa đăng nhập tài khoản chủ bãi đỗ hoặc tài khoản người dùng'});
                    } else {
                        next();
                    }
                })
                
            } else {
                return next();
            }
        })
    }
}
exports.verifyAdmin = (req, res, next) => {
    if (!req.headers.authorization) {
        res.statusCode = 401;
        res.json({message: 'Bạn không phải là quản trị viên'});
    }
    else {
        var token = req.headers.authorization.split(" ")[1];
        try {
            var decode = jwt.verify(token, config.secretKey).id;
        } catch(error) {
            res.statusCode = 401;
            res.json({message: 'Bạn không phải là quản trị viên'});
        }
        dbConnect.query("SELECT * FROM admin WHERE admin_id = '" + decode +"';", {
            type: dbConnect.QueryTypes.SELECT
        }) .then((result) => {
            if (result.length == 0) {
                res.statusCode = 401;
                res.json({message: 'Bạn không phải là quản trị viên'});
            } else {
                return next();
            }
        })
    }
}
