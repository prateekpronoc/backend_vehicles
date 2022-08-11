module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicles", {
      name: {
        type: Sequelize.STRING
      },
      licensePlate: {
        type: Sequelize.STRING,
        field :'license_plate'
      },
      vehicleId :{
        type : Sequelize.UUID,
        field : 'vehicle_id'
      },
      status:{
        type: Sequelize.BIGINT(20)
      },
      ownership : {type: Sequelize.BIGINT(20)},
      vehicleType :{type: Sequelize.BIGINT(20),
        field : 'vehicle_type'},
      yearOfManufacture :{type: Sequelize.INTEGER(11),
        field : 'year_of_manufacture'},
      make :{type: Sequelize.BIGINT(20)},
      model :{type: Sequelize.BIGINT(20)},
      trim: {type: Sequelize.STRING},
      registrationState:{type: Sequelize.BIGINT(20), field : 'registration_state'},
      color: {type: Sequelize.BIGINT(20)},
      bodyType:{type: Sequelize.BIGINT(20), field : 'body_type'},
      bodySubtype:{type: Sequelize.BIGINT(20), field : 'body_subtype'},
      msrp: {type: Sequelize.DOUBLE(20,4)},
      engineNo :{type:Sequelize.STRING , field : 'engine_no'},
      chesisNo :{type: Sequelize.STRING, field : 'chesis_no'},
      capacity : {type:Sequelize.INTEGER},
      registrationDate: {type: Sequelize.DATE, field : 'registration_date'},
      onRoadDate: {type: Sequelize.DATE, field : 'on_road_date'},
      identificationNo: {type: Sequelize.STRING, field : 'identification_no'},
      fuelType: {type: Sequelize.BIGINT(20), field : 'fuel_type'},
      createdBy: {type: Sequelize.BIGINT(20), field : 'created_by'},
      updatedBy: {type: Sequelize.BIGINT(20), field : 'updated_by'},
      isArchived: {type: Sequelize.TINYINT(1), field : 'is_archived'},
      // isSample: {type: Sequelize.TINYINT(1)}, field : 'is_sample',
      odometer: {type: Sequelize.BIGINT(20), field : 'odometer'},
      tenantId: {type: Sequelize.BIGINT(20), field : 'tenant_id'},
      vendorId: {type: Sequelize.BIGINT(20), field : 'vendor_id'},
    

      createdAt: {
        type: Sequelize.DATE,
        field :'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field :'updated_at'
      },
    });
    return Vehicle;
  };

  