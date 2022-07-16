/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import {
  chakra,
  Container,
  HStack,
  VStack,
  Text,
  Tag,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

interface SurahProps {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio?: string;
}

const CardSurahWrapper = (props: SurahProps) => {
  const {
    nomor,
    nama,
    nama_latin,
    jumlah_ayat,
    tempat_turun,
    arti,
    deskripsi,
    audio,
  } = props;
  const textColor = useColorModeValue('gray.500', 'gray.200');
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Container maxW="4xl" p={{ base: 5, md: 10 }}>
        <VStack spacing={4}>
          <chakra.div onClick={toggleOpen}>
            <HStack
              p={4}
              bg={useColorModeValue('white', 'gray.800')}
              rounded="xl"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              w="100%"
              h="100%"
              textAlign="left"
              align="start"
              spacing={4}
              cursor="pointer"
              _hover={{ shadow: 'lg' }}
            >
              <VStack align="start" justify="flex-start">
                <VStack spacing={0} align="start">
                  <HStack>
                    <Text
                      as={Link}
                      href={`/surah/${nomor}`}
                      fontWeight="bold"
                      fontSize="md"
                      noOfLines={1}
                      onClick={(e) => e.stopPropagation()}
                      isExternal
                    >
                      {nama} | {arti}
                    </Text>
                    <HStack spacing="1">
                      <Tag size="sm" colorScheme="gray">
                        {nomor}
                      </Tag>
                      <Tag size="sm" colorScheme="gray">
                        {tempat_turun}
                      </Tag>
                    </HStack>
                  </HStack>

                  {!isOpen && (
                    <Text
                      fontSize="sm"
                      color={textColor}
                      noOfLines={{ base: 2 }}
                    >
                      {deskripsi}
                    </Text>
                  )}

                  {isOpen && (
                    <Text fontSize="sm" color={textColor}>
                      {deskripsi}
                    </Text>
                  )}
                </VStack>
              </VStack>
            </HStack>
          </chakra.div>
        </VStack>
      </Container>
    </>
  );
};

export default CardSurahWrapper;
