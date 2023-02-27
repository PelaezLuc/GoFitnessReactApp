import './form.css';
import {Link, useNavigate} from 'react-router-dom';
import { Footer } from '../components/Footer';
import { registerUserService } from '../services/services';
import { useState } from 'react';


export const RegisterPage = () => {
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await registerUserService({name, email, password});

            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <>
        <section className="form-register">
             <Link to={"/"}><h2>GoFit<span className="font-family-app">APP</span></h2>    
               </Link>  
                <h4>Regístrate</h4>
            <form onSubmit={handleForm}>
                <label htmlFor="name"></label>
                <input 
                    className="controls" 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Nombre de Usuario" 
                    required 
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email"></label>
                <input 
                    className="controls" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password"></label>
                <input 
                    className="controls" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Contraseña" 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to='/login'>¿Ya tienes una cuenta?</Link>
                <input className="btn" type="submit" value="Registrar"/>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
        <Footer />
        </>
    )
}