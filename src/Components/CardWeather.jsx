import React from "react";
import style from "./Styles/CardWeather.module.css";
import icon from "../assets/img/pngegg.png"

export default function CardWeather(props) {
    return (
        <div className={style.weatherCard}>
            <div className={style.weatherCardContent}>
                <div className={style.CardHeader}>
            <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="Logo Weather" height={50} width={50} />
                    <h2>{props.name}, {props.country}</h2>
                </div>
                    <div className={style.weatherDescription}>
                        <p className={style.description}> {props.description}, {props.temp}°C </p>
                    </div>
                <div className={style.weatherContent}>
                    <div className={style.content}>
                        <p className={style.feels_like} >Sensação térmica: {props.thermalSensation}</p>
                        <p className={style.humidity} >Humidade: {props.humidity}%</p>
                    </div>
                    <div className={style.content}>
                        <p className={style.pressure} >Pressão Atmosférica {props.pressure} hPa</p>
                        <p className={style.windSpeed} >Velocidade do vento: {props.wind}m/s</p>
                    </div>
                </div>
            </div>
        </div>

    )
}