module.exports = (sequelize, Sequelize) => {
    const catalogValues= sequelize.define("catalog_values", {
      value: {
        type: Sequelize.STRING
      },
      masterId: {
        type: Sequelize.BIGINT(20),
        field :'master_id'
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
    return catalogValues;
  };

  