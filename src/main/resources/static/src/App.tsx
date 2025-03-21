import {useEffect, useState} from "react";
import {StationData} from "./utils/types.ts";
import {getAllStations} from "./utils/api.ts";
import {Box, Tab, Tabs, Tooltip} from "@mui/material";
import {LocationOnOutlined, List} from "@mui/icons-material";
import StationList from "./components/StationList.tsx";
import OsloMap from "./components/OsloMap.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {

    const [stations, setStations] = useState<StationData[]>([]);
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const fetchInitialData = async () => {
        try {
            const data: StationData[] = await getAllStations();
            setStations(data);
        } catch (error) {
            console.error("Feil ved henting av stasjoner:", error);
        }
    };

    useEffect(() => {
        fetchInitialData();

        const eventSource = new EventSource("/api/stations/stream");

        eventSource.onmessage = (event) => {
            const data: StationData[] = JSON.parse(event.data);
            setStations(data);
        };

        eventSource.onerror = (error) => {
            console.error("Feil med SSE:", error);
            eventSource.close();
        };

        return () => eventSource.close();
    }, []);

    const lastReported = stations.length > 0 ? stations[0].last_reported : undefined;
    const formattedTimestamp = lastReported
        ? new Date(lastReported * 1000).toLocaleTimeString("no-NO", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
        : "Ukjent";


    return (
        <>
            <NavBar timestamp={formattedTimestamp}/>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "65px",
                    position: "relative"
                }}
            >
                <Tabs value={tabValue} onChange={handleChange} aria-label="icon tabs example">
                    <Tooltip title="Se ledige sykler og låser i listeformat">
                        <Tab icon={<List/>} aria-label="listIcon"/>
                    </Tooltip>
                    <Tooltip title="Utforsk bysykkelstasjoner på kartet">
                        <Tab icon={<LocationOnOutlined/>} aria-label="map"/>
                    </Tooltip>
                </Tabs>
            </Box>

            {tabValue === 0 && <StationList stations={stations}/>}
            {tabValue === 1 && (
                <Box
                    sx={{
                        width: "100vw",
                        height: "85vh",
                        padding: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <OsloMap stations={stations}/>
                </Box>
            )}
        </>
    );
}

export default App;
