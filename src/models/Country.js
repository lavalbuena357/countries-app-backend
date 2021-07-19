const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      isUrl: true,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    },
    demonym: {
      type: DataTypes.STRING
    },
    timezones: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    borders: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    currencies: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    latlng: {
      type: DataTypes.ARRAY(DataTypes.FLOAT)
    }
  } , {
    timestamps: false
  });
};
