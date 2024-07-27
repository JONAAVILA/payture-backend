const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('notification',{
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
}