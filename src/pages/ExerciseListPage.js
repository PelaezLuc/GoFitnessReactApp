import { ExerciseCard } from "../components/ExerciseCard";
import { Header } from "../components/Header";
import "./exerciseListPage.css";

export const ExerciseListPage = () => {
    return (
        <>
        <Header />
        <section id="exercise-list">
            
            <aside className="filters">
                FILTROS Y DEMÁS
            </aside>
            <article className="card-container">
                <button className="btn-add-exercise">+ Añadir ejercicio</button>
                <ul className="exercise-list">
                    <ExerciseCard />
                </ul>
            </article>
           
        </section>
        </>
    )
}