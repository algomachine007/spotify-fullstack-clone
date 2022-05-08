import { Box, Flex, Text } from "@chakra-ui/layout";
import { useStoreState } from "easy-peasy";
import React from "react";

import Player from "./player";

const PlayerBar = () => {
  // getting data from the store
  const songs = useStoreState((store: any) => store.activeSongs);
  const activeSong = useStoreState((store: any) => store.activeSong); // playing song

  console.log("activeSong", activeSong);
  console.log("songs", songs);
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        {activeSong && (
          <Box padding="20px" color="white" width="30%">
            <Text fontSize="large"> {activeSong.name}</Text>
            <Text fontSize="sm">{activeSong.artist.name}</Text>
          </Box>
        )}
        <Box width="40%">
          <Text fontSize="large">
            {" "}
            {activeSong && <Player songs={songs} activeSong={activeSong} />}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
