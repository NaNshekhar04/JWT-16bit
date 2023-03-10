﻿<img align="right" src="https://user-images.githubusercontent.com/51878265/186825286-499db16b-5b95-488d-b6d5-09d44521b890.png" height="70px"> <h2>JWT-16bit</h2>
### Starts up express server without writing that boring server boilerplate code.
   
   [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
   [![Npm package total downloads](https://badgen.net/npm/dt/super-express-cli)](https://www.npmjs.com/package/jwt-16bit)
   [![Npm package version](https://badgen.net/npm/v/super-express-cli)](https://www.npmjs.com/package/jwt-16bit)


### Usage

First, run npm install jwt-16bit for your app & than simply require it.

```bash

const jwt16bit = require("jwt-16bit")

```
### How it works ?

Once Installed and required now simply log it to the console by invoking the required function. 

This will generate a super secret string code inside the terminal so now you can use it as your super secret JWT secret inside your JWT-Auth applications.


```bash

const jwt16bit = require("jwt-16bit")

console.log(jwt16bit());

```

### Results

Generates supersecret JWT secret for you next application.

```bash
Example output in console!

7hT3fJ9kM6nR2sQ8

5Pc9nM5K7tL9XE5t

```


### Contributing
1. [Install node](http://nodejs.org/#download).
2. Clone this repository `$ gh repo clone NaNshekhar04/JWT-16bit`.
3. Install dependencies `$ npm install`.
4. Start Hacking!

Feel free to contribute to the repo. Just make sure you Open an [Issue](https://github.com/NaNshekhar04/JWT-16bit/issues) first before raising the Pull Request!


