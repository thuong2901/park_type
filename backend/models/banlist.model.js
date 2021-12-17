const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Banlist = dbConnect.define('banlist', {
    ban_email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Admin model sync ok');
// }).catch(e => console.error(e));

module.exports = Banlist;