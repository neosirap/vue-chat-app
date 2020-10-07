<p align="center">Lux - Vue Admin Dashboard Template</p>

- Vue js Admin with dark mode + RTL + Demo Apps
- Vuetify - Number #1 UI Vue Component Library
- Integrated with Vue CLI + Vuex + Vue-Router

<br/>

### Packages

Demo Dashboard `packages/vue` - Full examples just like the preview for this template.

Starter Dashboard `packages/starter` - Boilerplate version so you can quickly start a fresh new application.

### Documentation

See - `Lux-Documentation.pdf`

## Table of contents

- 🚀[ Getting Started](#getting-started)
- 👨‍💻 [Development](#development)
- 🐚 [Commands](#commands)

## Getting Started

Please install the NodeJS from [https://nodejs.org](https://nodejs.org), LTS version if possible.


### Install Dependencies
(If you installed [Yarn](https://classic.yarnpkg.com/en/docs/install))
Install all the dependencies for all the packages
```sh
yarn
```

Install only the dependencies for a specific package:

```sh
cd packages/vue
# or
# cd packages/starter

# install dependencies
npm install
```

## Development
On each package it's possible to start the respective development server with the command:

```sh
cd packages/{ package name }

# run the development server
yarn dev
# or for npm 
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in the browser.

> Your app may run on a different port than 8080 because it could be already in use by other application. To be sure, you can check correct open port in the console you ran the command `npm run dev`.

## Commands
#### `yarn`
> Installs the dependencies for all packages

#### `yarn dev:vue` or `npm run dev:vue`
> Starts the development server for `package/vue`

#### `yarn dev:starter` or `npm run dev:starter` 
> Starts the development server for `package/starter`

#### `yarn build:vue` or `npm run build:vue`
> Compiles and minifies for production on `package/vue`

#### `yarn build:starter` or `npm run build:starter`
> Compiles and minifies for production on `package/starter`

