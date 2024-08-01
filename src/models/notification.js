import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Notification = sequelize.define('Notification',{
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    return Notification
}