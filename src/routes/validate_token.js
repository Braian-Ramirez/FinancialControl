const jwt = require("jsonwebtoken");

// Middleware para verificar que el token sea válido
const verifyToken = (req, res, next) => {
  // Obtén el token del encabezado "accessToken"
  const token = req.header('accessToken');

  // Si no hay token, devuelve un error de autenticación
  if (!token) {
    return res.status(401).json({
      error: "¡Lo sentimos!, pero no tiene permisos para acceder a esta ruta.",
    });
  }

  try {
    // Verifica el token con la clave secreta
    const verified = jwt.verify(token, process.env.SECRET);
    
    // Si el token es válido, guarda la información del usuario en `req.user`
    req.user = verified;
    
    // Continúa con el siguiente middleware o controlador
    next();
  } catch (error) {
    // Si hay un error en la verificación, devuelve un error de token no válido
    res.status(400).json({ error: "El token no es válido" });
  }
};

module.exports = verifyToken;
