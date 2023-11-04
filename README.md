# Todo List API

This is the documentation for the Todo List API, which allows you to manage and interact with todo tasks.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Todo Tasks](#todo-tasks)
- [Examples](#examples)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Database (MySQL)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/taufiksty/tugas_backend_todo.git
    ```

2.  Change to the project directory:

    ```bash
    cd tugas_backend_todo
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Configure the database connection by editing the .env file.

        # APP
        NODE_ENV=development
        PORT=3000
        HOST_DEV=localhost
        HOST_PROD=0.0.0.0

        # DATABASE DEV
        DB_DEV_USERNAME=root
        DB_DEV_PASSWORD=
        DB_DEV_DATABASE=tugas_backend_todo
        DB_DEV_HOST=127.0.0.1
        DB_DEV_DIALECT=mysql

        # DATABASE TEST
        DB_TEST_USERNAME=
        DB_TEST_PASSWORD=
        DB_TEST_DATABASE=
        DB_TEST_HOST=
        DB_TEST_DIALECT=

        # DATABASE PROD
        DB_PROD_USERNAME=
        DB_PROD_PASSWORD=
        DB_PROD_DATABASE=
        DB_PROD_HOST=
        DB_PROD_DIALECT=

        # JWT
        ACCESS_TOKEN=
        REFRESH_TOKEN=

        # TIMEZONE
        TZ=Asia/Jakarta

5.  Start the server:
    ```bash
    npm run start
    ```

## API Endpoints

### Authentication

- **POST /api/auth/sign-up**: Register a new user.
- **POST /api/auth/sign-in**: Authenticate a user and receive a JWT token for secure routes.
- **DELETE /api/auth/sign-out**: Delete refresh token and block access token so user can't access resource again.

### Todo

- **GET /api/todos**: Retrieve all todo.
- **POST /api/todos**: Create a new todo.
- **GET /api/todos/:id**: Retrieve a specific todo by ID.
- **PUT /api/todos/:id**: Update a specific todo by ID.
- **DELETE /api/todos**: Delete all todos.
- **DELETE /api/todos/:id**: Delete a specific todo by ID.

## Examples

### Sign-up

**HTTP Request**

```
POST /api/auth/sign-up
Content-Type: application/json
```

**Request Body**

```
{
  "fullname": "John Doe",
  "username": "john_doe",
  "password": "secretpassword"
}
```

### Sign-in

**HTTP Request**

```
POST /api/auth/sign-in
Content-Type: application/json
```

**Request Body**

```
{
  "username": "john_doe",
  "password": "secretpassword"
}
```

### Sign-out

**HTTP Request**

```
POST /api/auth/sign-out
Authorization: Bearer <token>
Content-Type: application/json
```

### Create Todo

**HTTP Request**

```
POST /api/todos
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**

```
{
  "title": "Belajar Backend",
  "description": "Menggunakan Express dan Sequelize"
}
```

### Get All Todos

**HTTP Request**

```
GET /api/todos
Authorization: Bearer <token>
Content-Type: application/json
```

### Get Todo by Id

**HTTP Request**

```
GET /api/todos/<id>
Authorization: Bearer <token>
Content-Type: application/json
```

### Update Todo

**HTTP Request**

```
PUT /api/todos/<id>
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**

```
{
  "title": "Belajar Backend Node.js",
  "completed": true
}
```

### Delete Todo by Id

**HTTP Request**

```
DELETE /api/todos/<id>
Authorization: Bearer <token>
Content-Type: application/json
```

### Delete All Todos

**HTTP Request**

```
DELETE /api/todos
Authorization: Bearer <token>
Content-Type: application/json
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/taufiksty/tugas-backend-todo/blob/main/LICENSE) file for details.
