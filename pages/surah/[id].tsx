import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import AyahList from '../../components/AyatList';
import SimpleSidebar from '../../components/Sidebar';
import { getSurahDataDetail } from '../../services/surah-data';

export default function Ayah() {
  const { query, isReady } = useRouter();
  console.log(query.id);
  const [dataItem, setDataItem] = useState({
    number: 1,
    ayah: 1,
    verse: '',
    ayat: [
      {
        nomor: 1,
        idn: 'Test',
        ar: 'Test',
      },
      {
        nomor: 2,
        idn: 'Test',
        ar: 'Test',
      },
    ],
    nama: 'surah',
  });

  console.log(dataItem);

  const getSurahDetailAPI = useCallback(async (id: any) => {
    try {
      const data = await getSurahDataDetail(id);
      setDataItem(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isReady) {
      getSurahDetailAPI(query.id);
    }
  }, [getSurahDetailAPI, query.id, isReady]);

  return (
    <>
      {isReady && (
        <SimpleSidebar>
          <h1>{dataItem.nama}</h1>
          <audio controls src="https://equran.id/content/audio/002.mp3" />
          {dataItem.ayat.map((ayah) => {
            return (
              <AyahList
                key={ayah.nomor}
                number={ayah.nomor}
                artinya={ayah.idn}
                text={ayah.ar}
              />
            );
          })}
        </SimpleSidebar>
      )}
    </>
  );
}
