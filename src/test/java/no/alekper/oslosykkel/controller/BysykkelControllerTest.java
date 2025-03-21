package no.alekper.oslosykkel.controller;

import no.alekper.oslosykkel.dto.stations.StationCombined;
import no.alekper.oslosykkel.service.BysykkelService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(BysykkelController.class)
class BysykkelControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private BysykkelService service;

    @Test
    void shouldReturnListOfStations() throws Exception {
        StationCombined station = new StationCombined();
        station.setStation_id("123");
        station.setAddress("Alekperplass");

        Mockito.when(service.getCombinedStations()).thenReturn(List.of(station));

        mockMvc.perform(get("/api/stations/getAll"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].station_id").value("123"))
                .andExpect(jsonPath("$[0].address").value("Alekperplass"));
    }
}