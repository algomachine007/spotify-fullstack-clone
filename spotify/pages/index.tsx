import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      color="blue"
      roundImage
      subtitle="Profile"
      title="Benneth"
      description="15 public playlists"
      image="http://placekitten.com/g/300/300"
    >
      <Box paddingX="50px">
        <Box color="white" marginBottom="50px">
          <Text fontSize="2xl" fontWeight="bold">
            Top Artist this month
          </Text>
          <Text>Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box marginX="10px" width="20%">
              <Box
                color="white"
                bg="gray.900"
                borderRadius="4px"
                padding="15px"
              >
                <Image
                  src="http://placekitten.com/g/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large"> {artist.name}</Text>
                  <Text fontSize="x-small"> Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  console.log(artists);
  return {
    props: {
      artists,
    },
  };
};
