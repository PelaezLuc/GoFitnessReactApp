import { useContext } from 'react';
import { UserAuthContext } from '../context/UserAuthContext';
//import useLikes from '../hooks/useLikes';
import { deleteWorkoutService, dislikeWorkoutService, likeWorkoutService } from '../services/services';

export const ExerciseCardButtons = ( { workout, likes, addLike, removeWorkout } ) => {

    const { userAuth } = useContext(UserAuthContext);
    const token = userAuth.token;
    const id = workout.id;

    const edit = require ('../../src/edit-icon.png');
    const star = require ('../../src/bx-fav-icon.png');
    const heart = require ('../../src/bx-like-icon.png');
    const quit = require ('../../src/bx-del-icon.png');

    const HandleDeleteWorkoutClick = async () => {

        try{

            console.log(id);

            await deleteWorkoutService({id, token});

            removeWorkout(id);

        }catch(error){
            console.log(error);
        }
    }


    const HandleLikeClick = async () => {

        try {
            await likeWorkoutService({id, token});
            window.location.reload();
            
        } catch (error) {
            if (error.message === 'Ya le has dado a like a este ejercicio anteriormente!'){
                await dislikeWorkoutService({ id, token });
                window.location.reload();
            }
        }
    }
    
    

    return userAuth.userRole === 1 ? (
        <ul className="button-list">
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={edit} alt='' /></button>
            </li>
            <li className="card-btn-container">
                <button className="card-button" onClick={HandleDeleteWorkoutClick}><img className="card-button-icon" src={quit} alt='' /></button>
            </li>
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
                <button className="card-button" onClick={HandleLikeClick}>{workout.likes}<img className="card-button-icon" src={heart} alt=''/></button>
                {/* {error ? <p>{error}</p> : null} */}
            </li>
        </ul>  
    )
}












