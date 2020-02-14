const verifySignUp = require("../middleware/verifysignup");
let jwt = require("../middleware/middleware");
module.exports = function(app) {
  const controller = require("../controller/user");
  // sign up
  app.post(
    "/api/hotel/auth/signup",
    [verifySignUp.checkDuplicateEmail],
    controller.signup
  );

  // sign in
  app.post("/api/hotel/auth/signin", controller.signIn);
};
