import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline} from "@mui/material";
import "leaflet/dist/leaflet.css";
import "./assets/mapCluster.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline/>
        <App/>
    </StrictMode>,
)
