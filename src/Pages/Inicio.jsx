import style from "./Styles/Inicio.module.css"
import icon from "../assets/img/pngegg.png"
import Weather from "../Components/Weather"

export default function Inicio() {

    return (
        <div className={style.container}>
                <Weather />
        </div>
    )
}