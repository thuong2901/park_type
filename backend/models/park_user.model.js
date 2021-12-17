const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Park_User = dbConnect.define('park_user', {
    rela_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    park_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Park_User model sync ok');
// }).catch(e => console.error(e));

module.exports = Park_User;