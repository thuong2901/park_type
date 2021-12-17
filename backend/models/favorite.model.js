const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Favorite = dbConnect.define('favorite', {
    flist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rela_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Favorite model sync ok');
// }).catch(e => console.error(e));

module.exports = Favorite;