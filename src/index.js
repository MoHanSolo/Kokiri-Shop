import './scss/styles.scss'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './pages/App/App'

const root = createRoot(document.getElementById("app"))

root.render(
<StrictMode>
    <Router>
        <App />
    </Router>
</StrictMode>
)