const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/usuarios");
const jwt = require("jsonwebtoken");
const verifyToken = require("./validate_token");



//Revisar esta forma de autenticarse https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
router.post("/signup", async (req, res) => {
    const { nombre, cedula, correo, clave, confirmacionClave, telefono, fechaNacimiento} = req.body;
    const user = new userSchema({
      nombre: nombre,
      cedula: cedula,
      correo: correo,
      clave: clave,
      confirmacionClave: confirmacionClave,
      telefono: telefono,
      fechaNacimiento: fechaNacimiento
    });
    user.clave = await user.encryptClave(user.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB //segundo parámetro: un texto que hace que el código generado sea único //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    //primer parámetro: payload - un dato que se agrega para generar el token
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24, //un día en segundos
    });
    res.json({
      auth: true,
      token: token,
      user,
    });
  });
  