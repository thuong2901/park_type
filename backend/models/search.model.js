const { dbConnect, DataTypes} = require('../connectDB');

const Search = dbConnect.define('search', {
    search_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timein: {
        type: DataTypes.DATE
    },
    lat: {
        type: DataTypes.FLOAT
    },
    lng: {
        type: DataTypes.FLOAT
    },
    parks: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Search;