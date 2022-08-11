module.exports = {
    HOST: "139.59.57.10",
    USER: "root",
    PASSWORD: "tech.hp!",
    DB: "mobility",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };