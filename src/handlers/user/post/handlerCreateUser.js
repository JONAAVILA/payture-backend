import { models } from "../../../db.js";
const User = models.User

const handlerCreateUser = async (
    uuid,
    name,
    surname,
    image,
    email,
    passwordHashed,
    address,
    state,
    country
) => {
    if (
        !uuid ||
        !name ||
        !surname ||
        !passwordHashed ||
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
            password: passwordHashed,
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

export default handlerCreateUser;
