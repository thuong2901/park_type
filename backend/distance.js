const distance = require('google-distance-matrix');
const config = require('./config');

var origins = ['Trường THPT Lương Tài'];
var destinations = ['Trường THCS Hàn Thuyên'];

distance.key(config.googlemapKey);

module.exports.calDistance = (origin, destination) => {
    return new Promise((resolve, reject) => {
        origins[0] = origin;
        destinations[0] = destination;
        distance.matrix(origins, destinations, (err, distances) => {
            if (err) {
                return reject(err);
            }
            if (distances.status == 'OK') {
                if (distances.rows[0].elements[0].status == 'OK') {
                    var distance123 = distances.rows[0].elements[0].distance.text;
                    console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance123);
                    resolve(distance123);
                } else {
                    console.log(destination + ' is not reachable by land from ' + origin);
                    resolve("100000 km");
                }
            }
        });
    })
}
