import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { UserAuthContext } from '../context/UserAuthContext';
import { loginUserService } from '../services/services';
import './form.css';


export const LoginPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {setUserAuth} = useContext(UserAuthContext);
    

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        
        try {
            
            const data = await loginUserService({email, password});

            setUserAuth(data);

            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <section className="form-register">
            <h2>GoFit<span className="font-family-app">APP</span></h2>    
                
               <h4>Inicia Sesión</h4>
            <form onSubmit={handleForm}>
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
                <input className="btn" type="submit" value="Iniciar Sesión"/>
                <p>Aún no estas registrado?</p>
                <Link to={'/register'}>Registrate!</Link>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
        <Footer /> 
        </>
    )
}