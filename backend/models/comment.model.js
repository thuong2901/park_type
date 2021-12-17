const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Comment = dbConnect.define('comment', {
    cmt_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rela_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Comment model sync ok');
// }).catch(e => console.error(e));

module.exports = Comment;