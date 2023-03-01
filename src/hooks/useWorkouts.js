import { getWorkoutsService } from "../services/services";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const useWorkouts = ({ value }) => {
  const { userAuth } = useContext(UserAuthContext);
  const token = userAuth.token;

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);

        const data = await getWorkoutsService({ token, value });

        setWorkouts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, [token, setWorkouts, value]);

  const addWorkout = (workout) => {
    setWorkouts([workout, ...workouts]);
  };

  const removeWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  //const editWorkout

  const setWorkoutLikes = ({ workoutId, likes, mode }) => {
    setWorkouts(
      workouts.map((workout) => {
        if (workout.id === workoutId) {
          workout.likes = likes;
          workout.userLike = mode ? 1 : 0;
        }

        return workout;
      })
    );
  };

  return {
    workouts,
    loading,
    error,
    addWorkout,
    removeWorkout,
    setWorkoutLikes,
  };
};

export default useWorkouts;
