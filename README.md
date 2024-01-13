
# NestJS 10 API project template

[![License](https://img.shields.io/github/license/saluki/nestjs-template.svg)](https://github.com/saluki/nestjs-template/blob/master/LICENSE)

Scaffold quickly your next [NestJS 10](https://nestjs.com/) API project with 
❤️ using this template

- Crafted for Docker environments (Dockerfile support and environment variables)
- REST API with [Prisma](https://www.prisma.io/) support 
- Swagger documentation, [Joi](https://github.com/hapijs/joi) validation, Winston logger, ...
- Folder structure, code samples and best practices
- Fast HTTP server with [Fastify](https://fastify.dev/)

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) such as 20.x and NPM
- A database such as PostgreSQL. You may use the provided `docker-compose.yml` file.

[Docker](https://www.docker.com/) may also be useful for advanced testing and image building, although it is not required for development.

### 1.2 Project configuration

Start by cloning this project on your workstation or click on ["Use this template"](https://github.com/new?template_name=nestjs-template&template_owner=Saluki) in Github.

``` sh
git clone https://github.com/saluki/nestjs-template my-project
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./my-project
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing the environment variables used for development.

```
cp .env.example .env
vi .env
```

For a standard development configuration, you can leave the default values for `API_PORT`, `API_PREFIX` and `API_CORS` under the `Api configuration` section. The `SWAGGER_ENABLE` rule allows you to control the Swagger documentation module for NestJS. Leave it to `1` when starting this example.

Next comes to the Prisma configuration: change the DATABASE_URL according to your own database setup.

Last but not least, define a `JWT_SECRET` to sign the JWT tokens or leave the default value in a development environment. Update the `JWT_ISSUER` to the correct value as set in the JWT. 

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh
# For use in development environments only, performs a Prisma migration
npx prisma migrate dev

# Launch the development server with TSNode
npm run dev
```

You can now head to `http://localhost:3000/docs` and see your API Swagger docs. The example passenger API is located at the `http://localhost:3000/api/v1/passengers` endpoint.

For restricted routes, for testing you can use the below JWT

```
eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJERUZBVUxUX0lTU1VFUiIsImlhdCI6MTYzMTEwNDMzNCwicm9sZSI6InJlc3RyaWN0ZWQifQ.o2HcQBBpx-EJMcUFiqmAiD_jZ5J92gRDOyhybT9FakE
```

> The sample JWT above does not have an expiry, remember to use a valid JWT and enforce the required claims in production

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
src/
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

# Run the project' functional tests
npm run test

# Lint the project files using TSLint
npm run lint
```

## 5. Healtcheck support

A healthcheck API is a REST endpoint that can be used to validate the status of the service along with its dependencies. The healthcheck API endpoint internally triggers an overall health check of the service. This can include database connection checks, system properties, disk availability and memory availability.

The example healthcheck endpoint can be request with the token located in the `HEALTH_TOKEN` environment variable.

```sh
curl -H 'Authorization: Bearer ThisMustBeChanged' http://localhost:3000/api/v1/health
```

## 6. Project goals

The goal of this project is to provide a clean and up-to-date "starter pack" for REST API projects that are built with NestJS.

## 7. Contributing

Feel free to suggest an improvement, report a bug, or ask something: [https://github.com/saluki/nestjs-template/issues](https://github.com/saluki/nestjs-template/issues)
