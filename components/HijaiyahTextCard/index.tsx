import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface HijaiyahProps {
  ar: string;
  ind: string;
}

export default function HijaiyahTextCard(props: HijaiyahProps) {
  const { ar, ind } = props;

  const playAudio = (huruf: string) => {
    const audio = new Audio(`/audio/hijaiyah/${huruf}.mp3`);
    audio.play();
  };
  return (
    <>
      <Box
        onClick={() => playAudio(ind)}
        maxH="200px"
        minH="200px"
        w="200px"
        boxShadow="lg"
        rounded="md"
        p={6}
        overflow="hidden"
        cursor="pointer"
        _hover={{ boxShadow: 'lg' }}
        role="group"
        display={'flex'}
        flexDirection="column"
        alignItems={'center'}
        justifyContent="center"
      >
        <Text fontSize={'7xl'}>{ar}</Text>
        <Text>{ind}</Text>
      </Box>
    </>
  );
}
