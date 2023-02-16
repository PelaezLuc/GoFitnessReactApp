import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import './form.css';


export const LoginPage = () => {
    return (
        <>
        <section class="form-register">
            <Link to={"/"}><h2>GoFit<span class="font-family-app">APP</span></h2>    
               </Link> 
               <h4>Inicia Sesión</h4>
            <form action="">
                <label for="email"></label>
                <input class="controls" type="email" name="email" id="email" placeholder="Email"/>
                <label for="password"></label>
                <input class="controls" type="password" name="password" id="password" placeholder="Contraseña"/>
                <p><a href="#">¿Olvidaste tu contraseña?</a></p>
                <input class="btn" type="submit" value="Iniciar Sesión"/>
            </form>
        </section>
        <Footer /> 
        </>
    )
}