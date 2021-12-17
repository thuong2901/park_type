const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Report = dbConnect.define('report', {
    report_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rela_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});




module.exports = Report;