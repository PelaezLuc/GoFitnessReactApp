import './form.css';

export const LoginPage = () => {
    return (
        <section class="form-register">
            <h2>GoFitness<span class="font-family-app">APP</span></h2>    
                <h4>Inicia Sesión</h4>
            <form action="">
                <input class="controls" type="text" name="apellido" id="apellido" placeholder="Apellido"/>
                <label for="email"></label>
                <input class="controls" type="email" name="email" id="email" placeholder="Email"/>
                <label for="password"></label>
                <input class="controls" type="password" name="password" id="password" placeholder="Contraseña"/>
                <p><a href="#">¿Olvidaste tu contraseña?</a></p>
                <input class="btn" type="submit" value="Registrar"/>
            </form>
        </section>
    )
}