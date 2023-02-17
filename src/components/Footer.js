import './footer.css';


export const Footer = () => {
    return (
     <footer>
        <p>GoFitness APP | Hack A Boss | Daniel Otero | Lucas Pélaez | 02/2023</p> 
        <ul className="footer-info-list">
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
                <ul className="contact-list-items">
                    <li><a src="#"></a></li>
                    <li><a src="#"></a></li>
                    <li><a src="#"></a></li>
                </ul>
            </li>
        </ul>
    </footer>
    )
}