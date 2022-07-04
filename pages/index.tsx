import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { getSurahData } from '../services/surah-data';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [surahQuran, setSurahQuran] = useState([]);
  const callData = useCallback(async () => {
    const data = await getSurahData();
    console.log(data);
    setSurahQuran(data);
  }, []);

  useEffect(() => {
    callData();
  }, [callData]);

  return (
    <>
      {surahQuran.map((surah) => {
        return <h1>{surah.name}</h1>;
      })}
    </>
  );
};

export default Home;
