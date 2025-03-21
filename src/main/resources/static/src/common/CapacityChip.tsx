import {Box, Tooltip, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DirectionsBike, LockOpen} from "@mui/icons-material";

interface CapacityChipProps {
    num_bikes_available?: number;
    num_docks_available?: number;
    capacity?: number;
}

const CapacityChip = ({num_bikes_available, num_docks_available, capacity}: CapacityChipProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "#003b7d",
                color: "#fcfcfc",
                px: 2,
                py: 0.5,
                borderRadius: isMobile ? 4 : 16,
                width: isMobile ? "60px" : "145px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "space-between",
                gap: isMobile ? 1 : 0,
            }}
        >
            <Tooltip title={`Antall ledige sykler. Kapasitet: ${capacity}`}>
                <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
                    <DirectionsBike sx={{fontSize: 16}}/>
                    <Typography fontWeight="bold" variant="body1">
                        {num_bikes_available}
                    </Typography>
                </Box>
            </Tooltip>

            {!isMobile && (
                <Box
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        pointerEvents: "none",
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold">
                        |
                    </Typography>
                </Box>
            )}

            <Tooltip title={`Antall ledige låser. Kapasitet: ${capacity}`}>
                <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
                    <LockOpen sx={{fontSize: 16}}/>
                    <Typography fontWeight="bold" variant="body1">
                        {num_docks_available}
                    </Typography>
                </Box>
            </Tooltip>
        </Box>
    );
};

export default CapacityChip;