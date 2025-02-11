const { v4: uuid4 } = require("uuid");

class Item {
    constructor(type, description, price) {
        this.id = uuid4();
        this.type = type;
        this.description = description;
        this.price = price;
    }
}

module.exports = Item;