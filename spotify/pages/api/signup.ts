import { NextApiRequest, NextApiResponse } from "next";

import bcrypt from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    res.status(401).json({ message: "Email already in use" });

    return;
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    "hello",
    { expiresIn: "8h" }
  );

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("TRAX_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60 * 1000,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  console.log("user", user);

  // send a user to frontend
  res.json(user);
};
