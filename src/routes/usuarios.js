const verifyToken = require('./validate_token'); // Verificación de token si es necesario
const express = require("express");
const router = express.Router();
const userSchema = require("../models/usuarios"); 

// Crear un nuevo usuario
router.post("/usuarios", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
