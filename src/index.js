const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 4000;
//const ingresosRoutes = require("./routes/ingresos");
const gastosRoutes = require("./routes/gastos");
//const costosRoutes = require("./routes/costos");
const usuariosRoutes = require("./routes/usuarios");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(express.json());

// Gestión de rutas usando middleware
//app.use("/api/ingresos", ingresosRoutes); // rutas para ingresos
app.use("/api/gastos", gastosRoutes); // rutas para gastos
//app.use("/api/costos", costosRoutes); // rutas para costos
app.use("/api", usuariosRoutes); // rutas para registro de usuario

// Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

// Conexión al puerto
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});