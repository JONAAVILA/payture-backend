import { DataTypes } from 'sequelize';

export default (sequelize)=>{
    const Stories = sequelize.define('Stories',{
        url:{
            type:DataTypes.STRING,
            allowNull:false
        },
        tittle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    })
    return Stories
}