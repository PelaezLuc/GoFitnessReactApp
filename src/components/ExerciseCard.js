import './exerciseCard.css'
import useWorkouts from "../hooks/useWorkout";
import { Exercise } from "./Exercise";

export const ExerciseCard = () => {
    const {workouts, loading, error} = useWorkouts();

    if(loading) return <p>Cargando Workouts...</p>;
    if(error) return <p>{error}</p>

    
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