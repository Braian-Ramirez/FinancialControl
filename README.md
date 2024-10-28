# FinancialControl


Este proyecto es una aplicación basada en **Node.js** y **Express.js** para gestionar **ingresos**, **gastos**, **costos** y **usuarios** utilizando una base de datos **MongoDB**. La aplicación incluye operaciones **CRUD (Create, Read, Update, Delete)** para manejar cada uno de estos elementos, proporcionando una API RESTful para interactuar con la base de datos.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
- **Express.js**: Framework minimalista para Node.js para la creación de aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para almacenamiento de datos.
- **Mongoose**: ODM para MongoDB que facilita la interacción entre la base de datos y el código de JavaScript.

## CRUDs Implementados

### 1. Usuarios
   - **Crear** un usuario.
   - **Leer** información de todos los usuarios o uno específico por su ID.
   - **Actualizar** los datos de un usuario específico.
   - **Eliminar** un usuario por su ID.

### 2. Gastos
   - **Crear** un gasto.
   - **Leer** todos los gastos o un gasto específico por su ID.
   - **Actualizar** los datos de un gasto.
   - **Eliminar** un gasto.

### 3. Costos
   - **Crear** un costo.
   - **Leer** todos los costos o un costo específico por su ID.
   - **Actualizar** los datos de un costo.
   - **Eliminar** un costo.

### 4. Ingresos
   - **Crear** un ingreso.
   - **Leer** todos los ingresos o un ingreso específico por su ID.
   - **Actualizar** los datos de un ingreso.
   - **Eliminar** un ingreso.

## Instalación

1. Clona el repositorio:
   git clone https://github.com/Braian-Ramirez/FinancialControl.git

   ## Instalación

1. Instala las dependencias:
   npm install
Configura las variables de entorno (crea un archivo .env con tus datos de conexión a MongoDB):


MONGO_URI=mongodb://localhost:27017/nombre_base_datos

# Inicia el servidor:

npm start
## Endpoints de la API
# Usuarios
POST /usuarios: Crear un nuevo usuario.
GET /usuarios: Obtener todos los usuarios.
GET /usuarios/:id: Obtener un usuario por ID.
PUT /usuarios/:id: Actualizar un usuario.
DELETE /usuarios/:id: Eliminar un usuario.
# Gastos
POST /gastos: Crear un nuevo gasto.
GET /gastos: Obtener todos los gastos.
GET /gastos/:id: Obtener un gasto por ID.
PUT /gastos/:id: Actualizar un gasto.
DELETE /gastos/:id: Eliminar un gasto.
# Costos
POST /costos: Crear un nuevo costo.
GET /costos: Obtener todos los costos.
GET /costos/:id: Obtener un costo por ID.
PUT /costos/:id: Actualizar un costo.
DELETE /costos/:id: Eliminar un costo.
# Ingresos
POST /ingresos: Crear un nuevo ingreso.
GET /ingresos: Obtener todos los ingresos.
GET /ingresos/:id: Obtener un ingreso por ID.
PUT /ingresos/:id: Actualizar un ingreso.
DELETE /ingresos/:id: Eliminar un ingreso.


