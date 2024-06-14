import React from "react"
import style from "./Styles/AboutSection.module.css"
import openWeatherLogo from "../../assets/img/open-weather-logo.png"
import weatherApp from "../../assets/img/pngegg.png"

export default function About() {

    return (
        <div className={style.container}>
            <section>
                <div className={style.sectionHeader}>
                    <h1>Sobre o weather app</h1>
                    <img src={weatherApp} alt="Weather App" height={80} width={80} />
                </div>
                <p>O weather app é um exemplo de website utilizando react e conceitos de back-end como integrações com
                    APIs, exclusivamente com o <a href="https://openweathermap.org/api" target="_blank">Open Weather API</a> que
                    fornece uma versão gratuita com diversas informações de alguma região desejada.</p>
            </section>
            <section>
                <div className={style.sectionHeader}>
                    <h1>Open Weather API</h1>
                    <img src={openWeatherLogo} alt="Open Weather Logo" height={80} width={80} />
                </div>
                <p>Previsões meteorológicas, nowcasts e histórico de forma rápida e elegante</p>
            </section>
        </div>
    )
}