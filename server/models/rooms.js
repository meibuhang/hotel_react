"use strict";
module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define(
    "rooms",
    {
      type_rooms: DataTypes.STRING,
      class_rooms: DataTypes.STRING,
      detail_rooms: DataTypes.STRING,
      price: DataTypes.INTEGER,
      photo: DataTypes.STRING
    },
    {}
  );
  rooms.associate = function(models) {
    // associations can be defined here
    rooms.belongsTo(models.status, {
      foreignKey: "id",
      as: "status_room",
      sourceKey: "id"
    });
    rooms.hasMany(models.order, {
      foreignKey: "id",
      as: "rooms_order",
      sourceKey: "id"
    });
  };
  return rooms;
};
