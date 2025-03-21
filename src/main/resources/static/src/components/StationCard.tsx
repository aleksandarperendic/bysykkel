import {Paper, Typography} from '@mui/material';
import {StationData} from '../utils/types.ts';
import CapacityChip from "../common/CapacityChip.tsx";

interface StationDataProps {
    station?: StationData
}

const StationCard = ({station}: StationDataProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                margin: 1,
                padding: 2,
                borderRadius: 2,
                backgroundColor: '#005fc9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    fontWeight: 'bold',
                    color: '#fcfcfc',
                    textAlign: 'left',
                }}
            >
                {station && station.address}
            </Typography>

            <CapacityChip num_bikes_available={station && station.num_bikes_available} num_docks_available={station && station.num_docks_available} capacity={station && station.capacity} />
        </Paper>
    );
}

export default StationCard;