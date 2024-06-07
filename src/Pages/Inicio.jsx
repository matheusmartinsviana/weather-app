import style from "./Styles/Inicio.module.css"
import icon from "../assets/img/pngegg.png"
import React, { useEffect, useState } from "react";

export default function Inicio() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat, long])
    
    return (
        <div className={style.container}>
            <section>
                <img src={icon} alt="Weather Icon" width={200} height={200} />
            </section>
        </div>
    )
}