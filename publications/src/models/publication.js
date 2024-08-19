import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Publication = sequelize.define('Publication',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true
        },
        tittle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Publication
}