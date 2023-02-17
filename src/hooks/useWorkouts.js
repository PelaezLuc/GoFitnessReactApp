import { getAllWorkoutsService } from "../services/services";
import { useState } from "react";
import { useEffect } from "react";

const useWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadWorkouts = async () => {
            try{
                setLoading(true);

                const data = await getAllWorkoutsService();

                setWorkouts(data);
                

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadWorkouts();
    }, []);
    return { workouts, loading, error };
};

export default useWorkouts;