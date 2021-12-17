const { Sequelize, DataTypes, Deferrable} = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('parking_web', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});


let connectDB = async () => {
  try {
      await sequelize.authenticate();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


module.exports = {
  dbConnect: sequelize,
  DataTypes: DataTypes,
  Deferrable: Deferrable
};
