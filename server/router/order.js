let jwt = require("../middleware/middleware");
module.exports = function(app) {
  const controller = require("../controller/order");

  //add order
  app.post(
    "/api/hotel/rooms/:idRoom/order",
    [jwt.authorized],
    controller.addOrder
  );

  //user confirmed that the payment of orders has done
  app.post(
    "/api/hotel/rooms/:idRoom/order/:idOrder",
    [jwt.authorized],
    controller.addOrder
  );

  //get all reservation approved / sudah diterima by user
  app.get(
    "/api/hotel/rooms/order/approved",
    [jwt.authorized],
    controller.approved
  );

  //get all reservation Pending / belum diterima by user
  app.get(
    "/api/hotel/rooms/order/pending",
    [jwt.authorized],
    controller.pending
  );
  //get form detail of pending payment
  app.get(
    "/api/hotel/rooms/payment/order/:idOrder",
    [jwt.authorized],
    controller.pendingPayment
  );

  //edit status payment to be confirmed
  app.put(
    "/api/hotel/rooms/payment/confirmed/:idOrder",
    [jwt.authorized],
    controller.editPayment
  );

  //laporan pemasukan by tamu yang masuk
  app.get(
    "/api/hotel/rooms/payment/allReport",
    [jwt.authorized],
    controller.allReport
  );
};
