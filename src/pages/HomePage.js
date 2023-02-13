import './homePage.css'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <>
        <Header />
        <section id="landing">
            <article class="landing-div">
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
        </section>
        </>
    )
}