import style from './Styles/Header.module.css';
import cloudEmoji from '../assets/img/cloud.png'

function Header() {
    return (
        <nav className={style.navContainer}>
            <p>Veja o clima da sua cidade</p>
            <img src={cloudEmoji} alt="Cloud emoji by google" height={40} width={40} />
        </nav>
    );
}

export default Header;