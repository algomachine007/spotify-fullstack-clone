import { Box } from "@chakra-ui/layout";
import React from "react";
// import Sidebar from "./sidebar";

const PlayerLayout = ({ children }: any) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        {/* <Sidebar /> */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam alias
        facilis error maxime! Nulla, minima perferendis incidunt corporis
        aliquid consequatur a, ratione sunt temporibus saepe odit
        necessitatibus? Quo, accusantium natus.
      </Box>

      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
