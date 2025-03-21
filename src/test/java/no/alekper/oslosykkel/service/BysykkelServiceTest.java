package no.alekper.oslosykkel.service;

import no.alekper.oslosykkel.client.BysykkelClient;
import no.alekper.oslosykkel.dto.availability.StationStatus;
import no.alekper.oslosykkel.dto.availability.StationStatusData;
import no.alekper.oslosykkel.dto.availability.StationStatusWrapper;
import no.alekper.oslosykkel.dto.stations.StationCombined;
import no.alekper.oslosykkel.dto.stations.StationData;
import no.alekper.oslosykkel.dto.stations.StationInfo;
import no.alekper.oslosykkel.dto.stations.StationWrapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class BysykkelServiceTest {

    private BysykkelClient client;
    private BysykkelService service;

    @BeforeEach
    void setUp() {
        client = mock(BysykkelClient.class);
        service = new BysykkelService(client);
    }

    @Test
    void shouldCombineStationDataCorrectly() {

        StationStatus stationStatus = new StationStatus();
        stationStatus.setStation_id("123");
        stationStatus.setNum_bikes_available(12);
        stationStatus.setNum_docks_available(12);
        stationStatus.setLast_reported(1742579784);

        StationStatusWrapper stationStatusWrapper = new StationStatusWrapper();
        stationStatusWrapper.setStations(List.of(stationStatus));

        StationStatusData stationStatusData = new StationStatusData();
        stationStatusData.setData(stationStatusWrapper);

        StationInfo stationInfo = new StationInfo();
        stationInfo.setStation_id("123");
        stationInfo.setAddress("Alekperplass");
        stationInfo.setCapacity(24);

        StationWrapper stationWrapper = new StationWrapper();
        stationWrapper.setStations(List.of(stationInfo));

        StationData stationData = new StationData();
        stationData.setData(stationWrapper);

        when(client.getStationStatus()).thenReturn(stationStatusData);
        when(client.getStationInformation()).thenReturn(stationData);

        List<StationCombined> combined = service.getCombinedStations();

        assertEquals(1, combined.size());
        assertEquals("123", combined.getFirst().getStation_id());
        assertEquals("Alekperplass", combined.getFirst().getAddress());
        assertEquals(12, combined.getFirst().getNum_bikes_available());
        assertEquals(12, combined.getFirst().getNum_docks_available());
        assertEquals(24, combined.getFirst().getCapacity());
        assertEquals(1742579784, combined.getFirst().getLast_reported());
    }

    @Test
    void shouldReturnEmptyListWhenNoStations() {
        StationWrapper stationWrapper = new StationWrapper();
        stationWrapper.setStations(List.of());

        StationData stationData = new StationData();
        stationData.setData(stationWrapper);

        StationStatusWrapper statusWrapper = new StationStatusWrapper();
        statusWrapper.setStations(List.of());

        StationStatusData statusData = new StationStatusData();
        statusData.setData(statusWrapper);

        when(client.getStationInformation()).thenReturn(stationData);
        when(client.getStationStatus()).thenReturn(statusData);

        List<StationCombined> result = service.getCombinedStations();

        assertEquals(0, result.size());
    }
}