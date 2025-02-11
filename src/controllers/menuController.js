const Menu = require("../models/Menu");
const Item = require("../models/Item");

const lista = new MenuList();

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
            const movie = new Movie(title, director, year, genre);
            lista.addMovie(movie);
            res.status(200).json({message: 'Filme adicionado com sucesso!'})
        } catch (error) {
            res.status(400).json({message: 'Erro ao adicionar filme', error});
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filmes', error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar filme por id', error});
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({message: 'Erro ao atualizar filme', error});
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({message: 'Filme deletado com sucesso'});
        } catch (error) {
            res.status(404).json('Erro ao deletar filme', error);
        }
    }
};

module.exports = router;
