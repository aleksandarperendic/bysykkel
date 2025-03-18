package no.alekper.oslosykkel.service;

import no.alekper.oslosykkel.client.BysykkelClient;
import no.alekper.oslosykkel.dto.availability.StationStatusData;
import no.alekper.oslosykkel.dto.stations.StationData;
import org.springframework.stereotype.Service;

@Service
public class BysykkelService {

    private final BysykkelClient bysykkelClient;

    public BysykkelService(BysykkelClient bysykkelClient) {
        this.bysykkelClient = bysykkelClient;
    }

    public StationData getStationInformation() {
        return bysykkelClient.getStationInformation();
    }

    public StationStatusData getStationStatus() {
        return bysykkelClient.getStationStatus();
    }
}
