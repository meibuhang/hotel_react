"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mei",
          phone: "+6285399140190",
          email: "mei@gmail.com",
          password:
            "$2a$10$T.SJDjwtOyV63tizg1fJG.ocQQfEF6wgZa0BXEaCjLNEF7saUkKpe", //mei
          createdAt: "2020-2-12 08:26:35",
          updatedAt: "2020-2-12 08:26:35"
        },
        {
          name: "Ana",
          phone: "+62855010175",
          email: "ana@gmail.com",
          password:
            "$2a$10$ETUz0h9I90EhgU7CbYG5p.butqkS8EMeExU/cEt79iEjQ4SEiH.Z.", //ana
          createdAt: "2020-2-12 08:26:35",
          updatedAt: "2020-2-12 08:26:35"
        },
        {
          name: "Nuri",
          phone: "+628190767676",
          email: "nuri@gmail.com",
          password:
            "$2a$10$7cKXrzxZNeDIgVR0J.7SQOeGbEB2qtMG5y9i9uUywcVryYyJTibuW", //nuri
          createdAt: "2020-2-12 08:26:35",
          updatedAt: "2020-2-12 08:26:35"
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
    return queryInterface.bulkDelete("users", null, {});
  }
};
