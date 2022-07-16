import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import HijaiyahTextCard from '../components/HijaiyahTextCard';
import SimpleSidebar from '../components/Sidebar';

const hurufHijaiyah = [
  {
    id: 1,
    ar: 'ا',
    ind: 'alif',
  },
  {
    id: 2,
    ar: 'ب',
    ind: 'ba',
  },
  {
    id: 3,
    ar: 'ت',
    ind: 'ta',
  },
  {
    id: 4,
    ar: 'ث',
    ind: 'tsa',
  },
  {
    id: 5,
    ar: 'ج',
    ind: 'jim',
  },
  {
    id: 6,
    ar: 'ح',
    ind: 'ha',
  },
  {
    id: 7,
    ar: 'خ',
    ind: 'kho',
  },
  {
    id: 8,
    ar: 'د',
    ind: 'dal',
  },
  {
    id: 9,
    ar: 'ذ',
    ind: 'dza',
  },
  {
    id: 10,
    ar: 'ر',
    ind: 'ro',
  },
  {
    id: 11,
    ar: 'ز',
    ind: 'zay',
  },
  {
    id: 12,
    ar: 'س',
    ind: 'sin',
  },
  {
    id: 13,
    ar: 'ش',
    ind: 'syin',
  },
  {
    id: 14,
    ar: 'ص',
    ind: 'shod',
  },
  {
    id: 15,
    ar: 'ض',
    ind: 'dhod',
  },
  {
    id: 16,
    ar: 'ط',
    ind: 'tho',
  },
  {
    id: 17,
    ar: 'ظ',
    ind: 'dhzo',
  },
  {
    id: 18,
    ar: 'ع',
    ind: 'ain',
  },
  {
    id: 19,
    ar: 'غ',
    ind: 'ghoin',
  },
  {
    id: 20,
    ar: 'ف',
    ind: 'fa',
  },
  {
    id: 21,
    ar: 'ق',
    ind: 'qof',
  },
  {
    id: 22,
    ar: 'ك',
    ind: 'kaf',
  },
  {
    id: 23,
    ar: 'ل',
    ind: 'lam',
  },
  {
    id: 24,
    ar: 'م',
    ind: 'mim',
  },
  {
    id: 25,
    ar: 'ن',
    ind: 'nun',
  },
  {
    id: 26,
    ar: 'و',
    ind: 'waw',
  },
  {
    id: 27,
    ar: 'ه',
    ind: 'Ha (besar)',
  },
  {
    id: 28,
    ar: 'ء',
    ind: 'hamzah',
  },
  {
    id: 29,
    ar: 'ي',
    ind: 'ya',
  },
];

export default function Hijaiyah() {
  return (
    <>
      <SimpleSidebar>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} lang="ar">
          {hurufHijaiyah.map((huruf) => {
            return (
              <HijaiyahTextCard ind={huruf.ind} ar={huruf.ar} key={huruf.id} />
            );
          })}
        </Grid>
      </SimpleSidebar>
    </>
  );
}
