let jwt = require("../middleware/middleware");
module.exports = function(app) {
  const controller = require("../controller/room");

  app.get("/api/hotel/rooms/all", [jwt.authorized], controller.allRooms);
  app.get("/api/hotel/rooms/:idRoom", [jwt.authorized], controller.roomDetail);
};
