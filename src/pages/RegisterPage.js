import './form.css';

export const RegisterPage = () => {
    return (
        <section class="form-register">
            <form action="">
                <h4>Regístrate</h4>
                <label for="nombre"></label>
                <input class="controls" type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                <label for="apellido"></label>
                <input class="controls" type="text" name="apellido" id="apellido" placeholder="Apellido"/>
                <label for="email"></label>
                <input class="controls" type="email" name="email" id="email" placeholder="Email"/>
                <label for="password"></label>
                <input class="controls" type="password" name="password" id="password" placeholder="Contraseña"/>
                <p><a href="#">¿Ya tienes una cuenta?</a></p>
                <input class="btn" type="submit" value="Registrar"/>
            </form>
        </section>
    )
}