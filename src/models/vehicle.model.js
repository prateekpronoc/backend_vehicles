module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicles", {
      name: {
        type: Sequelize.STRING
      },
      licensePlate: {
        type: Sequelize.STRING,
        field :'license_plate'
      },
      vehicle_id :{
        type : Sequelize.UUID
      },
      created_at: {
        type: Sequelize.DATE
      },
      
    });
    return Vehicle;
  };