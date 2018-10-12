'use strict';

//import Driver from './driver';

//const Driver=require('./ssdfsafasfsadriver.js');



module.exports = (sequelize, DataTypes) => {
  const CarDriver = sequelize.define('CarDriver', {
    status: DataTypes.INTEGER,
    last_lat: DataTypes.STRING,
    last_long: DataTypes.STRING,
    last_location_updated_on: DataTypes.DATE
  }, {});
  CarDriver.associate = function(models) {

    // associations can be defined here
    CarDriver.belongsTo(models.Driver, {
      onDelete: 'CASCADE'
    });
   
    
  };
  return CarDriver;
};

/*
CarDriver.belongsTo(Driver, {
  onDelete: 'CASCADE'
});

Driver.hasMany(CarDriver, {
  onDelete:'CASCADE'
})
*/




