// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require("../services/db");

// read all items in shop
module.exports.readAllShop = (callback) => {
  const qs = `
      SELECT * FROM shop;
      `;

  pool.query(qs, callback);
};
