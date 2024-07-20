# Your-TooDoo

This is a simple ToDo application Node.js-Express Backend with MongoDB, Swagger API Documentation, and Jest Unit Testing

## Table of Contents

- [Project Title](#project-title)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple ToDo application Node.js backend. It is built using the Express framework, MongoDB for data storage, Swagger for API documentation, and Jest for unit testing. It also uses nodemon for development to automatically restart the server on file changes.

## Features

- CRUD operations with MongoDB
- JWT authentication
- Swagger API documentation
- Unit testing with Jest
- Development server with nodemon

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/iamcosmo/Your-TooDoo.git
    cd Your-TooDoo
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

## Configuration

1. **Create a `.env` file in the root directory and add the following configuration:**

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your_database_name
    JWT_SECRET=your_secret_key
    ```

2. **Update the `swagger.js` file if necessary, located in the `root` folder, with your API details.**

## Running the Application

1. **Start MongoDB:**

    Make sure your MongoDB server is running. You can start it using:

    ```sh
    mongod
    ```

2. **Start the development server:**

    ```sh
    npm run dev
    ```

    This will start the server using nodemon.

## API Documentation

1. **Access the Swagger documentation:**

    Once the server is running, navigate to `http://localhost:3000/api-docs` in your browser to view the Swagger UI with API documentation.

## Running Tests

1. **Run unit tests:**

    ```sh
    npm test
    ```

    This will run tests using Jest.

## Folder Structure

    ├── src
    │   ├── controllers
    │   ├── middlewares
    │   ├── models
    │   ├── routes
    │   ├── services
    │   └── app.js
    ├── tests
    │   └── todo.test.js
    ├── .babelrc
    ├── .env
    ├── .gitignore
    ├── jest.setup.js
    ├── swagger.js
    ├── package-lock.json
    ├── package.json
    README.md
    

## Contributing

1. **Fork the repository.**

2. **Create a new branch:**

    ```sh
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes and commit them:**

    ```sh
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```sh
    git push origin feature/your-feature-name
    ```

5. **Open a pull request.**


