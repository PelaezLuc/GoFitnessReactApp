import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AddExerciseButton } from "../components/AddExerciseButton";
import { ExerciseCard } from "../components/ExerciseCard";
import { UserAuthContext } from "../context/UserAuthContext";
import "./exerciseListPage.css";
import "../components/header.css";
import { AddExerciseModal } from "../components/AddExerciseModal";
import useWorkouts from "../hooks/useWorkouts";
import useLikes from "../hooks/useLikes";
import { Footer } from "../components/Footer";

export const ExerciseListPage = () => {
  const [stateModal, setStateModal] = useState(false);

  const [value, setValue] = useState("");

  const { userAuth } = useContext(UserAuthContext);

  const {
    workouts,
    loading,
    error,
    addWorkout,
    removeWorkout,
    setWorkoutLikes,
  } = useWorkouts({ value });

  const { likes, addLike } = useLikes;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  if (error) return <p>{error}</p>;


  return userAuth.token ? (
    <>
      <header className="excercise-header">
        <h1 className="logo-app">
          GoFit<span className="font-logo">APP</span>
        </h1>
      </header>
      <AddExerciseModal
        stateModal={stateModal}
        setStateModal={setStateModal}
        addWorkout={addWorkout}
      />
      <section id="exercise-list">
        <nav className="search-nav-container">
          <AddExerciseButton
            stateModal={stateModal}
            setStateModal={setStateModal}
          />
          <ul className="search-container">
            <li className="filter-menu-item">
              <span>🔎 </span>
              <input
                type="search"
                className="search-input"
                placeholder="Buscar"
                value={value}
                autoFocus
                onChange={onChange}
              />
            </li>
            <span className="item-slash"></span>
            <li className="filter-menu-item">
              <button className="filter-btn">+ Filtros</button>
            </li>
          </ul>
        </nav>
        <article className="card-container">
          <ul className="exercise-card-list">
            <ExerciseCard
              loading={loading}
              workouts={workouts}
              likes={likes}
              addLike={addLike}
              removeWorkout={removeWorkout}
              setWorkoutLikes={setWorkoutLikes}
            />
          </ul>
        </article>
      </section>
      <footer className="exercisePage-footer">
        <p>
          GoFitness APP | Hack A Boss | Daniel Otero | Lucas Pélaez | 02/2023
        </p>
      </footer>
    </>
  ) : (
    <>
      <header className="excercise-header">
        <h1 className="logo-app">
          GoFit<span className="font-logo">APP</span>
        </h1>
      </header>
      <section className="no-log-section">
        <p>Para poder ver la lista de ejercicios tienes que iniciar sesión</p>
        <Link to={"/login"}>Inicia Sesión</Link>
      </section>
    </>
  );
};

