import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// handler is req and res

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      try {
        const payload = jwt.verify(token, "hello");
        const user = await prisma.user.findUnique({
          where: {
            id: payload.id,
          },
        });
        if (user) {
          return handler(req, res, user);
        }
      } catch (e) {
        res.status(401).json({ message: `Unauthorized ${e.message}` });
      }
    }
    res.status(401).json({ message: "Unauthorized" });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, "hello");
  // we're using this function to get the user based on the token
  return user;
};
