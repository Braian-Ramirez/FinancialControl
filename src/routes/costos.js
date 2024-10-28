const express = require("express");
const router = express.Router();
const costoSchema = require("../models/costos"); // Importamos el esquema de costos

// Creamos un nuevo costo (Create)
router.post("/costos", (req, res) => {
  const costo = new costoSchema(req.body);
  costo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

module.exports = router;