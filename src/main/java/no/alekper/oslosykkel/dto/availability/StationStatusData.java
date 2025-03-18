package no.alekper.oslosykkel.dto.availability;

import lombok.Data;

@Data
public class StationStatusData {
    private long last_updated;
    private StationStatusWrapper data;
}
