import { getAllWorkoutsService } from "../services/services";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const useWorkouts = () => {

    const { userAuth } = useContext(UserAuthContext);
    const token = userAuth.token;

    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadWorkouts = async () => {
            try{
                setLoading(true);

                const data = await getAllWorkoutsService({ token });

                setWorkouts(data);
                

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadWorkouts();
    }, [token]);
    
    return { workouts, loading, error };
};

export default useWorkouts;