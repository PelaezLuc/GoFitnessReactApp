import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AddExerciseButton } from "../components/AddExerciseButton";
import { ExerciseCard } from "../components/ExerciseCard";
import { UserAuthContext } from "../context/UserAuthContext";
import "./exerciseListPage.css";
import "../components/header.css";
import { AddExerciseModal } from "../components/AddExerciseModal";
import useWorkouts from "../hooks/useWorkouts";
import { FiltersModal } from "../components/FiltersModal";

export const ExerciseListPage = () => {
  const [stateAddModal, setStateAddModal] = useState(false);

  const [value, setValue] = useState("");

  const [showFav, setShowFav] = useState(false);

  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const [filterType, setFilterType] = useState("");

  const [filterMuscleGroup, setFilterMuscleGroup] = useState("");

  const { userAuth } = useContext(UserAuthContext);

  const {
    workouts,
    loading,
    error,
    addWorkout,
    removeWorkout,
    setWorkoutLikes,
    editWorkout,
    setWorkoutFavs,
  } = useWorkouts({ value, showFav, filterType, filterMuscleGroup });

  const onChange = (e) => {
    setValue(e.target.value);
  };

  console.log(filterMuscleGroup);

  console.log(filterType);

  if (error) return <p>{error}</p>;

  return userAuth.token ? (
    <>
      <header className="excercise-header">
        <h1 className="logo-app">
          GoFit<span className="font-logo">APP</span>
        </h1>
      </header>
      <AddExerciseModal
        stateAddModal={stateAddModal}
        setStateAddModal={setStateAddModal}
        addWorkout={addWorkout}
      />
      <section id="exercise-list">
        <nav className="search-nav-container">
          <AddExerciseButton
            stateAddModal={stateAddModal}
            setStateAddModal={setStateAddModal}
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
              <button
                className="filter-btn"
                onClick={() => setShowFiltersModal(!showFiltersModal)}
              >
                + Filtros
              </button>
            </li>
          </ul>
          {userAuth.userRole === 0 ? (
            <button onClick={() => setShowFav(!showFav)}>
              Toggle favorites
            </button>
          ) : null}
        </nav>
        <FiltersModal
          showFiltersModal={showFiltersModal}
          setShowFiltersModal={setShowFiltersModal}
          filterType={filterType}
          setFilterType={setFilterType}
          filterMuscleGroup={filterMuscleGroup}
          setFilterMuscleGroup={setFilterMuscleGroup}
        />
        <article className="card-container">
          <ul className="exercise-card-list">
            <ExerciseCard
              loading={loading}
              workouts={workouts}
              removeWorkout={removeWorkout}
              setWorkoutLikes={setWorkoutLikes}
              editWorkout={editWorkout}
              setWorkoutFavs={setWorkoutFavs}
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
