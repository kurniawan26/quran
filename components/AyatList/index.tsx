import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';

interface AyahListProps {
  text: string;
  number: number;
  artinya: string;
}

export default function AyahList(props: AyahListProps) {
  const { text, number, artinya } = props;
  return (
    <>
      <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontWeight="semibold">Ayat</Text>
          <Text fontWeight="bold">{number}</Text>
        </Stack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent="flex-end"
        >
          <Text
            fontSize={{ base: 'xx-large' }}
            fontWeight="black"
            textAlign={'right'}
            maxW={'4xl'}
          >
            {text}
          </Text>
        </Stack>
        <Text
          fontSize={{ base: 'md' }}
          fontWeight="normal"
          textAlign={'left'}
          maxW={'4xl'}
        >
          {artinya}
        </Text>
      </Stack>
    </>
  );
}
