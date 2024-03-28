<h3 align="center">
  Node.js Application for Websocket studies
</h3>

<p align="center">

  <a href="https://www.linkedin.com/in/leandro-martins-0640921a4/" target="_blank" rel="noopener noreferrer">
    <img alt="Repository size" src="https://img.shields.io/badge/made%20by-Leandro%20Martins-blueviolet">
  </a>
</p>

## 👨🏻‍💻 About the project

- Node.js Application for Websocket real time chat.

## 🚀 Technologies

Technologies that I used to develop this API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/)

## 💻 Getting started

### Requirements

**Clone the project and access the folder**

```bash
$ git clone https://github.com/leolivm/websocket-study && cd websocket-study
```

**Follow the steps below**

```bash
# Install the dependencies and json-server to mock the API
$ yarn install

# If you do not already have the `database.sqlite` file inside the `src/database` folder, create this file and run
$ yarn typeorm migration:run
# to create the database tables.

# To start the application
$ yarn dev
```

You can check the application at `http://localhost:3333/pages/admin` and `http://localhost:3333/pages/client`

Made with 💜 by Leandro Martins 👋 [See my linkedin](https://www.linkedin.com/in/leandro-martins-0640921a4/)
