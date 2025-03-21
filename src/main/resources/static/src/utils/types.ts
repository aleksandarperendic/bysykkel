export interface StationData {
    station_id: string;
    address: string;
    lat: number;
    lon: number;
    capacity: number;
    num_bikes_available: number;
    num_docks_available: number;
    last_reported: number;
}
