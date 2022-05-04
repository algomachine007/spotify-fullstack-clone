import {
  Box,
  Center,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

// import { usePlaylist } from "../lib/hooks/hooks";

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Your Library", icon: MdLibraryMusic, route: "/library" },
];

const musicMenu = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favorites", icon: MdFavorite, route: "/FAVORITE" },
];

const Sidebar = () => {
  // const { playlists } = usePlaylist();

  const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i}`);
  console.log(playlists);
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="grey"
    >
      <Box paddingY="20px" height="100%">
        <Box
          width="120px"
          marginBottom="20px"
          paddingX="20px"
          textAlign="center"
        >
          <Image src="/trax.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map(({ name, icon, route }) => (
              // TODO: this ListItem should take a menu item object and render the data in a seperate component, it should have p-top or p-bottom props as variant
              <ListItem paddingX="20px" fontSize="16px" key={name}>
                <LinkBox>
                  <Link href={route} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color="white" marginRight="20px" />
                      {name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />

                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingX="20px">
          <List spacing={2}>
            {playlists.map((playlist: any) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box />
      </Box>
    </Box>
  );
};

export default Sidebar;
