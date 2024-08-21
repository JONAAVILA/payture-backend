import { DataTypes } from "sequelize";

export default (sequelize)=>{
    const Token = sequelize.define('Token',{
        code:{
            type:DataTypes.STRING,
            allowNull:false
        },
        expiresAt:{
            type:DataTypes.DATE,
            allowNull:false
        }
    })
    return Token
}