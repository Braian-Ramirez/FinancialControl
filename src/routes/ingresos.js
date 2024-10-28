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
// Obtener todos los ingresos (Read - Todos)
router.get("/ingresos", (req, res) => {
    ingresoSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.status(500).json({ message: error.message }));
  });
  
  // Obtener un ingreso por ID (Read - Individual)
  router.get("/ingresos/:id", (req, res) => {
    const { id } = req.params;
    ingresoSchema
      .findById(id)
      .then((data) => {
        if (!data) return res.status(404).json({ message: "Ingreso no encontrado" });
        res.json(data);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });

module.exports = router;