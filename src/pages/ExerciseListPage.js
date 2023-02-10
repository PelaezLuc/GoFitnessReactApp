import { ExerciseCard } from "../components/ExerciseCard"

export const ExerciseListPage = () => {
    return (
        <section id="exercise-list">
            <article>
                <button>+ Añadir ejercicio</button>
                <ExerciseCard />
            </article>
           
        </section>
    )
}