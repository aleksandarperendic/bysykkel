import {StationData} from "../utils/types.ts";
import StationCard from "./StationCard.tsx";
import Grid from '@mui/material/Grid2';
import InfoChip from "../common/InfoChip.tsx";
import {Box} from "@mui/material";

interface StationListProps {
    stations?: StationData[]
}

const StationList = ({stations}: StationListProps) => {
    return (
        <Grid container columnSpacing={2} sx={{ marginTop: "15px" }}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Box display="flex" justifyContent="center" my={1}>
                    <InfoChip label="Påbegynn reise her ▼" />
                </Box>
                <Box
                    sx={{
                        maxHeight: "80vh",
                        overflowY: "auto",
                        pr: 1,
                        position: "relative",
                        maskImage: `linear-gradient(to bottom, black 96%, transparent 100%)`,
                        WebkitMaskImage: `linear-gradient(to bottom, black 96%, transparent 100%)`,
                    }}
                >
                    {stations &&
                        stations
                            .filter((s) => s.num_bikes_available > 0)
                            .map((station) => (
                                <StationCard key={station.station_id} station={station} />
                            ))}
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Box display="flex" justifyContent="center" my={1}>
                    <InfoChip label="Avslutt reise her ▼" />
                </Box>
                <Box
                    sx={{
                        maxHeight: "80vh",
                        overflowY: "auto",
                        pr: 1,
                        maskImage: `linear-gradient(to bottom, black 96%, transparent 100%)`,
                        WebkitMaskImage: `linear-gradient(to bottom, black 96%, transparent 100%)`,
                    }}
                >
                    {stations &&
                        stations
                            .filter((s) => s.num_docks_available > 0)
                            .map((station) => (
                                <StationCard key={station.station_id} station={station} />
                            ))}
                </Box>
            </Grid>
        </Grid>
    )
}

export default StationList;