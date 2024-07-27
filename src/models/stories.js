const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('stories',{
        url:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    })
}