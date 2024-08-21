import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import userModel from './models/user.js';
import tokenModel from './models/token.js';

config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/payture-users`, {
  logging: false, 
  native: false, 
})

// const sequelize = new Sequelize(payture, {
//   logging: false,
//   native: false,
// })

const User = userModel(sequelize)
const Token = tokenModel(sequelize)

const models = {
  ...sequelize.models,
  conn: sequelize,
}

export { models }