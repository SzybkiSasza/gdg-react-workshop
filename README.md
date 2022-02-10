# GDG-React-Workshop

React + Electron + Typescript workshop for GDG DevFest Warsaw 👩‍💻👨‍💻🤖💻

## Getting started

In order to work with this repository, you must install:
 - `Git `
 - The latest stable version of `node` (available here: https://nodejs.org/en/) - or use `nvm`
 - `Yarn` for package management (available here: https://yarnpkg.com/en/docs/install)

```sh
$ git clone https://github.com/SzybkiSasza/GDG-React-Workshop.git
$ cd GDG-React-Workshop
$ yarn
```

## Toolset

We'll use following tools to build our core app:

- NodeJS + Yarn
- React + Jest
- Material UI
- Typescript

These tools will be used to build advanced features:
- Electron
- Electron-builder
- Electron-packager
- Foreman
- Cross-Env

## Goals

1. Learn the toolset
2. Understand principles behind basic React App
3. Understand Create React App behaviour and tradeoffs
4. Successfully use Typescript with React
5. Wrap our app in Electron and display as native desktop app ***(optional - based on available time)***
6. **DO NOT** eject Create React App in order to have it working with Electron

## How does it work?

The configuration is rather complex. It can be split into a few separate parts:

- Running only React part as a browser app
- Running desktop in DEV mode/locally
- Bundling a final desktop app as a standalone installer

### Running React app as a standalone browser app

In order to just run a React part of the workshop, you can use `yarn start-react` script that will use
React Scripts (that are part of Create React App) to run the app - it's so simple!

### Running React App from Electron with reload capabilities

If you want to see CRA with Electron in action, just run `yarn start` script. There are a few key
events that happen when you run that script (it's handled by the Foreman that reads from `Procfile` - check
out this file!):

- React Scripts start building app in watch mode (front end part of the app)
- TypeScript compiler is ran in watch mode in order to prepare `main.js` file
- Another TypeScript file is ran in order to bootstrap Electron itself, based on built `main.js` file

All of these in conjunction allow one to develop **desktop app using React** almost simultaneously.
It allows full hot reloading with one caveat: **whenever you change Electron part of the app, the window
has to be re-generated** (it will re-open once TypeScript compiler prepares new `main.js` file).

As Electron is essentially just a NodeJS wrapper that renders **any arbitrary HTML content** in headless
browser windows, the ony thing you have to do to render any HTML app in Electron is to provide a correct
URL - you can find the code that takes care of it in `src/electron/main.ts`.

For more details, check out `src/electron` folder, especially `connect-electron.ts` file that prepares
initial Electron launch based on React app state.

### Bundling React App with Electron without ejecting

In order to bundle the React App in Electron, you can run `yarn dist` script. It performs three steps:

1. Builds standard React app
2. Builds Electron part of the code and puts it in `build/electron` directory
3. Bundles Electron with built React app as a standalone installer

If the script is ran successfully, it'll create a set of files in `dist` directory, including app
installer - just double-click it in order to have it installed and ran on your system. 

## Side note on building the app

Currently, the build pipeline supports only Windows. It should be possible to simply modify 
the build script in order to have it working for Mac/*Nix systems.

## Resources

1. React
    - [React docs](https://reactjs.org/)
      - [Components and Props](https://reactjs.org/docs/components-and-props.html)
      - [Typescript](https://reactjs.org/docs/static-type-checking.html#typescript)
    - [React GH repo](https://github.com/facebook/react/)
    - [CRA repo](https://github.com/facebook/create-react-app)
    - [Learning React roadmap](https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6)
    - [Higher Order Components](https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665)

2. Jest
    - [Jest docs](https://jestjs.io/)
    - [Jest repo](https://github.com/facebook/jest)
    - [Testing React Best Practices](https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12)

3. Material UI
    - [Docs](https://material-ui.com/)

4. Electron
    - [Docs](https://electronjs.org/)
    - [Basics of building cross-platform app](https://hackernoon.com/the-basics-of-building-a-cross-platform-desktop-application-with-electron-814306c22d76)
    - [Essential Electron](https://jlord.us/essential-electron/)
    - [Electron - the bad parts](https://hackernoon.com/electron-the-bad-parts-2b710c491547)
    - [Building Electron App with CRA](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)

5. Other tutorial
    - [React typescript & Electron — the one minute setup](https://alanbouteiller.medium.com/react-typescript-electron-the-one-minute-setup-6d306fccd128)
    - [Electron React hot reload & multi launch script — the one minute setup](https://alanbouteiller.medium.com/electron-react-hot-reload-multi-launch-script-the-one-minute-setup-392847380b26)
    - React Tutorial - Build a Weather App from Scratch - [Part 1](https://instil.co/blog/react-typescript-weather-app-tutorial-part-1/). [Part 2](https://instil.co/blog/react-typescript-weather-app-tutorial-part-2/) 

6. Yarn
    - [Yarn docs](https://yarnpkg.com/)
    - [How to upgrade a yarn package to the latest version](https://jsramblings.com/how-to-upgrade-a-yarn-package-to-the-latest-version/)

7. Dependabot:
    - [Dependabot docs](https://dependabot.com/)
    - [Using Dependabot with Yarn 2](https://blog.alphasmanifesto.com/2021/11/07/yarn-2-dependabot/)