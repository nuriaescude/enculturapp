[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)

[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/) 
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Enculturapp

This repo contains full-stack project Enculturapp in which users can Get the very latest on the exhibitions you care about according to your mood.

Enculturapp is made with NodeJS and ExpressJS for the part of the server, and the client part is made with AngularJS.


## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file
You need to create an **.env** file in the project root with the following environment variables configured:
- Port:
```
    PORT=3000
```

- Mongodb path and database to use:
```
    DB_URI=mongodb://localhost:27017/NAME_DB
```


### To run the server:
```
    npm start
```
All dependencies will be installed automatically

## API
The server part has multiple **API endpoints** using data from a **MongoDb collection** to retrieve data or perform actions:

+ `GET` `/expos` → get all expos
+ `GET` `/museums` → get all museums or art galleries
+ `GET` `/expos/:mood` → get all expos by mood
+ `GET` `/expo/:id` → get details expo by id

+ `POST` `/expo` → add exhibition
+ `PUT` `/expo/:id` → update data of the exhibition
+ `DELETE` `/expo/:id` → delete exhibition

`/api` -> Serves the internal data of the exhibitions and museums.
`/auth` -> Serves the authentication options, register and login.


## Built with:
* **SublimeText**
* **Front-end**
    - AngularJS 1.6.3
    - Angular-route: 1.6.3
    - Angular-jwt: 0.1.9
    - Bootstrap: 3.3.7
    - Font-awesome: 4.7.0
* **Back-end**
    - express: 4.15.2
    - dotenv: 4.0.0
    - body-parser: 1.17.1
    - jsonwebtoken: 7.3.0
    - mongoose: 4.9.0
    - passport: 0.3.2
    - passport-jwt: 2.2.1
    - passport-local-mongoose: 4.0.0
    - bower: 1.8.0
 

## Authors
[Núria Escudé](https://github.com/nuriaescude)

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)
* [JuanMa Garrido](https://github.com/juanmaguitar)
* [AlejandroDG](https://github.com/agandia9)


