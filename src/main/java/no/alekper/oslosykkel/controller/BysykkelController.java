package no.alekper.oslosykkel.controller;

import no.alekper.oslosykkel.dto.stations.StationCombined;
import no.alekper.oslosykkel.service.BysykkelService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("/api/stations")
public class BysykkelController {

    private final BysykkelService bysykkelService;

    public BysykkelController(BysykkelService bysykkelService) {
        this.bysykkelService = bysykkelService;
    }

    @GetMapping("/getAll")
    public List<StationCombined> getCombinedStations() {
        return bysykkelService.getCombinedStations();
    }

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<List<StationCombined>> streamStations() {
        return Flux.interval(Duration.ofSeconds(10))
                .map(i -> bysykkelService.getCombinedStations());
    }
}