const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.get("/menu", menuController.getAllItems);
router.post("/menu", menuController.addItem);
router.delete("/menu/:id", menuController.deleteItem);
router.get("/menu/:id", menuController.getItemById);

module.exports = router;