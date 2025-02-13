const Menu = require("../models/Menu");
const Item = require("../models/Item");

const lista = new Menu();

lista.addItem(new Item('Salgado', 'Pão de Queijo', 'R$3,00'));
lista.addItem(new Item('Salgado', 'Misto Quente', 'R$7,00'));
lista.addItem(new Item('Salgado', 'Coxinha', 'R$5,00'));
lista.addItem(new Item('Doce', 'Carolina', 'R$5,00'));
lista.addItem(new Item('Doce', 'Brigadeiro', 'R$2,00'));
lista.addItem(new Item('Doce', 'Cookie', 'R$6,00'));
lista.addItem(new Item('Bebida', 'Água', 'R$3,00'));
lista.addItem(new Item('Bebida', 'Café Preto', 'R$3,00'));
lista.addItem(new Item('Bebida', 'Suco de Maracujá', 'R$10,00'));

const router = {
    addItem: (req,res) => {
        try {
            const{type, description, price} = req.body;
            if(!type || !description || !price) {
                throw newError('Preencha todos os campos!')
            }
            const item = new Item(type, description, price);
            lista.addItem(item);
            res.status(200).json({message: 'Item adicionado com sucesso!'})
        } catch (error) {
            res.status(400).json({message: 'Erro ao adicionar item', error});
        }
    },

    getAllItems: (req, res) => {
        try {
            const items = lista.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar items', error});
        }
    },

    getItemById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getItemById(id));
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar item por id', error});
        }
    },

    deleteItem: (req, res) => {
        try {
            lista.deleteItem(req.params.id);
            res.status(200).json({message: 'Item deletado com sucesso'});
        } catch (error) {
            res.status(404).json({message: 'Erro ao deletar item', error});
        }
    }
};

module.exports = router;
