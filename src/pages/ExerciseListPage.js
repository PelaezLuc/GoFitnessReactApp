import { useContext } from "react";
//import { Navigate } from "react-router";
import { ExerciseCard } from "../components/ExerciseCard";
import { AuthContext } from "../context/AuthContext";
import "./exerciseListPage.css";

export const ExerciseListPage = () => {

    const { token } = useContext(AuthContext);

    console.log(token);

        return ( 
            <>
            <header className="excercise-header">
                <h1 className='logo-app'>GoFit<span className="font-logo">APP</span></h1>
            </header>
            <section id="exercise-list">
                <nav className="search-nav-container">
                    <button className="add-exercise-btn">+ Añadir ejercicio</button>
                    <ul className="search-container">
                        <li className="filter-menu-item"> 
                            <span>🔎 </span>
                            <input type="search" className="search-input" placeholder="Buscar" />
                        </li>
                        <span className="item-slash"></span>
                        <li className="filter-menu-item">
                            <button className="filter-btn">+ Filtros</button>
                        </li>
                    </ul>
                </nav>
                <article className="card-container">
                    <ul className="exercise-card-list">
                        <ExerciseCard />
                    </ul>
                </article>
            </section>
            <footer className="exercisePage-footer">
                <p>GoFitness APP | Hack A Boss | Daniel Otero | Lucas Pélaez | 02/2023</p>
            </footer>
            </>
        )
}
