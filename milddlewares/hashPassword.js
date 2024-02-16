const argon2 = require("argon2");


const hashPassword = (req, res, next) => {
  const { password } = req.body;
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  argon2
    .hash(password, hashingOptions)
    .then((hashPassword) => {
      console.log("hashPassword :>> ", hashPassword);
      delete password;
      req.body.hashPassword = hashPassword;
      next();
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};
module.exports = hashPassword;

// const argon2 = require("argon2");

// const hashingOptions = {
//   type: argon2.argon2id,
//   memoryCost: 2 ** 16,
//   timeCost: 5,
//   parallelism: 1,
// };


// const hashedPassword = (req, res, next) => {
//   argon2
//     .hash(req.body.password, hashingOptions)
//     .then((hashPassword) => {
// console.log("hashPassword :>> ", hashPassword);
//       req.body.hashPassword = hashPassword;
//       delete req.body.password;

//       next();
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };
// module.exports = hashedPassword;