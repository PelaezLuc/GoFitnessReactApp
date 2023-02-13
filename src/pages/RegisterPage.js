import './form.css';
import {Link} from 'react-router-dom';

export const RegisterPage = () => {;
    return (
        <section class="form-register">
             <h2>GoFitness<span class="font-family-app">APP</span></h2>    
                <h4>Regístrate</h4>
            <form action="">
                <label for="nombre"></label>
                <input class="controls" type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                <label for="apellido"></label>
                <input class="controls" type="text" name="apellido" id="apellido" placeholder="Apellido"/>
                <label for="email"></label>
                <input class="controls" type="email" name="email" id="email" placeholder="Email"/>
                <label for="password"></label>
                <input class="controls" type="password" name="password" id="password" placeholder="Contraseña"/>
                <Link to='/login'>¿Ya tienes una cuenta?</Link>
                <input class="btn" type="submit" value="Registrar"/>
            </form>
        </section>
    )
}