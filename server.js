const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes");

const app = express();
const PORT = 2080;

app.use(cors());
app.use(express.json());

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("Funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});