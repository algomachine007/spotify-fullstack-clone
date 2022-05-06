import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlist = ({ playlist }) => {
  return <div>{playlist.name}</div>;
};

export default Playlist;

export const getServerSideProps = async ({ query, req }) => {
  console.log("Query Object", query);
  // get user id
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  console.log(id);

  const [playlist] = await prisma.playlist.findMany({
    where: {
      // [id] must be id
      id: +query.id,
      // multi tenancy: Here we use the userId relation as extra guard for retrieval of playlist
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  return {
    props: {
      playlist,
    },
  };
};
