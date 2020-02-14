"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.order, {
      foreignKey: "id",
      as: "user_order",
      sourceKey: "id"
    });
    user.belongsTo(models.roles, {
      foreignKey: "id",
      as: "roles",
      sourceKey: "id"
    });
    user.belongsTo(models.status, {
      foreignKey: "id",
      as: "user",
      sourceKey: "id"
    });
  };
  return user;
};
