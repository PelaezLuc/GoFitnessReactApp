import { ExerciseCardButtons } from "./ExerciseCardButtons"
import './exerciseCard.css'

export const ExerciseCard = () => {
    return (
        <>
        <li className="card">
            <h2>nombre</h2>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum ipsa magnam blanditiis neque incidunt consequuntur sed tempora necessitatibus ex, beatae eum facere quae id possimus inventore a veniam aperiam!</p>
            <ExerciseCardButtons />
        </li>
        <li className="card">
                <h2>nombre</h2>
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum ipsa magnam blanditiis neque incidunt consequuntur sed tempora necessitatibus ex, beatae eum facere quae id possimus inventore a veniam aperiam!</p>
                <ExerciseCardButtons />
        </li>
        <li className="card">
            <h2>nombre</h2>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum ipsa magnam blanditiis neque incidunt consequuntur sed tempora necessitatibus ex, beatae eum facere quae id possimus inventore a veniam aperiam!</p>
            <ExerciseCardButtons />
        </li>
        
        </>
    )
}