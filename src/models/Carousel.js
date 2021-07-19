const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('carousel', {
      title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      isUrl: true,
      allowNull: false
    }
  } , {
    timestamps: false
  });
};
