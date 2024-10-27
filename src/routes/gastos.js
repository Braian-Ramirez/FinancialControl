const verifyToken = require('./validate_token');
const express = require("express");
const router = express.Router();
const gastoSchema = require("../models/gastos");

// Crear un nuevo gasto
router.post("/gastos", (req, res) => {
    const gasto = new gastoSchema(req.body);
    gasto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error.message }));
});