const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

export default {
  jwt: {
    secret: JWT_SECRET,
    expiresIn: '8h',
  },
  refresh: {
    secret: JWT_SECRET,
    expiresIn: '7d',
  },
};

export interface IAuthConfig {
  iat: number;
  exp: number;
  id: string;
}
