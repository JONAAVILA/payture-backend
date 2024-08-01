import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Message = sequelize.define('Message',{
        text:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    return Message
}