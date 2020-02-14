"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      id_rooms: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      length_stay: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      photo: DataTypes.STRING
    },
    {}
  );
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.rooms, {
      foreignKey: "id_rooms",
      as: "rooms_order",
      sourceKey: "id"
    });
    order.belongsTo(models.user, {
      foreignKey: "id_user",
      as: "user_order",
      sourceKey: "id"
    });
    order.belongsTo(models.status, {
      foreignKey: "id",
      as: "status_order",
      sourceKey: "id"
    });
  };
  return order;
};
