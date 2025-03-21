# Bysykkel

## Beskrivelse
Applikasjonen er en sanntidsoversikt over sykkelstasjoner i Oslo Bysykkel-systemet, hvor brukere kan se tilgjengelige sykler og låser på et interaktivt kart.

Løsningen kombinerer data fra Oslo Bysykkels åpne sanntids-API og presenterer det i et brukervennlig grensesnitt. Brukere kan veksle mellom kartvisning og listevisning, med støtte for mobilvennlig layout. Kartet benytter clustering for å organisere stasjoner ved "høy" zoom-nivå, og hver stasjon har en popup med detaljert informasjon om tilgjengelighet og kapasitet.

Bakgrunnstjenesten benytter Server-Sent Events (SSE) for å levere oppdatert informasjon til frontend uten behov for polling, og data oppdateres hvert 10. sekund.

Applikasjonen er containerisert og satt opp med Docker Bake, og bruker Nginx som reverse proxy for enkel distribusjon og skalerbarhet. Backend er skrevet i Java med Spring Boot, og frontend i React og TypeScript med MUI og Leaflet for kartkomponenten.

## Info
|          |                                         |
|----------|-----------------------------------------|
| Navn     | alekper - bysykkel                      |
| Backend  | `Java 21`, `Spring Boot`, `Maven`       |
| Frontend | `React`, `Vite`, `Nginx`, `Material UI` |
| Docker   | `alekper/bysykkel`                      |
| URL      | [Lokalt](http://localhost:3000)         |

## Status
| Info          | Verdi |
|---------------|:-----:|
| Fullført      |   ✅   |
| Ikke fullført |  🔜   |

### Funksjoner
| Feature                            | Status | Beskrivelse                                                              |
|------------------------------------|:------:|--------------------------------------------------------------------------|
| Kartvisning                        |   ✅    | Mulig å se alle bysykkelstasjoner direkte på et interaktivt kart.        |
| Kart clustering                    |   ✅    | Nærliggende stasjoner grupperes automatisk for bedre oversikt.           |
| Listevisning tilpasset mobile view |   ✅    | Viser ledige sykler og ledige låser i to separate lister.                |
| Kombinert Event Stream             |   ✅    | Sanntidsdata kombineres i backend og sendes til frontend via SSE.        |
| Bruk av Docker Bake                |   ✅    | Multi-stage bygging med `docker buildx bake`.                            |
| Bruk av Nginx og proxy             |   ✅    | Nginx håndterer statisk frontend og videresending til backend via proxy. |
| Håndtering av feil i frontend      |   🔜   | Mangler visning av feilmeldinger ved nettverksfeil eller nedetid.        |


## Hvordan starte applikasjon?

1. Klon repoet
    ```zsh
    git clone git@github.com:aleksandarperendic/bysykkel.git
    ```
2. Gå inn i mappen
    ```zsh
    cd bysykkel
    ```
3. Kjør applikasjonen med Docker
    ```zsh
    make docker deploylocal
    ```
4. Åpne nettleseren og gå til [http://localhost:3000](http://localhost:3000)
5. For å stoppe applikasjonen
    ```zsh
    make stopdeploylocal
    ```

## Hvorfor Docker?
Formålet er å levere en produksjonsklar applikasjon. Her er det brukt et multi-stage Docker-image for å minimere størrelsen ved å ekskludere unødvendige avhengigheter fra sluttimagen.

Ved å containerisere applikasjonen med Docker, sikres det at den oppfører seg likt på alle plattformer, uavhengig av miljøforskjeller.

## Teknologier
[![Teknologier](https://skillicons.dev/icons?i=java,spring,maven,vite,react,ts,nodejs,nginx,docker&theme=light)]()
