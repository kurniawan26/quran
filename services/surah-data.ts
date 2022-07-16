import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API

export const getSurahData = async () => {
    const response = await axios.get(`${ROOT_API}/surat`)
    const { data } = response
    return data
}

export const getSurahDataDetail = async (id: any) => {
    const response = await axios.get(`${ROOT_API}/surat/${id}`)

    return response.data
}       