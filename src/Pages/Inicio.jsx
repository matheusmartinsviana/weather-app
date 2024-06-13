import style from "./Styles/Inicio.module.css"
import Weather from "../Components/Weather/Weather"
import Forms from "../Components/Forms"

export default function Inicio() {

    return (
        <div className={style.container}>
            <Weather />
            <Forms />
        </div>
    )
}