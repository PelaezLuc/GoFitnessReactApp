import "./exerciseCard.css";
//import useWorkouts from "../hooks/useWorkouts";
import { Exercise } from "./Exercise";

export const ExerciseCard = ({
  workouts,
  removeWorkout,
  setWorkoutLikes,
  editWorkout,
  setWorkoutFavs,
}) => {
  //if (loading) return <p>Cargando Workouts...</p>;
  return workouts.length ? (
    <>
      {workouts.map((workout) => (
        <li key={workout.id} className="exercise-card">
          <Exercise
            workout={workout}
            removeWorkout={removeWorkout}
            setWorkoutLikes={setWorkoutLikes}
            editWorkout={editWorkout}
            setWorkoutFavs={setWorkoutFavs}
          />
        </li>
      ))}
    </>
  ) : (
    <p>No hay ningún ejercicio aún</p>
  );
};
