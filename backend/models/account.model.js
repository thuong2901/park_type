const { dbConnect, DataTypes} = require('../connectDB');

const Account = dbConnect.define('account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING
    },
    code: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

// dbConnect.sync().then(() => {
//     console.log('Account model sync ok');
// }).catch(e => console.error(e));

module.exports = Account;

