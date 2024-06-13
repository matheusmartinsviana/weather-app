import React from 'react';
import style from './Styles/CardWeatherInfo.module.css'; // Assuming you have a CSS file for styling

export default function CardWeatherInfo(props) {
    function verifyDate() {
        const date = new Date(props.time);
        const currentDate = new Date();
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);

        const isToday = date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth();
        const isTomorrow = date.getDate() === tomorrowDate.getDate() && date.getMonth() === tomorrowDate.getMonth();

        return { isToday, isTomorrow };
    }

    const { isToday, isTomorrow } = verifyDate();

    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.cardHeader}>
                    <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt={props.description} />
                    {isToday && <h3>Hoje {new Date(props.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>}
                    {isTomorrow && <h3>Amanhã {new Date(props.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>}
                </div>
                <div className={style.cardBody}>
                    <p>{props.description}</p>
                    <p>{props.temp}°C</p>
                </div>
            </div>
        </div>
    );
}
