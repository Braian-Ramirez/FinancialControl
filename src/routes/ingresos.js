const express = require("express");
const router = express.Router();
const ingresoSchema = require("../models/ingresos"); // Importamos el esquema de ingresos

// Crear un nuevo ingreso (Create)
router.post("/ingresos", (req, res) => {
  const ingreso = new ingresoSchema(req.body);
  ingreso
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

module.exports = router;