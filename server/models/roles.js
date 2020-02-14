"use strict";
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define(
    "roles",
    {
      id_user: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {}
  );
  roles.associate = function(models) {
    // associations can be defined here
    roles.belongsTo(models.user, {
      foreignKey: "id_user",
      as: "roles",
      sourceKey: "id"
    });
  };
  return roles;
};
