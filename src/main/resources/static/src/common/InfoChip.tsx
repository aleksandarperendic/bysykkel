import {Chip} from "@mui/material";

interface ChipProps {
    label: string;
}

const InfoChip = ({ label }: ChipProps) => {
  return (
      <Chip
          sx={{
              backgroundColor: "#003b7d",
              color: "#fcfcfc",
              fontWeight: "bold",
          }}
          label={label}
      />
  )
}

export default InfoChip;