import React, { useEffect, useState } from "react"
import axios from "axios"
import style from "./Styles/Weather.module.css"

const api = {
  key: 'b32daa9a9fcf66937b481e532e0d14d9',
  base: 'https://api.openweathermap.org/data/2.5/',
}
const Weather = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const fecthData = async () => {
    try {
      const reponse = await axios.get(`${api.base}weather?q=${city}&units=metric&appid=${api.key}&lang=pt_br`)
      console.log(reponse.data)
      setWeatherData(reponse.data)
    } catch (error) {
      console.log(error)
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Digite o nome da sua cidade"
          value={city}
          onChange={handleInputChange}
        />
        <button className={style.submitButton} type="submit">Ver tempo da sua cidade</button>
      </form>
      {weatherData ? (
        <div className={style.weatherCard}>
          <h2 className={style.locationName} >{weatherData.name}</h2>
          <p className={style.temp} >Temperatura: {weatherData.main.temp}°C</p>
          <p className={style.description} >Descrição: {weatherData.weather[0].description}</p>
          <p className={style.feels_like} >Tipo: {weatherData.main.feels_like}</p>
          <p className={style.humidity} >Humidade: {weatherData.main.humidity}%</p>
          <p className={style.pressure} >Pressão do ar: {weatherData.main.pressure}</p>
          <p className={style.windSpeed} >Velocidade do vento: {weatherData.wind.speed}m/s</p>
        </div>
      ) : (
        <p>Carregando os dados da temperatura...</p>
      )}
    </div>
  )
}

export default Weather