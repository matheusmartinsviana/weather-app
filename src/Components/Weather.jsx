import axios from "axios"
import React, { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5";
import CardWeather from "./CardWeather";
import style from "./Styles/Weather.module.css"

const api = {
  key: 'b32daa9a9fcf66937b481e532e0d14d9',
  base: 'https://api.openweathermap.org/data/2.5/',
}
const Weather = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false);

  const fecthData = async () => {
    try {
      setLoading(true)
      const reponse = await axios.get(`${api.base}weather?q=${city}&units=metric&appid=${api.key}&lang=pt_br`)
      console.log(reponse.data)
      setWeatherData(reponse.data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthData()
  }, [])

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fecthData()
  }


  return (
    <div className={style.weatherContainer}>
      <div className={style.searchForm}>
        <form onSubmit={handleSubmit}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Localização"
            value={city}
            onChange={handleInputChange}
          />
          <button className={style.submitButton} type="submit"><IoSearch /></button>
        </form>
      </div>
      {weatherData ? (
        <>
          <CardWeather
            name={weatherData.name}
            country={weatherData.sys.country}
            temp={weatherData.main.temp}
            description={weatherData.weather[0].description}
            thermalSensation={weatherData.main.feels_like}
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
            wind={weatherData.wind.speed}
          />
        </>
      ) : (
        <p>{loading ? 'Carregando...' : 'Digite o nome de uma cidade para ver a previsão do tempo.'}</p>
      )}
    </div>
  )
}

export default Weather