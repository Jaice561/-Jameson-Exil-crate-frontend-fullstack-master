'use strict'

// Rating
module.exports = function(sequelize, DataTypes) {
  let Rating = sequelize.define('ratings', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    },
    rating: {
      type: DataTypes.INTEGER
    }
  })

  Rating.associate = function(models) {
    Rating.belongsTo(models.User)
    Rating.belongsTo(models.Crate)
  }

  return Rating
}