import axios from "axios";
import {StationData} from "./types.ts";


const api = axios.create({
    baseURL: "/api/stations",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllStations = async (): Promise<StationData[]> => {
    const response = await api.get<StationData[]>("/getAll");
    return response.data;
};