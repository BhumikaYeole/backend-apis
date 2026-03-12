# Backend APIs — Users, Projects, Daily Progress Reports

##  Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- bcryptjs (password hashing)

---

##  Database Setup (MySQL)

1. Open MySQL terminal

```
mysql -u root -p
```
2. Create database
```
CREATE DATABASE projects_db;
```
3. Create user
```
CREATE USER 'user'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON projects_db.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
```


##  Setup Environment Variables

Create a .env file in the project root:
```
PORT=5000
DB_NAME=projects_db
DB_USER=user
DB_PASS=1234
DB_HOST=localhost
JWT_SECRET=secret
```

## Install Dependencies

```
npm install
```

## Run Server
```
nodemon app.js
```

Server will start on 
```
http://localhost:5000
```

 ## Authentication Flow

1. Register a new user
2. Login with email and password
3. Copy the JWT token received in response
4. Use the token in Authorization header for protected routes
5. Authorization: Bearer <token>

##  Implemented Endpoints

Auth
```
POST /auth/register
POST /auth/login
```

Projects
```
POST /projects
GET /projects
GET /projects/:id
PUT /projects/:id
DELETE /projects/:id
```

Daily Progress Reports (DPR)
```
POST /projects/:id/dpr
GET /projects/:id/dpr
```

##  Example API Request (curl)

Register
```
curl -X POST http://localhost:5000/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"xyz","email":"xyz@gmail.com","password":"1234","role":"admin"}'
```
Login
```
curl -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"xyz@gmail.com","password":"1234"}'
```
Get Projects
```
curl http://localhost:5000/projects \
-H "Authorization: Bearer <token>"
```

## Postman Collection

Import the provided Postman JSON collection file to test all APIs easily.
