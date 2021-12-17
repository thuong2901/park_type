const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Pending = dbConnect.define('pending', {
    pending_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rela_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time_start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Pending model sync ok');
// }).catch(e => console.error(e));

module.exports = Pending;