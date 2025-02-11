class ProductList {
    constructor() {
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    getAllOrders() {
        return this.orders;
    }

    getOrderById(id) {
        const order = this.orders.find(order => order.id == id);
        if(!order) {
            throw new Error("Pedido não encontrado");
        }
        return order;
    }

    deleteOrder(id) {
        this.order = this.orders.filter(order => order.id != id);
    }
}

module.exports = ProductList;