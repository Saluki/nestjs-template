
# NestJS 8 API project template

[![License](https://img.shields.io/github/license/saluki/nestjs-template.svg)](https://github.com/saluki/nestjs-template/blob/master/LICENSE)

Scaffold quickly your next [NestJS 8](https://nestjs.com/) API project with 
❤️ using this template

- Crafted for Docker environments (Dockerfile support and environment variables)
- REST API with [TypeORM](http://typeorm.io) support 
- Swagger documentation, [Joi](https://github.com/hapijs/joi) validation, Winston logger, ...
- Folder structure, code samples and best practices

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) and NPM
- A database such as MariaDB, MySQL or PostgreSQL. You may use the provided `docker-compose` file.

[Docker](https://www.docker.com/) may also be useful for advanced testing and image building, although it is not required for development.

### 1.2 Project configuration

Start by cloning this project on your workstation.

``` sh
git clone https://github.com/saluki/nestjs-template my-project
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./my-project
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.example .env
vi .env
```

For a standard development configuration, you can leave the default values for `API_PORT`, `API_PREFIX` and `API_CORS` under the `Api configuration` section. The `SWAGGER_ENABLE` rule allows you to control the Swagger documentation module for NestJS. Leave it to `1` when starting this example.

Next comes to the TypeORM configuration: change everything according to your own database setup. It may be also useful to turn `TYPEORM_SYNCHRONIZE` to `true` in order to avoid migrations during the development phase. Do not modify the values in the `TypeORM internals` section, unless you change the folder structure.

Last but not least, define a `JWT_SECRET` to sign the JWT tokens or leave the default value in a development environment. Update the `JWT_ISSUER` to the correct value as set in the JWT. 

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh
# Perform migrations in your database using TypeORM
npm run migration:run

# Launch the development server with TSNode
npm run dev
```

You can now head to `http://localhost:4000/docs` and see your API Swagger docs. The example passenger API is located at the `http://localhost:4000/api/v2/passengers` endpoint.

For restricted routes, for testing you can use the below JWT

```
eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJERUZBVUxUX0lTU1VFUiIsImlhdCI6MTYzMTEwNDMzNCwicm9sZSI6InJlc3RyaWN0ZWQifQ.o2HcQBBpx-EJMcUFiqmAiD_jZ5J92gRDOyhybT9FakE
```

> The sample JWT above does not have a expiry, remember to use valid JWT and enforce the required claims in production

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
src/
├── migrations/  # TypeORM migrations created using "npm run migration:create"
├── modules
│   ├── app.module.ts
│   ├── common/  # The common module contains pipes, guards, service and provider used in the whole application
│   ├── passenger/  # A module example that manages "passenger" resources
│   │   ├── controller/
│   │   │   └── passenger.controller.ts
│   │   ├── flow/  # The "flow" directory contains the pipes, interceptors and everything that may change the request or response flow
│   │   │   └── passenger.pipe.ts
│   │   ├── model/
│   │   │   ├── passenger.data.ts  # The model that will be returned in the response
│   │   │   ├── passenger.entity.ts  # The actual TypeORM entity
│   │   │   └── passenger.input.ts  # The model that is used in the request
│   │   ├── passenger.module.ts
│   │   ├── service/
│   │   │   └── passenger.service.ts
│   │   └── spec/
│   └── tokens.ts
└── server.ts
```

## 3. Default NPM commands

The NPM commands below are already included with this template and can be used to quickly run, build and test your project.

```sh
# Start the application using the transpiled NodeJS
npm run start

# Run the application using "ts-node"
npm run dev

# Transpile the TypeScript files
npm run build

# Internal command used during the Docker build stage
npm run build:docker

# Run the project' functional tests
npm run test

# Lint the project files using TSLint
npm run lint

# Create a new migration named MyMigration
npm run migration:create [MyMigration]

# Run the TypeORM migrations
npm run migration:run

# Revert the TypeORM migrations
npm run migration:revert
```

## 4. Project goals

The goal of this project is to provide a clean and up-to-date "starter pack" for REST API projects that are built with NestJS.

## 5. Roadmap

The following improvements are currently in progress : 

- [x] Configuration validation
- [ ] Dockerfile improvements and better usage of environment variables
- [x] Project structure documentation
- [x] TypeORM migration support
- [ ] Healtcheck support
- [ ] Better logging configuration with environment variables
- [ ] Working further on examples for production instructions

## 6. Contributing

Feel free to suggest an improvement, report a bug, or ask something: [https://github.com/saluki/nestjs-template/issues](https://github.com/saluki/nestjs-template/issues)
