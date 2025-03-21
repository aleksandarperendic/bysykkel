package no.alekper.oslosykkel.dto.stations;

import lombok.Data;

@Data
public class StationCombined {
    private String station_id;
    private String address;
    private double lat;
    private double lon;
    private int capacity;
    private int num_bikes_available;
    private int num_docks_available;
    private long last_reported;
}
