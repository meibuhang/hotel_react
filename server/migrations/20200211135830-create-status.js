"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("statuses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_rooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "rooms",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "orders",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      status_user: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("statuses");
  }
};
