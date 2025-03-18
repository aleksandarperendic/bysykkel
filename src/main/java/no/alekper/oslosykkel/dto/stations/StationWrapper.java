package no.alekper.oslosykkel.dto.stations;


import lombok.Data;

import java.util.List;

@Data
public class StationWrapper {
    private List<StationInfo> stations;
}
