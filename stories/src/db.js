import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import storiesModel from './models/stories.js';

config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/payture-stories`, {
  logging: false, 
  native: false, 
})

// const sequelize = new Sequelize(payture, {
//   logging: false,
//   native: false,
// })

const Storie = storiesModel(sequelize)

const models = {
  ...sequelize.models,
  conn: sequelize,
}

export { models }