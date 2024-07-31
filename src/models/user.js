const DataTypes = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('User',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        surname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        state:{
            type:DataTypes.STRING,
            allowNull:false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
}