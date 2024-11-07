import axios from "axios"

const API_KEY = import.meta.VITE_API_KEY

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers["retry-after"] // Mendapatkan header Retry-After jika ada
      console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds.`)
      // Kamu bisa menunggu dan mencoba ulang setelah waktu yang disarankan
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000))
      return getWeatherData(endpoint, place_id, measurementSystem) // Coba lagi setelah waktu tunggu
    } else {
      console.error("Axios Error:", error)
      throw error
    }
  }
}

export async function searchPlaces(text) {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text: text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers["retry-after"] // Mendapatkan header Retry-After jika ada
      console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds.`)
      // Kamu bisa menunggu dan mencoba ulang setelah waktu yang disarankan
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000))
      return getWeatherData(endpoint, place_id, measurementSystem) // Coba lagi setelah waktu tunggu
    } else {
      console.error("Axios Error:", error)
      throw error
    }
  }
}
