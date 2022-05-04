import { PrismaClient } from "@prisma/client";
import { artistsData } from "./songsData";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => {
              return {
                name: song.name,
                duration: song.duration,
                url: song.url,
              };
            }),
          },
        },
      });
    })
  );

  const salt = await bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "algomachine007" },
    update: {},
    create: {
      email: "algomachine007",
      password: await bcrypt.hashSync("password", salt),
    },
  });

  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(0).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist ${i + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({ id: song.id })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
