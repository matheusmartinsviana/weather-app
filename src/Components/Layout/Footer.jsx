import React from "react";
import style from "./Styles/Footer.module.css"

export default function Footer() {
    return (
        <footer>
            <div className={style.brand}>
                <img src="#" alt="Weather Logo" height={100} width={100}/>
            </div>
            <section className={style.siteMapLinks}>
                <h2>Mapa do Site</h2>
                <ul>
                    <li><a className={style.link} href="#">Início</a></li>
                </ul>
                <ul>
                    <li><a className={style.link} href="#">Sobre</a></li>
                </ul>
                <ul>
                    <li><a className={style.link} href="#">Clima</a></li>
                </ul>
                <ul>
                    <li><a className={style.link} href="#">Patrocinador</a></li>
                </ul>
            </section>
        </footer>
    )
}