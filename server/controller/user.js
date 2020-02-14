const users = require("../models").user;
const role = require("../models").roles;
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config_secret.js");

exports.signup = (req, res) => {
  console.log("Processing func -> Register");
  const salt = bycrypt.genSaltSync(10);
  let dataemail = req.body.email;
  let roleUser = "user";
  users
    .create({
      name: req.body.name,
      phone: req.body.phone,
      email: dataemail,
      password: bycrypt.hashSync(req.body.password, salt)
    })
    .then(data => {
      const token = jwt.sign(
        {
          id: data.id
        },
        config.secret
      );
      res.status(200).send({
        user: data,
        roleUser,
        token,
        message: "User registered successfully!"
      });
    })
    .then(dataUsers => {
      users
        .findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          },
          where: { email: dataemail }
        })
        .then(function(dataUsers) {
          for (var i = 0; i < dataUsers.length; i++) {
            console.log(dataUsers[i].id);
            role.create({
              id_user: dataUsers[i].id,
              role: roleUser
            });
          }
        })
        .catch(err => {
          res.status(401).json({
            message: (err, "Bad Request")
          });
        });
    })
    .catch(e => {
      res.status(500).json({
        message: "Error"
      });
    });
};

// Sign In
exports.signIn = (req, res) => {
  users
    .findOne({
      include: [
        {
          model: role,
          as: "roles",
          attributes: ["role"]
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      where: {
        email: req.body.email
      }
    })
    .then(data => {
      if (data) {
        const auths = bycrypt.compareSync(req.body.password, data.password);
        if (auths) {
          const token = jwt.sign(
            {
              id: data.id
            },
            config.secret
          );

          res.status(200).send({
            email: data.email,
            role: data.roles.role,
            token,
            message: "User Success Login!"
          });
        } else {
          res.status(404).send({
            message: "Password Not Match"
          });
        }
      } else {
        res.status(404).send({
          message: "User not Found"
        });
      }
    })
    .catch(err => {
      res.status(401).json({
        message: (err, "Bad Request")
      });
    });
};
