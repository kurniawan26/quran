import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API

export const getSurahData = async () => {
    const response = await axios.get(`${ROOT_API}/surah`)
    const { data } = response.data
    return data
}       