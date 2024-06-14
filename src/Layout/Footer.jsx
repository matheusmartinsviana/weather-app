import React from "react";
import icon from "../assets/img/pngegg.png";
import style from "./Styles/Footer.module.css";
export default function Footer() {
    return (
        <footer>
            <div className={style.brand}>
                <img src={icon} alt="Weather Logo" height={100} width={100}/>
            </div>
            <section className={style.siteMapLinks}>
                <h2>Links Úteis</h2>
                <ul>
                    <li><a className={style.link} href="/">Início</a></li>
                    <li><a className={style.link} href="https://github.com/matheusmartinsviana/weather-app.git">Codígo Fonte</a></li>
                </ul>
            </section>
        </footer>
    )
}