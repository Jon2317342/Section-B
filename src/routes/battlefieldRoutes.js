// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");
const controller = require("../controllers/battlefieldController");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();
// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.post(
  "/:champion_id/:beast_id",
  controller.checkBeastStatus,
  controller.createBattlefield
);
router.put("/:battle_id", controller.battle);
// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
