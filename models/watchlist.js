'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Watchlist.belongsTo(models.User, { foreignKey: "UserId" })
    }
  }
  Watchlist.init({
    UserId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "UserId is required" },
        notEmpty: { msg: "UserId is required" }
      }
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Stock is required" },
        notEmpty: { msg: "Stock is required" }
      }
    }
  }, {
    sequelize,
    modelName: 'Watchlist',
  });
  return Watchlist;
};