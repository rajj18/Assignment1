const JWT = require("jsonwebtoken");

    module.exports.authenticateToken = async (req, res, next) => {
    try {
        // get token
        const token = req.headers["authorization"].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            return res.status(401).send({
            success: false,
            message: "Un-Authorize User",
            });
        } else {
            req.user = decode
            next();
        }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        message: "Please provide Auth Token",
        error,
        });
    }
    };


    module.exports.adminCheck = async (req, res, next) => {
        try {
          //const user = await userModel.findById(req.body.id);
          const userType =  req.user.usertype;
          if (userType !== "admin") {
            return res.status(401).send({
              success: false,
              message: "Un-Authorized Access",
            });
          } else {
            next();
          }
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Something went wrong",
            error,
          });
        }
      };

      module.exports.businessOwnerCheck = async (req, res, next) => {
        try {
          //const user = await userModel.findById(req.body.id);
          const userType =  req.user.role;
          if (userType !== "businessOwner") {
            return res.status(401).send({
              success: false,
              message: "Un-Authorized Access",
            });
          } else {
            next();
          }
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Something went wrong",
            error,
          });
        }
      };


      module.exports.userCheck = async (req, res, next) => {
        try {
          //const user = await userModel.findById(req.body.id);
          const userType =  req.user.role;
          if (userType !== "user") {
            return res.status(401).send({
              success: false,
              message: "Un-Authorized Access",
            });
          } else {
            next();
          }
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Something went wrong",
            error,
          });
        }
      };