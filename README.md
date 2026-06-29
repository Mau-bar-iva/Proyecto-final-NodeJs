## API REST - Gestión de Productos
Descripción

API REST desarrollada con Node.js y Express para la gestión de productos. Permite realizar operaciones CRUD sobre un catálogo almacenado en Firebase Firestore. Incluye autenticación mediante JSON Web Tokens para proteger rutas sensibles.

Tecnologías utilizadas
* Node.js
* Express
* Firebase Firestore
* JSON Web Token
* CORS
* Body-parser
* Dotenv

Instalación
1. Clonar el repositorio
   
2. Instalar dependencias:
npm install

4. Crear archivo .env con las variables necesarias:
PORT=3000
JWT_SECRET=tu_clave_secreta
FIREBASE_CONFIG=tu_configuracion

5.Ejecutar el servidor:
npm run start

# Estructura del proyecto
/src

  - /routes
  
  - /controllers
  
  - /services
  
  - /models
  
  - /middlewares
  
  - /config
  
index.js

package.json

## Autenticación


La API utiliza JWT para proteger rutas. Se debe obtener un token mediante login y enviarlo en el header:

Authorization: Bearer TOKEN
Rutas
Autenticación
POST /auth/login

Permite autenticar un usuario y obtener un token.

Body:

{
  "email": "usuario",
  "password": "contraseña"
}

Respuesta:

{
  "token": "jwt_token"
}

Productos

GET /api/products
Devuelve todos los productos.

GET /api/products/
Devuelve un producto por ID.

POST /api/products/create
Crea un nuevo producto.

Requiere autenticación.

DELETE /api/products/

Elimina un producto por ID.

Requiere autenticación.

## Notas
- Las rutas protegidas requieren token válido
- Las rutas públicas pueden consultarse sin autenticación
- El acceso a datos se realiza mediante Firestore
