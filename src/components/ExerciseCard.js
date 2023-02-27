import './exerciseCard.css'
//import useWorkouts from "../hooks/useWorkouts";
import { Exercise } from "./Exercise";

export const ExerciseCard = ({workouts}) => {
    

    
    return workouts.length ? (
        <>
            {workouts.map((workout) => (
                <li key={workout.id} className="exercise-card">
                    <Exercise workout={workout} />
                </li>
            ))}
        </>
        ) : ( <p>No hay ningún ejercicio aún</p> ) 
}
 