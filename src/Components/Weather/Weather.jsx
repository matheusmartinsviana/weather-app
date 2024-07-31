import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import CardWeather from "./CardWeather";
import style from "./Styles/Weather.module.css";
import WeatherInfo from "./WeatherInfo";

const api = {
  key: 'b32daa9a9fcf66937b481e532e0d14d9',
  base: 'https://api.openweathermap.org/data/2.5/',
}

const Weather = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${api.base}weather?q=${city}&units=metric&appid=${api.key}&lang=pt_br`)
      setWeatherData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <div className={style.weatherContainer}>
      <div className={style.searchForm}>
        <form onSubmit={handleSubmit}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Digite sua cidade"
            value={city}
            onChange={handleInputChange}
          />
          <button className={style.submitButton} type="submit"><IoSearch size={20} style={{ marginRight: '15px' }} /></button>
        </form>
      </div>
      {weatherData ? (
        <>
          <CardWeather
            icon={weatherData.weather[0].icon}
            name={weatherData.name}
            country={weatherData.sys.country}
            temp={weatherData.main.temp}
            description={weatherData.weather[0].description}
            thermalSensation={weatherData.main.feels_like}
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
            wind={weatherData.wind.speed}
          />
          <WeatherInfo cityApi={weatherData.name} />
        </>
      ) : (
        <p>{loading ? 'Carregando...' : 'Digite o nome de uma cidade para ver a previsão do tempo.'}</p>
      )}
    </div>
  )
}

export default Weather
