// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");
const controller = require("../controllers/inventoryController");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();
// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.post(
  "/:champion_id/:item_id",
  controller.checkLevel,
  controller.checkGold,
  controller.addItem
);
router.get("/:champion_id", controller.getAllItem);
// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
