import bcryptjs from 'bcryptjs';
const round = 10;

const genHash = async (password,) => {
    const salt = await bcryptjs.genSalt(round);
    const pass = await bcryptjs.hash(password, salt);
    return { pass, salt };
}

const validateHashing = async (password, hashvalue) => {
    const validate = await bcryptjs.compare(password, hashvalue);
    return validate;
}

export { genHash, validateHashing }