package no.alekper.oslosykkel.dto.stations;

import lombok.Data;

@Data
public class StationInfo {
    private String station_id;
    private String name;
    private String address;
    private double lat;
    private double lon;
    private int capacity;
}
