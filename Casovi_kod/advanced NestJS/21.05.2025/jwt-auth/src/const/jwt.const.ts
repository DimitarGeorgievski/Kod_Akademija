import jwt from "jsonwebtoken";

export const createAccessToken = (userId: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.sign({ userId }, secret, {
    expiresIn: "5m",
  });
};

export const createRefreshToken = (userId: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET as string;
  return jwt.sign({userId}, secret, {
    expiresIn: "20s"
  })
};

export const verifyAccessToken = (token: string) => {
  const secret = process.env.ACCESS_TOKEN_SECRET as string;

  return jwt.verify(token, secret) as { userId: string };
};

export const verifyRefreshToken = (token: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET as string;
  return jwt.verify(token,secret) as {userId: string};
}
