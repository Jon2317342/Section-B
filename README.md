# League of Legends MMORPG styled game

# Creating Champion

## POST /champions

### Create a new champion by providing their name in the request body. Upon successful creation, the response should include the newly generated champion_id.

### Example Request Body:

{
"name": "Mordekaiser"
}

### Example Response:

{
"message": "New champion added to guild!",
"championId": 1,
"name": "Mordekaiser"
}

### Status Code: 201 Created

### Error Handling:

o If the provided name is already associated with another champion, return 409
Conflict.
o If the request body is missing name, return 400 Bad Request.

# Checking Bestiary

## GET /beasts

### Retrieve a list of all beast

### Example Response:

{
"beast_id": 1,
"name": "Raptor",
"health": 30,
"damage": 10,
"status": "Alive",
"difficulty": "C",
"exp_drop": 1,
"gold_drop": 8
},
{
"beast_id": 2,
"name": "Voidgrub",
"health": 60,
"damage": 20,
"status": "Alive",
"difficulty": "C",
"exp_drop": 3,
"gold_drop": 16
}

# Creating Battlefield

## POST /battlefields/:champion_id/:beast_id

### creates a battlefield of select champion and beast

### Example Response:

{
"message": "Successfully created battlefield between Mordekaiser and Voidgrub!",
"battle_id": 15
}

### Error Handling:

o If the beast has already been defeated, returns 400 Bad Request and "message": "The beast is already defeated."
o If the params id cannot be found, returns 404 Not Found and "message": "Champion or beast not found"

# Champion fighting beast

## PUT /:battle_id

### simulates the fight between champion and beast displays round results in terminal after each round deletes battlefield to prevent exploits

### 3 outcomes win, stalemate, lose, if stalemate beast does not get defeated

### Example Response (if champion wins)

{
"message": "You Won!",
"level_gained": 1,
"gold_gained": 8
}

### Error Handling:

o if battle_id is not legit returns 404 Not Found and "message": "Battlefield not found"

# Checking Shop

## GET /shops

### veiw all items in shop

### Example Response

{
"item_id": 1,
"name": "Chain_Vest",
"type": "armor",
"description": "30 Armor",
"price": 24,
"level_requirement": 4,
"rarity": "C",
"item_damage": null,
"item_protection": 30
},
{
"item_id": 2,
"name": "Bramble_Vest",
"type": "armor",
"description": "50 Armor",
"price": 32,
"level_requirement": 7,
"rarity": "C",
"item_damage": null,
"item_protection": 50
}

# Purchasing items from shop

## POST /buy/:champion_id/:item_id

### purchase an item from the shop, once item is bought, the item is removed from the shop to prevent duplicate purchases as i want to keep each item unique

### Example Response

{
"message": "Gold deducted: 270, Typhoon added to inventory"
}

### Error Handling:

o if champion_id is in-valid returns, 404 Not Found and "message": "Champion not found"
o if item_id is is in-valid returns, 404 Not Found and "message": "Item not found in shop"
o if champion is not at required level for item returns, 400 Bad Request and "message": "Level requirement not met to purchase the item"
o if champion dooes not have enough gold for item returns, 400 Bad Request and "message": "Not enough gold to purchase the item"

# Chacking inventory

## GET /buy/:champion_id

### to show all items in champion inventory

### Example Response

{
"inventory_id": 1,
"champion_id": 1,
"item_id": 1,
"name": "Chain_Vest",
"type": "armor",
"description": "30 Armor",
"rarity": "C",
"item_damage": null,
"item_protection": 30
}

### Error Handling:

o if champion_id is in-valid returns, 404 Not Found and "message": "Champion not found"

# Equipping items

## PUT /champions/:champion_id/:item_id

### equip weapon or armor for champion

### Example Response

{
"message": "Chain_Vest has been equipped successfully!"
}

### Error Handling:

o if champion_id is in-valid returns, 404 Not Found and "message": "Champion not found"
o if no such item_id in inventory returns, 404 Not Found and "message": "Item not found in inventory"
o if item type is not weapon or armor (unlikely to happen cuz i made everything in shop but just a precausionary measure) returns, 400 Bad Request and message: "Invalid item type"

# Unequipping items

## PUT /champions/unequip/:champion_id/:choice (where choice is an option where 1 is to unequip armor and 2 is to unequip weapon)

### unequip weapon or armor for champion

### Example Response (for weapon)

{
"message": "Weapon unequipped successfully!"
}

### Error Handling:

o if champion_id is in-valid returns, 404 Not Found and "message": "Champion not found"
o if choice is invalid returns, 400 Bad Request and "message": "Please choose a valid option: 1 to unequip armor and 2 to unequip weapon"

# Displaying leader board of champions

## GET /champions

### show all champions

### Example Response

{
"champion_id": 1,
"name": "Riven",
"health": 130,
"damage": 45,
"level": 4012,
"gold": 80,
"achievements": 0,
"weapon_equipped": "Recurve_Bow",
"armor_equipped": "Chain_Vest"
},
{
"champion_id": 2,
"name": "Mordekaiser",
"health": 100,
"damage": 15,
"level": 1,
"gold": 0,
"achievements": 0,
"weapon_equipped": "none",
"armor_equipped": "none"
}

# Deleting Champion and their related inventory

## DELETE /champion/:champion_id

### delete selected champion and their inventory

204 No Content

### Error Handling:

o if champion_id is in-valid returns, 404 Not Found and "message": "Champion not found"

## That wraps up my project, this project was inspired by a game i play called League of Legends
