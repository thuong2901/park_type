const express = require('express');
const cors = require('cors');

const whiteList = ['http://localhost:3000', 'https://localhost:3443'];
var corsOptionDelegate = (req, callback) => {
    var corsOptions;
    if (whiteList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true, credentials: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
}

const corsOption = {
    credentials: true
}

exports.cors = cors(corsOptionDelegate);
exports.corsWithOptions = cors(corsOptionDelegate);