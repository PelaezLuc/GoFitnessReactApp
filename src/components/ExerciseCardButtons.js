import { useContext } from 'react';
import './exerciseCard.css'
import { UserAuthContext } from '../context/UserAuthContext';

export const ExerciseCardButtons = () => {

    const { userAuth } = useContext(UserAuthContext);

    const edit = require ('../../src/edit-icon.png');
    const star = require ('../../src/bx-fav-icon.png');
    const heart = require ('../../src/bx-like-icon.png');

    return userAuth.userRole === 1 ? (
        <ul className="button-list">
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={edit} alt='' /></button>
            </li>
            {/*boton de eliminar*/}
        </ul>
    ) : (  
        <ul className="button-list">
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={star} alt='' /></button>
            </li>
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={heart} alt=''/></button>
            </li>
        </ul> 
    )
}












