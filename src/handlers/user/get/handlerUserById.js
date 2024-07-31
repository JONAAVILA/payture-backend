const { User } = require('../../../db');

const handlerUserById = async (id)=>{
    try {
        const user = await User.findByPk(id)
        return user
    } catch (error) {
        return 'Ivalid id'
    }
}

module.exports = handlerUserById;