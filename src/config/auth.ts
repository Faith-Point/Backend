export default {
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: '8h',
    },
    refresh: {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
    },
};

export interface IAuthConfig {
    iat: number;
    exp: number;
    id: string;
}