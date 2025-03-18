package no.alekper.oslosykkel.dto.stations;

import lombok.Data;

@Data
public class StationData {
    private long last_updated;
    private StationWrapper data;
}
