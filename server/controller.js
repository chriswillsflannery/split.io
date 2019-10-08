

module.exports = {
  createUser: (req, res, next) => {
    console.log("req", req.body);
    console.log("in signup!");

    next();
  }
}