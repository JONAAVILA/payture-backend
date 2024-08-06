import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import userModel from './models/user.js'
import messageModel from './models/message.js'
import notificatioModel from './models/notification.js'
import storiesModel from './models/stories.js'

config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/payture`, {
//   logging: false, 
//   native: false, 
// })

const sequelize = new Sequelize(DB_HOST, {
  dialect: 'postgres', // Cambia esto según tu base de datos (mysql, sqlite, etc.)
  protocol: 'postgres', // Cambia esto según tu base de datos
  logging: false, // O true si quieres ver las consultas SQL
});

const User = userModel(sequelize)
const Message = messageModel(sequelize)
const Notificatio = notificatioModel(sequelize)
const Stories = storiesModel(sequelize)

User.hasMany(Stories,{foreingKey:'UserId'})
Stories.belongsTo(User,{foreingKey:'UserId'})

const models = {
  ...sequelize.models,
  conn: sequelize,
}

export { models }