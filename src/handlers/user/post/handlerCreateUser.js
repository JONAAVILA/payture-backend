const { User } = require('../../../db');

const handlerCreateUser = async (
    uuid,
    name,
    surname,
    image,
    email,
    password,
    address,
    state,
    country
) => {
    if (
        !uuid ||
        !name ||
        !surname ||
        !password ||
        !image ||
        !email ||
        !address ||
        !state ||
        !country
    ) throw new Error('Parameters are missing');

    try {
        const response = await User.create({
            id: uuid,
            name: name,
            surname: surname,
            image: image,
            email: email,
            password: password,
            address: address,
            state: state,
            country: country
        });

        if (response) return `User ${response.name} created`;
        return `Error, user not created`;
    } catch (error) {
        throw new Error('Error creating user');
    }
};

module.exports = handlerCreateUser;
