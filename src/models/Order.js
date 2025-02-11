const { v4: uuid4 } = require("uuid");

class Order {
    constructor(clientName, type, description, price, status) {
        this.id = uuid4();
        this.clientName = clientName;
        this.type = type;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}

module.exports = Order;