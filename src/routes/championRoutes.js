// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");
const controller = require("../controllers/championController");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();
// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.post("/", controller.checkDupChampion, controller.createNewChampion);
router.put(
  "/:champion_id/:item_id",
  controller.checkItemExist,
  controller.equipItem
);
router.put("/unequip/:champion_id/:choice", controller.unequipItem);
router.get("/", controller.veiwAllChampion);
router.delete("/:champion_id", controller.removeChampion);
// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
