const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const cors = require("cors");
// init App
let app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
); // support encoded bodies
app.use(express.static(path.resolve(__dirname, "public")));

app.use(cors()); //lintas antar port front and back
// app.use(cors);

const port = 5000;

require("./router/user")(app);
require("./router/room")(app);
require("./router/order")(app);
//listen to port
app.listen(port, () => console.log(`Server listened on port ${port}`));
