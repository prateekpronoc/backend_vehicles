module.exports = (sequelize, Sequelize) => {
    const catalogMaster = sequelize.define("catalog_masters", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING,
        field :'description'
      },
      parentId :{
        type : Sequelize.BIGINT(20),
        field : 'parent_id'
      },
      
      createdBy: {type: Sequelize.BIGINT(20), field : 'created_by'},
      updatedBy: {type: Sequelize.BIGINT(20), field : 'updated_by'},
      
      createdAt: {
        type: Sequelize.DATE,
        field :'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field :'updated_at'
      },
    });
    console.log("===============");
    console.log(catalogMaster);
    return catalogMaster;
  };

  