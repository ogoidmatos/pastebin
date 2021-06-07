const { sign } = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'placeholder';

const createJWT = ({id, email}) => {
    return token = sign({id, email}, jwtSecret, {expiresIn: 3600*2});
};

module.exports = createJWT;