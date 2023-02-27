import { useContext} from 'react';
import { UserAuthContext } from '../context/UserAuthContext';
import useLikes from '../hooks/useLikes';
//import { dislikeWorkoutService, likeWorkoutService } from '../services/services';

export const ExerciseCardButtons = ( { workout } ) => {

    const { userAuth } = useContext(UserAuthContext);

    const edit = require ('../../src/edit-icon.png');
    const star = require ('../../src/bx-fav-icon.png');
    const heart = require ('../../src/bx-like-icon.png');


    const HandleClick = () => {
        useLikes({workout});
    }
    
    

    return userAuth.userRole === 1 ? (
        <ul className="button-list">
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={edit} alt='' /></button>
            </li>
            {/*boton de eliminar*/}
            <li className="card-btn-container">
                <button className="card-button">{workout.likes}<img className="card-button-icon" src={heart} alt=''/></button>
            </li>
        </ul>
    ) : (  
        <ul className="button-list">
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={star} alt='' /></button>
            </li>
            <li className="card-btn-container">
                <button className="card-button" onClick={HandleClick}>{workout.likes}<img className="card-button-icon" src={heart} alt=''/></button>
                {/* {error ? <p>{error}</p> : null} */}
            </li>
        </ul> 
    )
}












