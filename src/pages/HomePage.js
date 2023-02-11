import './homePage.css'
import { Header } from '../components/Header'

export const HomePage = () => {
    return (
        <>
        <Header />
        <section id="landing">
            <article class="landing-div">
                <h3>Training App</h3>

                <p>Crea y analiza tus experiencias de entrenamiento</p>

                <div className='btn-container'>
                    <button className="landing-button">Login</button>

                    <button className="landing-button">Registro</button>
                </div>
            </article>
        </section>
        </>
    )
}