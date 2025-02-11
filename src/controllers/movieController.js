const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const filme1 = new Movie('Diário de uma Paixão', 'Nick Cassavetes', '2004', 'Romance', 10, false);
lista.addMovie(filme1);

lista.addMovie(new Movie('10 Coisas que Odeio em Você', 'Gil Junger', '1999', 'Romance', 10, false));

const router = {
    addMovie: (req,res) => {
        try {
            const{title, director, year, genre} = req.body;
            if(!title || !director || !year || !genre) {
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
