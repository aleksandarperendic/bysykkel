package no.alekper.oslosykkel.dto.availability;

import lombok.Data;

import java.util.List;

@Data
public class StationStatusWrapper {
    private List<StationStatus> stations;
}
