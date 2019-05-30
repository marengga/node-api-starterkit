# Starter Kit for Node.js-Based API

## Prerequisites
The following tools, frameworks, and modules are needed to run the software
* Node.js
* PostgreSQL Server
* Express.js
* Sequelize.js
* Passport.js
* Nodemon

## Starting up this project
* Install any required packages from npm
```bash
npm install
```
* Create your database and take note of its credentials
* Configure your database connection at ~/config/config.json
* Migrate database
```bash
sequelize db:migrate
```
* Run in debug mode
```bash
nodemon
```

## Authorization
To access protected endpoints, add the following header to your request
* Key : Authorization
* Value : Bearer &lt;token&gt;