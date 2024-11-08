import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { ThemeProvider } from "./context/theme.context.jsx"
import { WeatherProvider } from "./context/weather.context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
)
