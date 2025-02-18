const Order = require("../models/Order");
const OrderList = require("../models/OrderList");

const list =  new OrderList();

list.addOrder(new Order('Caio', 'Salgado', 'Coxinha', 'R$5,00', 'preparando'));
list.addOrder(new Order('Maria', 'Doce', 'Carolina', 'R$5,00', 'preparando'));
list.addOrder(new Order('Ana', 'Bebida', 'Suco de maracujá', 'R$10,00', 'preparando'));
list.addOrder(new Order('José', 'Salgado', 'Misto quente', 'R$7,00', 'preparando'));

const router = {
    addOrder: (req, res) => {
        try {
            const{clientName, type, description, price} = req.body;
            if(!clientName || !type || !description || !price ) {
                throw newError('Preencha todos os campos!')
            }
            const order = new Order(clientName, type, description, price);
            list.addOrder(order);
            res.status(200).json({message: 'Pedido adicionado com sucesso'})
        } catch (error) {
            res.status(400).json({message: 'Erro ao adicionar pedido', error})
        }
    },

    getAllOrders: (req, res) => {
        try {
            const orders = list.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(400).json({message: 'Erro ao buscar pedidos', error})
        }
    },

    getOrderById: (req, res) => {
        try {
            const order = list.getOrderById(req.params.id);
            res.json({message: 'Pedido encontrado', pedido: order});
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar pedido', error});
        }
    },

    deleteOrder: (req, res) => {
        try {
            const order = list.getOrderById(req.params.id);
            if(order.status === 'Pronto') {
                return res.status(403).json({message: 'Não foi possível deletar o pedido pronto'});
            }
            list.deleteOrder(req.params.id);
            res.status(200).json({message: 'Pedido deletado com sucesso!'});
        } catch (error) {
            res.status(404).json({message: 'Erro ao deletar pedido'});
        }
    }
};

module.exports = router;