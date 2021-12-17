const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Admin = dbConnect.define('admin', {
    admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Admin model sync ok');
// }).catch(e => console.error(e));

module.exports = Admin;