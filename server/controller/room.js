const room = require("../models").rooms;

//allrooms
exports.allRooms = (req, res) => {
  console.log("find All data");
  room
    .findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    })
    .then(data => {
      res.status(200).send({
        rooms: data
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};

//rooms by Id
exports.roomDetail = (req, res) => {
  console.log("find detail of room");

  const idRoom = req.params.idRoom;
  // console.log(eventName);
  room
    .findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      where: {
        id: idRoom
      }
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).json({
        message: err,
        success: false
      });
    });
};
