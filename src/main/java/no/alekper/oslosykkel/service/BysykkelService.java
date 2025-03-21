package no.alekper.oslosykkel.service;

import lombok.extern.slf4j.Slf4j;
import no.alekper.oslosykkel.client.BysykkelClient;
import no.alekper.oslosykkel.dto.availability.StationStatus;
import no.alekper.oslosykkel.dto.availability.StationStatusData;
import no.alekper.oslosykkel.dto.stations.StationCombined;
import no.alekper.oslosykkel.dto.stations.StationData;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Slf4j
public class BysykkelService {

    private final BysykkelClient bysykkelClient;

    public BysykkelService(BysykkelClient bysykkelClient) {
        this.bysykkelClient = bysykkelClient;
    }

    public List<StationCombined> getCombinedStations() {
        StationData stationData = bysykkelClient.getStationInformation();
        StationStatusData statusData = bysykkelClient.getStationStatus();

        Map<String, StationStatus> statusMap = statusData.getData().getStations().stream()
                .collect(Collectors.toMap(StationStatus::getStation_id, s -> s));

        return stationData.getData().getStations().stream()
                .map(info -> {
                    StationStatus status = statusMap.get(info.getStation_id());

                    StationCombined combined = new StationCombined();
                    combined.setStation_id(info.getStation_id());
                    combined.setAddress(info.getAddress());
                    combined.setLat(info.getLat());
                    combined.setLon(info.getLon());
                    combined.setCapacity(info.getCapacity());

                    if (status != null) {
                        combined.setNum_bikes_available(status.getNum_bikes_available());
                        combined.setNum_docks_available(status.getNum_docks_available());
                        combined.setLast_reported(status.getLast_reported());
                    }

                    return combined;
                })
                .collect(Collectors.toList());
    }
}
