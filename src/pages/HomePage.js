import './homePage.css'
import '../components/headerNav.css'

export const HomePage = () => {
    return (
        <><header>
            <h1>GoFitnesS<span class="font-family-app">APP</span></h1>
            <nav>
                <ul class="nav-list">
                    <li class="nav-list-item">Login</li>
                    <li class="nav-list-item">Register</li>
                </ul>
            </nav>
        </header><section id="landing">
                <article class="landing-div">
                    <h3>Training App</h3>

                    <p>Crea y analiza tus experiencias de entrenamiento</p>

                    <div className='btn-container'>
                        <button className="landing-button">Login</button>

                        <button className="landing-button">Registro</button>
                    </div>
                </article>
            </section></>
    )
}