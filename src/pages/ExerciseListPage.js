import { ExerciseCard } from "../components/ExerciseCard";
import { Header } from "../components/Header";
import "./exerciseListPage.css";

export const ExerciseListPage = () => {
    return (
        <section id="exercise-list">
            <Header />
            <aside>
                FILTROS Y DEMÁS
            </aside>
            <article>
                <button>+ Añadir ejercicio</button>
                <ul>
                    <ExerciseCard />
                </ul>
            </article>
           
        </section>
    )
}