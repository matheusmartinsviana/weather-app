import React from "react";
import style from "./Styles/Header.module.css"

export default function Header() {
    return (
        <header>
            <div className={style.brand}>
                <p>weather app</p>
            </div>
            <div className={style.headerLinks}>
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
            </div>
        </header>
    )
}