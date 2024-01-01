// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require("../services/db");

// check for duplicate champions for create user
module.exports.checkDuplicateChampion = (data, callback) => {
  const qs = `
    SELECT * FROM champion where name = ?;     
    `;
  const VALUES = [data.name];
  pool.query(qs, VALUES, callback);
};

// create new champion
module.exports.insertNewChampion = (data, callback) => {
  const qs = `INSERT INTO champion (name)
      VALUES (?)`;

  const VALUES = [data.name];

  pool.query(qs, VALUES, callback);
};

// check champion
module.exports.checkChampion = (data, callback) => {
  const qs = `
    SELECT * FROM champion WHERE champion_id = ?;
  `;
  const VALUES = [data.champion_id];
  pool.query(qs, VALUES, callback);
};

// check inventory
module.exports.checkInventory = (data, callback) => {
  const qs = `
    SELECT * FROM inventory WHERE champion_id = ? AND item_id = ?;
  `;
  const VALUES = [data.champion_id, data.item_id];
  pool.query(qs, VALUES, callback);
};

// check item type and name
module.exports.checkItemType = (data, callback) => {
  const qs = `
    SELECT type, name FROM inventory WHERE champion_id = ? AND item_id = ?;
  `;
  const VALUES = [data.champion_id, data.item_id];
  pool.query(qs, VALUES, callback);
};

// equip armor
module.exports.equipArmor = (data, callback) => {
  const qs = `
    UPDATE champion
    JOIN inventory ON champion.champion_id = inventory.champion_id
    SET
      champion.armor_equipped = inventory.name,
      champion.health = champion.health + inventory.item_protection
    WHERE champion.champion_id = ? AND inventory.item_id = ?;
  `;
  const VALUES = [data.champion_id, data.item_id];
  pool.query(qs, VALUES, callback);
};

// equip weapon
module.exports.equipWeapon = (data, callback) => {
  const qs = `
    UPDATE champion
    JOIN inventory ON champion.champion_id = inventory.champion_id
    SET
      champion.weapon_equipped = inventory.name,
      champion.damage = champion.damage + inventory.item_damage
    WHERE champion.champion_id = ? AND inventory.item_id = ?;
  `;
  const VALUES = [data.champion_id, data.item_id];
  pool.query(qs, VALUES, callback);
};

// reset champion's base damage to 15
module.exports.resetDamage = (data, callback) => {
  const qs = `
    UPDATE champion
    SET
      champion.damage = 15
    WHERE champion.champion_id = ?;
  `;
  const VALUES = [data.champion_id];
  pool.query(qs, VALUES, callback);
};

// reset champion's base health to 100
module.exports.resetHealth = (data, callback) => {
  const qs = `
    UPDATE champion
    SET
      champion.health = 100
    WHERE champion.champion_id = ?;
  `;
  const VALUES = [data.champion_id];
  pool.query(qs, VALUES, callback);
};

// get item name
module.exports.getItemName = (data, callback) => {
  const qs = `
SELECT name FROM inventory WHERE item_id = ?
  `;
  const VALUES = [data.item_id];
  pool.query(qs, VALUES, callback);
};

// unequip armor
module.exports.unequipArmor = (data, callback) => {
  const qs = `
    UPDATE Champion
    SET armor_equipped = 'none', health = 100
    WHERE champion_id = ?;
  `;
  const VALUES = [data.champion_id];
  pool.query(qs, VALUES, callback);
};

// unequip weapon
module.exports.unequipWeapon = (data, callback) => {
  const qs = `
    UPDATE Champion
    SET weapon_equipped = 'none', damage = 15
    WHERE champion_id = ?;
  `;
  const VALUES = [data.champion_id];
  pool.query(qs, VALUES, callback);
};

// read all champion
module.exports.readAllChampion = (callback) => {
  const SQLSTATMENT = `
    SELECT * FROM champion;
    `;

  pool.query(SQLSTATMENT, callback);
};

// delete champion
module.exports.deleteChampion = (data, callback) => {
  const qs = `
  DELETE FROM champion where champion_id = ?;
  DELETE FROM inventory where champion_id = ?;
  `;

  const VALUES = [data.champion_id, data.champion_id];

  pool.query(qs, VALUES, callback);
};
