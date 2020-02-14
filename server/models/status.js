"use strict";
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define(
    "status",
    {
      id_rooms: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_order: DataTypes.INTEGER,
      status_user: DataTypes.STRING
    },
    {}
  );
  status.associate = function(models) {
    // associations can be defined here
    status.belongsTo(models.rooms, {
      foreignKey: "id_rooms",
      as: "status_rooms",
      sourceKey: "id"
    });
    status.belongsTo(models.user, {
      foreignKey: "id_user",
      as: "user",
      sourceKey: "id"
    });
    status.belongsTo(models.order, {
      foreignKey: "id_order",
      as: "status_order",
      sourceKey: "id"
    });
  };
  return status;
};
