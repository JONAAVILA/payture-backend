const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('message',{
        text:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
}