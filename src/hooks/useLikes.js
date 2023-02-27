import { getAllLikesService } from "../services/services";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const useLikes = () => {

    const { userAuth } = useContext(UserAuthContext);
    const token = userAuth.token;

    const [likes, setLikes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadLikes = async () => {
            try{
                setLoading(true);

                const data = await getAllLikesService({ token });

                setLikes(data);
                

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadLikes();
    }, [token, setLikes]);
    
    const addLike = (like) => {
        setLikes([like, ...likes]);
    }

    return { likes, loading, error, addLike };
};

export default useLikes;