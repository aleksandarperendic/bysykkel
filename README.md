# Bysykkel

## Beskrivelse
Applikasjonen er en sanntidsoversikt over sykkelstasjoner i Oslo Bysykkel-systemet, hvor brukere kan se tilgjengelige sykler og låser på et interaktivt kart.

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
| Feature            | Status | Beskrivelse                                                                  |
|--------------------|:------:|------------------------------------------------------------------------------|

## Oversikt
```

```

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
    make docker stopdeploylocal
    ```

## Hvorfor Docker?
Formålet er å levere en produksjonsklar applikasjon. Her er det brukt et multi-stage Docker-image for å minimere størrelsen ved å ekskludere unødvendige avhengigheter fra sluttimagen.

Ved å containerisere applikasjonen med Docker, sikres det at den oppfører seg likt på alle plattformer, uavhengig av miljøforskjeller.

## Teknologier
[![Teknologier](https://skillicons.dev/icons?i=java,spring,maven,vite,react,ts,nodejs,nginx,docker&theme=light)]()
