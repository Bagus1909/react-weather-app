import React from "react"

function WeatherIcon({ iconNumber, summary }) {
  return <img src={`/dist/weather_icons/set04/big/${iconNumber}.png`} alt={summary} draggable={false} />
}

export default WeatherIcon
