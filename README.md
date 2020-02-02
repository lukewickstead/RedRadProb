# The Radical Redington Probability Calculator

## Description

A simple probability calculator.

**Please run the sln through VS and not through dotnet run which does not seem to set up CORS correctly**

### Client 

The site is built using Node 12, Express.js, React, Redux, Redux Sags and React Google Charts. The client is run as a separate web server and distributed by a Node.js / Express.js web server.

### Web Server 

The web server is RESTful and is built in ASP .NET Core V3.



## Prerequisites

### Client

The only prerequisites are Node.js 12 (LTS) and NPM.

- https://nodejs.org/en/

## Server

The only prerequisite is ASP .NET Core V3.

- https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1



## Build/Run

### Client

The client is built in ES6, JSX and SASS. It is bundled and pre-processed using Webpack. To run the client:

```bash
cd src/client
npm install
npm start
```

Navigate to the following url top use the application:

- localhost:3001

### Web Server

The web server is built in C# and .net core 3. A log is produced of all calculations requests and results. Currently the file path is set to:  c:\\ReadRad.log. You can change this in the appsettings.json contained in the root of the web directory by changing the variable RedRadLogFile.

To run the server open the web solution in VS and select debug.

Navigate to the following url to ensure the server is up:

- https://localhost:44326/api/home



## Tests

### Client

To run client tests and linting the following commands can be run.

```bash
npm run test # Runs the tests
npm run test-coverage # Reports on client test coverage
npm run lint # Run client linting report
npm run test-watch # TDD mode for client
```

### Server

To run the server tests run the following command.

```bash
dotnet test
```



### Test Cases

Test cases used and verified with excel can be found in the file:

- Probability Tests Cases.xlsx.



## Post Man

There is a post man dump file to allow testing of the endpoint without the client:

- RedRadProb.postman_collection.json

  

## FAQ

- I am getting a CORS error when the client is contacting the server.
  - running donet run does not see to set up CORS correctly. Use Visual Studio to run the web server.
- Why am I getting an error for win-node-env?
  - This is a dependency required on windows to set NODE_ENV for running node. I would normally set this as a global NPM dependency but wanted to reduce the amount of build steps required for you. Remove the dependency from the packages.json file and run npm install again.
- Why am I getting an error for node_sass?
  - There seems to be a bug in node_sass when swapping between node versions; it does not rebuild itself. To manually trigger the rebuild run 'npm rebuild node_sass' after running npm install.
- How can I run multiple node versions on Windows?
  - Install nvm from https://github.com/nvm-sh/nvm
  - Install Node.js 12 by running 'nvm install 12'
  - Use Node.js 12 by running 'nvm use 12'