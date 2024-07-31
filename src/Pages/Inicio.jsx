import AboutSection from "../Components/Inicio/AboutSection"
import Weather from "../Components/Weather/Weather"
import style from "./Styles/Inicio.module.css"

export default function Inicio() {
    return (
            <div className={style.container}>
                <Weather />
                <AboutSection />
            </div>
    )
}