
# NestJS API project template

[![License](https://img.shields.io/github/license/saluki/nestjs-template.svg)](https://github.com/saluki/nestjs-template/blob/master/LICENSE)

Scaffold quickly your next [NestJS](https://nestjs.com/) API project with 
❤️ using this template

- Crafted for Docker environments (Dockerfile support and environment variables)
- REST API with [TypeORM](http://typeorm.io) support 
- Swagger documentation, [Joi](https://github.com/hapijs/joi) validation, logger, ...
- Folder structure, code samples and best practices

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) and NPM
- A database such as MariaDB, MySQL or PostgreSQL

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
nano .env
```

For a standard development configuration, you can leave the default values for `API_PORT`, `API_PREFIX` and `API_CORS` under the `Api configuration` section. The `SWAGGER_ENABLE` rule allows you to control the Swagger documentation module for NestJS. Leave it to `1` when starting this example.

Next comes to the TypeORM configuration: change everything according to your own database setup. It may be also useful to turn `TYPEORM_SYNCHRONIZE` to `true` in order to avoid migrations during the development phase. Do not modify the values in the `TypeORM internals` section, unless you change the folder structure.

Last but not least, define a `JWT_SECRET` to sign the JWT tokens or leave the default value in a development environment.

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```
npm run dev
```

You can now head to `http://localhost:4000/docs` and see your API Swagger docs. The example passenger API is located at the `http://localhost/api/v2/passengers` endpoint.

## 2. Project structure

## 3. Default NPM commands

## 4. Project goals

The goal of this project is to provide a clean and up-to-date "starter pack" for REST API projects that are built with NestJS.

## 5. Roadmap

The following improvements are currently in progress : 

- [ ] Cleaner authentication and authorization with Passport
- [x] Configuration validation
- [ ] Dockerfile improvements and better usage of environment variables
- [ ] Project structure documentation
- [x] TypeORM migration support
- [ ] Healtcheck support
- [ ] Better logging configuration with environment variables
- [ ] Adding better mock support with TS Mockito
- [ ] Working further on examples for production instructions

## 6. Contributing

Feel free to suggest an improvement, report a bug, or ask something: [https://github.com/saluki/nestjs-template/issues](https://github.com/saluki/nestjs-template/issues)