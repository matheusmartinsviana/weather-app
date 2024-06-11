import style from "./Styles/Inicio.module.css"
import Weather from "../Components/Weather"
import WeatherInfo from "../Components/WeatherInfo"

export default function Inicio() {

    return (
        <div className={style.container}>
            <Weather />
        </div>
    )
}