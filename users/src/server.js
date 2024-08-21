import express from "express";
import router from "./routes/index.js";
import morgan from "morgan";
import cors from 'cors';
import { limiter } from './utils/limiter.js';

const server = express();

server.use(limiter)
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

export default server;