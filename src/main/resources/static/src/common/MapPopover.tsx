import {Box, Paper, Typography} from "@mui/material";
import {DirectionsBike, LocationOn, LockOpen} from "@mui/icons-material";

interface PopoverProps {
    address: string;
    num_bikes_available?: number;
    num_docks_available?: number;
    capacity?: number;
}

const MapPopover = ({address, num_bikes_available, num_docks_available, capacity}: PopoverProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: "#003b7d",
                color: "#fcfcfc",
                p: 2,
                minWidth: "180px",
                borderRadius: 2,
            }}
        >
            <Typography
                variant="body1"
                fontWeight="bold"
                sx={{mb: 1}}
            >
                {address}
            </Typography>

            <Box sx={{display: "flex", alignItems: "center", gap: 1, mb: 0.5}}>
                <DirectionsBike sx={{fontSize: 24}}/>
                <Typography variant="body2" fontWeight="bold">
                    Ledige sykler: {num_bikes_available}
                </Typography>
            </Box>

            <Box sx={{display: "flex", alignItems: "center", gap: 1, mb: 0.5}}>
                <LockOpen sx={{fontSize: 24}}/>
                <Typography variant="body2" fontWeight="bold">
                    Ledige låser: {num_docks_available}
                </Typography>
            </Box>

            <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                <LocationOn sx={{fontSize: 24}}/>
                <Typography variant="body2" fontWeight="bold">
                    Kapasitet: {capacity}
                </Typography>
            </Box>
        </Paper>
    )
}

export default MapPopover;