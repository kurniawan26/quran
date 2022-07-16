import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import CardSurahWrapper from '../components/CardSurahWrapper';
import SimpleSidebar from '../components/Sidebar';
import { getSurahData } from '../services/surah-data';

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
      <SimpleSidebar>
        {surahQuran.map((surah, index) => {
          return (
            <CardSurahWrapper
              key={index}
              arti={surah.arti}
              audio={surah.audio}
              deskripsi={surah.deskripsi}
              jumlah_ayat={surah.jumlah_ayat}
              nama={surah.nama}
              tempat_turun={surah.tempat_turun}
              nomor={surah.nomor}
              nama_latin={surah.nama_latin}
            />
          );
        })}
      </SimpleSidebar>
    </>
  );
};

export default Home;
