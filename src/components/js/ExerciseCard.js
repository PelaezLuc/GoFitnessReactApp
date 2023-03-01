import "./exerciseCard.css";
//import useWorkouts from "../hooks/useWorkouts";
import { Exercise } from "./Exercise";

export const ExerciseCard = ({
  workouts,
  likes,
  addLike,
  removeWorkout,
  setWorkoutLikes,
  loading,
}) => {
  if (loading) return <p>Cargando Workouts...</p>;
  return workouts.length ? (
    <>
      {workouts.map((workout) => (
        <li key={workout.id} className="exercise-card">
          <Exercise
            workout={workout}
            likes={likes}
            addLike={addLike}
            removeWorkout={removeWorkout}
            setWorkoutLikes={setWorkoutLikes}
          />
        </li>
      ))}
    </>
  ) : (
    <p>No hay ningún ejercicio aún</p>
  );
};
