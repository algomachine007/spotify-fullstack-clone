import { Flex, Text } from "@chakra-ui/layout";
import { Box, ButtonGroup, Center, IconButton, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled, MdOutlineRepeat, MdShuffle, MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Player = ({ songs, activeSong }) => {
  console.log("activeSong", activeSong);
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const playState = () => {
    setPlaying((previousState) => !previousState);
  };

  const onRepeat = () => {
    setRepeat((previousState) => !previousState);
  };
  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} />{" "}
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            icon={<MdShuffle />}
            fontSize="24px"
            ariaLabel="shuffle"
            outline="none"
            variant="link"
            color={shuffle ? "white" : "gray.600"}
            onClick={() => setShuffle((previousState) => !previousState)}
          />

          <IconButton
            icon={<MdSkipPrevious />}
            fontSize="24px"
            ariaLabel="skip"
            outline="none"
            variant="link"
          />

          {playing ? (
            <IconButton
              icon={<MdOutlinePauseCircleFilled />}
              fontSize="40px"
              ariaLabel="pause"
              outline="none"
              variant="link"
              onClick={playState}
            />
          ) : (
            <IconButton
              icon={<MdOutlinePlayCircleFilled />}
              fontSize="40px"
              ariaLabel="play"
              outline="none"
              variant="link"
              onClick={playState}
            />
          )}

          <IconButton
            icon={<MdSkipNext />}
            fontSize="24px"
            ariaLabel="pause"
            outline="none"
            variant="link"
          />
          <IconButton
            icon={<MdOutlineRepeat />}
            fontSize="40px"
            ariaLabel="pause"
            outline="none"
            variant="repeat"
            color={repeat ? "white" : "gray.600"}
            onClick={onRepeat}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs"> 1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              ariaLabel={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs"> 3:21</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
