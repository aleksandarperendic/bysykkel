package no.alekper.oslosykkel.client;

import lombok.extern.slf4j.Slf4j;
import no.alekper.oslosykkel.dto.availability.StationStatusData;
import no.alekper.oslosykkel.dto.stations.StationData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class BysykkelClient {

    private final RestTemplate restTemplate;
    private final String baseUrl;
    private final String clientIdentifier;

    public BysykkelClient(@Value("${bysykkel.base-url}") String baseUrl,
                          @Value("${bysykkel.client-id}") String clientIdentifier) {
        this.restTemplate = new RestTemplate();
        this.baseUrl = baseUrl;
        this.clientIdentifier = clientIdentifier;
    }

    private HttpEntity<Void> createHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Client-Identifier", clientIdentifier);
        return new HttpEntity<>(headers);
    }

    public StationData getStationInformation() {
        try {
            String url = baseUrl + "/station_information.json";
            ResponseEntity<StationData> response = restTemplate.exchange(url, HttpMethod.GET, createHeaders(), StationData.class);
            return response.getBody();
        } catch (Exception e) {
            throw new BysykkelClientException("Feil ved henting av station_information", e);
        }
    }

    public StationStatusData getStationStatus() {
        try {
            String url = baseUrl + "/station_status.json";
            ResponseEntity<StationStatusData> response = restTemplate.exchange(url, HttpMethod.GET, createHeaders(), StationStatusData.class);
            return response.getBody();
        } catch (Exception e) {
            throw new BysykkelClientException("Feil ved henting av station_status", e);
        }
    }
}
