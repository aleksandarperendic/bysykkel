package no.alekper.oslosykkel.dto.availability;

import lombok.Data;

@Data
public class StationStatus {
    private String station_id;
    private boolean is_installed;
    private boolean is_renting;
    private int num_bikes_available;
    private int num_docks_available;
    private long last_reported;
    private boolean is_returning;
}
