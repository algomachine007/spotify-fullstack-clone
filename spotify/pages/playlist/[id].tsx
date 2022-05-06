import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/songsTable";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const getBGColor = (id) => {
  const colors = ["red", "green", "blue", "orange", "purple", "teal", "gray"];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  console.log("Playlist", playlist);
  return (
    <GradientLayout
      color={getBGColor(playlist.id)}
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400/300?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export default Playlist;

export const getServerSideProps = async ({ query, req }) => {
  let user;

  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  console.log("Query Object", query);
  // get user id based on the token

  const [playlist] = await prisma.playlist.findMany({
    where: {
      // [id] must be id
      id: +query.id,
      // multi tenancy: Here we use the userId relation as extra guard for retrieval of playlist
      userId: user.id,
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
