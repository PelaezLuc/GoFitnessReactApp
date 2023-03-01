import './homePage.css'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const HomePage = () => {
    return (
        <>
        <Header />
        <section id="landing">
            <article className="landing-div">
                <h3>Training App</h3>

                <p>Crea y analiza tus experiencias de entrenamiento</p>

                <div className='btn-container'>
                    <Link to={'/login'}>
                        <button className="landing-button">Login</button>
                    </Link>
                    <Link to={'/register'}>
                        <button className="landing-button">Registro</button>
                    </Link>
                </div>
            </article>
        <footer>
        <footer>
        <p>GoFitness APP | 2023 | Daniel Otero - Lucas Peláez | Hack A Boss</p>
        <ul class="footer-info-list">
            <li>
                <h3>Enlaces de interés: </h3>
                <li><a src="#">Daniel Otero</a></li>
                <li><a src="#">Lucas Peláez</a></li>
            </li>
            <li>
                <h3>Trabaja con nosotros: </h3>
                <p>HACK A BOSS</p>
            </li>
            <li>
                <h3>Contacto: </h3>
                <ul class="contact-list-items">
                    <li><a src="#"></a></li>
                    <li><a src="#"></a></li>
                    <li><a src="#"></a></li>
                </ul>
            </li>
        </ul>
    </footer>
        </footer>
        </section>
        </>
    )
}