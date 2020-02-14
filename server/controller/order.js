const room = require("../models").rooms;
const order = require("../models").order;
const user = require("../models").user;
const roles = require("../models").role;

//add order
exports.addOrder = async (req, res, next) => {
  const idUser = req.userId;
  const idRoom = req.params.idRoom;
  try {
    let checkRoom = await room.findOne({
      where: {
        id: idRoom
      }
    });

    console.log(idUser);

    if (!checkRoom) {
      res.status(404).json({
        msg: "Room Not Found"
      });
    } else {
      //count price and length of stays
      let price = checkRoom.price;
      let startDate = new Date(req.body.start_date);
      let endDate = new Date(req.body.end_date);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      let tot = diffDays * price;
      console.log(diffDays);

      let data = {
        id_rooms: idRoom,
        id_user: idUser,
        start_date: startDate,
        end_date: endDate,
        length_stay: diffDays,
        total_price: tot,
        status: "pending"
      };

      const errors = [];
      // //validasi input
      if (!data.start_date) errors.push("`Start date` is required");
      if (!data.end_date) errors.push("`End date` is required");

      const hasErrors = Boolean(errors.length);
      if (hasErrors) {
        return res.status(422).json({
          errors: errors
        });
      }
      order.create(data).then(data => {
        if (data) {
          room
            .findOne({
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              },
              where: {
                id: idRoom
              }
            })
            .then(item => {
              res.send(item);
            });
        } else {
          res.status(400).json({
            message: "No Orders was Added"
          });
        }
      });
    }
  } catch (e) {
    next(e);
  }
};

//user confirmed that the payment of orders has done :

exports.editPayment = async (req, res, next) => {
  const idUser = req.userId;
  const orderId = req.params.idOrder;
  try {
    let dataOrder = await order.findOne({
      where: {
        id: orderId
      }
    });
    if (!dataOrder) {
      res.status(404).json({
        msg: "Not Found"
      });
    } else {
      let input = {
        status: "approved"
      };
      order
        .update(input, {
          where: {
            id: orderId,
            id_user: idUser
          }
        })
        .then(updated => {
          res.status(200).json({
            msg: "updated",
            data: updated
          });
        })
        .catch(err => {
          res.status(401).json({
            msg: "Bad Request",
            Error: err
          });
        });
    }
  } catch (e) {
    next(e);
  }
};

//get detail of pending payment by id
//rooms by Id
exports.pendingPayment = (req, res) => {
  console.log("find detail of pending payment");
  const idUser = req.userId;
  const idOrder = req.params.idOrder;
  // console.log(eventName);
  order
    .findOne({
      include: [
        {
          model: user,
          as: "user_order",
          attributes: ["name", "email", "phone"]
        },
        {
          model: room,
          as: "rooms_order",
          attributes: ["type_rooms", "detail_rooms", "price"]
        }
      ],
      where: {
        id: idOrder,
        id_user: idUser,
        status: "pending"
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

exports.approved = (req, res) => {
  console.log("find detail of approved payment");
  const idUser = req.userId;
  const idOrder = req.params.idOrder;
  // console.log(eventName);
  order
    .findAll({
      include: [
        {
          model: user,
          as: "user_order",
          attributes: ["name", "email", "phone"]
        },
        {
          model: room,
          as: "rooms_order",
          attributes: ["type_rooms", "detail_rooms", "price"]
        }
      ],
      order: [["createdAt", "DESC"]],
      where: {
        id_user: idUser,
        status: "approved"
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

exports.allReport = (req, res) => {
  console.log("tess");
  // const idUser = req.userId;
  // const idOrder = req.params.idOrder;
  // console.log(eventName);
  order
    .findAll({
      include: [
        {
          model: user,
          as: "user_order",
          attributes: ["name", "email", "phone"]
        },
        {
          model: room,
          as: "rooms_order",
          attributes: ["type_rooms", "detail_rooms", "price"]
        }
      ],

      order: [["createdAt", "DESC"]],
      where: {
        status: "approved"
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

//pending report

exports.pending = (req, res) => {
  console.log("find detail of pending payment");
  const idUser = req.userId;
  const idOrder = req.params.idOrder;
  // console.log(eventName);
  order
    .findAll({
      include: [
        {
          model: user,
          as: "user_order",
          attributes: ["name", "email", "phone"]
        },
        {
          model: room,
          as: "rooms_order",
          attributes: ["type_rooms", "detail_rooms", "price"]
        }
      ],
      order: [["id", "DESC"]],
      where: {
        id_user: idUser,
        status: "pending"
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
