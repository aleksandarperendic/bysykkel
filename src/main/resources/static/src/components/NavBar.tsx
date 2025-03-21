import {AppBar, Box, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {DirectionsBike} from "@mui/icons-material";
import InfoChip from "../common/InfoChip.tsx";

interface NavBarProps {
    timestamp: string;
}

const NavBar = ({timestamp}: NavBarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="fixed" elevation={0} sx={{backgroundColor: "#005fc9"}}>
            <Toolbar sx={{position: "relative", minHeight: 64}}>
                {isMobile ? (
                    <>
                        <Box>
                            <DirectionsBike sx={{color: "#fcfcfc"}} fontSize="large"/>
                        </Box>
                        <Box sx={{ml: "auto"}}>
                            <InfoChip label={`Sist oppdatert: ${timestamp}`}/>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            <DirectionsBike sx={{color: "#fcfcfc"}} fontSize="large"/>
                        </Box>
                        <Box sx={{ml: "auto"}}>
                            <InfoChip label={`Sist oppdatert: ${timestamp}`}/>
                        </Box>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;