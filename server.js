const express = require("express");
const cors = require("cors");
const itemRoutes = require("./src/routes/itemRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

const app = express();
const PORT = 2080;

app.use(cors());
app.use(express.json());

app.use("/api", itemRoutes);
app.use("/api", orderRoutes);

app.get("/", (req, res) => {
    res.send("Funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});