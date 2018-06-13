
NestJS API project template
===

[![License](https://img.shields.io/github/license/saluki/nestjs-template.svg)](https://github.com/saluki/nestjs-template/blob/master/LICENSE)

Scaffold quickly your next [NestJS](https://nestjs.com/) API project with 
❤️ using this template

- crafted for Docker environments
- REST API with [TypeORM](http://typeorm.io) support 
- Swagger documentation, [Joi](https://github.com/hapijs/joi) validation, logger, ...
- Folder structure, code samples and best practices

Getting started
---

Clone this project on your workstation and make sure to have NodeJS installed and MariaDB (or MySQL) running. You can then

- Copy the `.env.example` file to a new `.env` file (modify the values according to your setup)
- Launch the `npm run dev` command
- You can now head to `http://localhost:3000/docs` and see your API Swagger docs 

Project goals
---

The goal of this project is to provide a clean and up-to-date "starter pack" for REST API projects that are built with NestJS.

Next improvements
---

The following improvements are currently in progress : 

- Cleaner authentication and authorization with Passport
- Configuration validation
- Dockerfile improvements and better usage of environment variables
- Project structure documentation
- TypeORM migration support
- Healtcheck support

Contributing
---

Feel free to suggest an improvement, report a bug, or ask something: [https://github.com/saluki/nestjs-template/issues](https://github.com/saluki/nestjs-template/issues)