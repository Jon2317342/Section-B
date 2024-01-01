// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require("express");

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();
// ##############################################################
// DEFINE ROUTES
// ##############################################################
const championRoutes = require("./championRoutes");
router.use("/champions", championRoutes);
const beastRoutes = require("./beastRoutes");
router.use("/beasts", beastRoutes);
const battlefieldRoutes = require("./battlefieldRoutes");
router.use("/battlefields", battlefieldRoutes);
const shopRoutes = require("./shopRoutes");
router.use("/shops", shopRoutes);
const inventoryRoutes = require("./inventoryRoutes");
router.use("/buy", inventoryRoutes);
// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;
