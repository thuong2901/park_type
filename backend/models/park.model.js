const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Park = dbConnect.define('park', {
    park_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    own_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_in: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    open_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActivated: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    hasCamera: {
        type: DataTypes.TINYINT,
        allowNull: false
    }, 
    hasRoof: {
        type: DataTypes.TINYINT,
        allowNull: false
    }, 
    allowOvernight: {
        type: DataTypes.TINYINT,
        allowNull: false
    }, 
    allowBooking: {
        type: DataTypes.TINYINT,
        allowNull: false
    }, 
    description: {
        type: DataTypes.TEXT
    },
    image_url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Park model sync ok');
// }).catch(e => console.error(e));

module.exports = Park;