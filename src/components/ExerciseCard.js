import { ExerciseCardButtons } from "./ExerciseCardButtons"
import './exerciseCard.css'
import useWorkouts from "../hooks/useWorkouts";

export const ExerciseCard = () => {
    const {workouts, loading, error} = useWorkouts();

    if(loading) return <p>Cargando Workouts...</p>;
    if(error) return <p>{error}</p>

    console.log(workouts);

    const video = require ("../../src/video-icon.png");
    return (
        
        <li className="exercise-card">
            <ul className="exercise-data-list">
                <li className="data-list-item"><h2>Press Banca</h2></li>
                <li className="data-list-item"><h3>Pectoral</h3></li>
                <li className="data-list-item"><h3>Anaeróbico</h3></li>
                <li className="data-list-item"><h3>Duración</h3></li>
                <li className="data-list-item">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum ipsa magnam blanditiis neque incidunt consequuntur sed tempora necessitatibus ex, 
                beatae eum facere quae id possimus inventore a veniam aperiam!</p>
                </li>
                <li className="data-list-item"><button className="exercise-display-btn"><img className="card-button-icon" src={video}></img><p>Ver Ejemplo</p></button></li>
                <ExerciseCardButtons />
            </ul> 
        </li>
    )
}