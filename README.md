# The Radical Redington Probability Calculator

## Description

A simple probability calculator.

### Client 

The site is build using Node 12, ExpressJS and React and Redux, Redux Sags as React Google Charts. The client is run as a separate web server and distributed by a NodeJs/ExpressJs web server.

### Web Server 

The web server is restful built in .net core 3 WebApi



## Prerequisites

### Client

The only requirements are node 12 (thought 10 will be ok) and NPM.

## Server

The only requirement is .net core 3.



## Build/Run

### Client

```bash
cd src/client
npm install
npm start
```



### Web Server

```bash
cd src\server\RedRabProb\RedRabProb.Web>
dotnet run
```



## FAQ

- If you are not running on windows then you will need to remove the dependency   "win-node-env". Normally this would be included globally but I thought you would be running windows and as such wanted things to run without any global npm dependencies.
- If you have issues with SASS dependency you can rerun with npm rebuild node-sass. It seems that there is a global npm cache (like nuget) where the dependencies are copied from if they exist rather than downloading but swapping node versions does not seem to trigger a rebuild.