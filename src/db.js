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
  DB_HOST,
} = process.env

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/payture`, {
//   logging: false, 
//   native: false, 
// })

const sequelize = new Sequelize(payture02, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
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