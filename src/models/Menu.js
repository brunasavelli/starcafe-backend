class Menu {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }

    getAllItems() {
        return this.items;
    }
}

module.exports = Menu;