

module.exports.sortByRate = (a, b) => {
    if (a['rate'] > b['rate']) return -1;
    else return 1;
};

module.exports.sortByPrice = (a, b) => {
    if (Number(a['price']) < Number(b['price'])) return -1;
    else return 1;
};

module.exports.sortByDistance = (a, b) => {
    if (Number(a['distance'].slice(0, -3)) < Number(b['distance'].slice(0, -3))) return -1;
    else return 1;
};

