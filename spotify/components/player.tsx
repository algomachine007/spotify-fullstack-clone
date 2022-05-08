import { Flex, Text } from "@chakra-ui/layout";
import { Box, ButtonGroup, Center, IconButton, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import { MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled, MdOutlineRepeat, MdShuffle, MdSkipNext, MdSkipPrevious } from "react-icons/md";

import { formatTime } from "../lib/formatters";

const Player = ({ songs, activeSong }) => {
  console.log("activeSong", activeSong);
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(
    songs.findIndex((s) => s.id === activeSong.id)
  );
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const soundRef = useRef(null);
  const [isSeeking, setIsSeeking] = useState(false);
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);
  const repeatRef = useRef(repeat);

  useEffect(() => {
    let timerId;

    if (playing && !isSeeking) {
      const f = () => {
        setSeek(soundRef.current.seek());
      };
      timerId = requestAnimationFrame(f);

      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [playing, isSeeking]);

  useEffect(() => {
    setActiveSong(songs[index]);
  }, [index, setActiveSong, songs]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  const playState = () => {
    setPlaying((previousState) => !previousState);
  };

  const onRepeat = () => {
    setRepeat((previousState) => !previousState);
  };

  const prevSong = () => {
    setIndex((previousState) => {
      return previousState ? previousState - 1 : songs.length - 1;
    });
  };

  const nextSong = () => {
    setIndex((previousState: any) => {
      if (shuffle) {
        // shuffle logic: recursion
        const next = Math.floor(Math.random() * songs.length);

        if (next === previousState) {
          return nextSong();
        }
        return next;
      }
      return previousState === songs.length - 1 ? 0 : previousState + 1;
    });
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(0);
      soundRef.current.seek(0);
    } else {
      nextSong();
    }
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = (e) => {
    setSeek(parseFloat(e[0]));
    soundRef.current.seek(e[0]);
  };

  return (
    <Box>
      <Box>
        <ReactHowler
          ref={soundRef}
          playing={playing}
          src={activeSong?.url}
          onLoad={onLoad}
          onEnd={onEnd}
        />
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
            onClick={prevSong}
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
            onClick={nextSong}
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
            <Text fontSize="xs">{formatTime(seek)}</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              ariaLabel={["min", "max"]}
              step={0.1}
              min={0}
              max={duration ? duration.toFixed(2) : 0}
              id="player-range"
              onChange={onSeek}
              value={[seek]}
              onChangeStart={setIsSeeking(true)}
              onChangeEnd={setIsSeeking(false)}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs"> {formatTime(duration)}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
