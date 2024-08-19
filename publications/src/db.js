import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import publicationModel from './models/publication.js';

config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/payture-publications`, {
  logging: false, 
  native: false, 
})

// const sequelize = new Sequelize(payture, {
//   logging: false,
//   native: false,
// });

const Publication = publicationModel(sequelize)

const models = {
  ...sequelize.models,
  conn: sequelize,
}

export { models }