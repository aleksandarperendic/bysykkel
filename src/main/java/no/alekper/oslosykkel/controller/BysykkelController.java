package no.alekper.oslosykkel.controller;

import no.alekper.oslosykkel.dto.availability.StationStatusData;
import no.alekper.oslosykkel.dto.stations.StationData;
import no.alekper.oslosykkel.service.BysykkelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stations")
public class BysykkelController {

    private final BysykkelService bysykkelService;

    public BysykkelController(BysykkelService bysykkelService) {
        this.bysykkelService = bysykkelService;
    }

    @GetMapping
    public StationData getStationsData() {
        return bysykkelService.getStationInformation();
    }

    @GetMapping("/status")
    public StationStatusData getStationsStatus() {
        return bysykkelService.getStationStatus();
    }
}