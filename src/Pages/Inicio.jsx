import style from "./Styles/Inicio.module.css"
import Weather from "../Components/Weather"

export default function Inicio() {

    return (
        <div className={style.container}>
            <Weather />
            <div className={style.aboutContainer}>
                <section className={style.aboutContent}>
                    <h2>Sobre o weather App</h2>
                    <p>Este aplicativo tem o objetivo de informar o clima da região desejada, e trazer informações adicionais sobre clima.</p>
                </section>
            </div>
        </div>
    )
}