const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.get("/items", menuController.getAllItems);
router.post("/items", menuController.addItem);
router.delete("/items/:id", menuController.deleteItem);
router.get("/items/:id", menuController.getItemById);

module.exports = router;