"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "roles",
      [
        {
          id_user: "1",
          role: "admin",
          createdAt: "2020-2-12 09:26:35",
          updatedAt: "2020-2-12 09:26:35"
        },
        {
          id_user: "2",
          role: "resepsionis",
          createdAt: "2020-2-12 09:26:35",
          updatedAt: "2020-2-12 09:26:35"
        },
        {
          id_user: "3",
          role: "resepsionis",
          createdAt: "2020-2-12 09:26:35",
          updatedAt: "2020-2-12 09:26:35"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */
    return queryInterface.bulkDelete("roles", null, {});
  }
};
