import React from "react";
import style from "./Styles/CardWeather.module.css";
import icon from "../assets/img/pngegg.png"

export default function CardWeather(props) {
    return (
        <div className={style.weatherCard}>
            <img src={icon} alt="Logo Weather" height={200} width={200} />
            <div className={style.weatherCardContent}>
                <div className={style.CardHeader}>
                    <h2>{props.name}, {props.country}</h2>
                    <div className={style.weatherDescription}>
                        <p>{props.temp}°C</p>
                        <p className={style.description}> {props.description} </p>
                    </div>
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