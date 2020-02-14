"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "rooms",
      [
        {
          type_rooms: "single",
          class_rooms: "I",
          price: "300000",
          photo:
            "https://images.unsplash.com/photo-1577791465291-35b823edfeba?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          detail_rooms:
            "City View, AC, Wifi, TV, Twin Bed, Breakfast, Coffee / Tea Maker ,Shower, Toiletries, Complimentary bottled water ",
          createdAt: "2020-2-12 13:26:35",
          updatedAt: "2020-2-12 13:26:35"
        },
        {
          type_rooms: "double",
          class_rooms: "I",
          price: "500000",
          photo:
            "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwOTQ5MH0&auto=format&fit=crop&w=334&q=80",
          detail_rooms:
            "Lake View, Balacony, AC, Wifi, TV, Double Bed, Breakfast, Coffee / Tea Maker , Refrigerator, Shower, Bathub,Hair Dryer, Toiletries, Complimentary bottled water ",
          createdAt: "2020-2-12 13:26:35",
          updatedAt: "2020-2-12 13:26:35"
        },
        {
          type_rooms: "deluxe",
          class_rooms: "I",
          price: "800000",
          photo:
            "https://images.unsplash.com/photo-1578898886225-c7c894047899?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          detail_rooms:
            "Lake View, Balacony, AC, Wifi, TV, Deluxe Bed, Mini Bar, Desk ,Breakfast, Coffee / Tea Maker ,In-room safe, Blackout drapes / curtains,  Refrigerator, Shower, Bathub,Hair Dryer, Toiletries, Complimentary bottled water ",
          createdAt: "2020-2-12 13:26:35",
          updatedAt: "2020-2-12 13:26:35"
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
    return queryInterface.bulkDelete("rooms", null, {});
  }
};
