const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    official_name: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
    },
    continent: {
      type: DataTypes.STRING,
    },
    flag: {
      type: DataTypes.TEXT,
      isUrl: true,
    },
    coats_of_arms: {
      type: DataTypes.TEXT,
    },
    map: {
      type: DataTypes.STRING,
      isUrl: true,
    },
    lat: {
      type: DataTypes.INTEGER,
    },
    lng: {
      type: DataTypes.INTEGER,
    },
    currencies: {
      type: DataTypes.JSON
    },
    languages: {
      type: DataTypes.JSON
    },
    borders: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    },
    timezones: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    top_level_domain: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    un_member: {
      type: DataTypes.BOOLEAN,
    },
    independent: {
      type: DataTypes.BOOLEAN,
    },
    callsign: {
      type: DataTypes.STRING,
    },
    suffixes: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    car_plate: {
      type: DataTypes.STRING,
    },
    car_side: {
      type: DataTypes.STRING,
    }, 
  } , {
    timestamps: false
  });
};
