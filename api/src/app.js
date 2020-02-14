
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import io from 'socket.io';
import http from 'http';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.shttp = http.Server(this.server);
    this.socketio = io(this.shttp);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use((req, res, next) => {
      req.io = this.socketio;
      return next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App();
