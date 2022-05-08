// getting the user

import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async (_req, res, user) => {
  const playlistCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  });
  console.log(playlistCount);
  res.json({ ...user, playlistCount });
});
