import { ExerciseCardButtons } from "./ExerciseCardButtons"

export const Exercise = ({ workout }) => {
    //const video = require ("../../src/video-icon.png");
    return (
        <ul className="exercise-data-list">
            <li className="data-list-item"><h2>{workout.name}</h2></li>
            <li className="data-list-item"><h3>{workout.type}</h3></li>
            <li className="data-list-item"><h3>{workout.description}</h3></li>
            <li className="data-list-item"><h3>{workout.muscle_group}</h3></li>
            <li className="data-list-item"><h3>{workout.photo}</h3></li>
            <ExerciseCardButtons />
        </ul>
    )
}