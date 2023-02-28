import { getAllLikesService } from "../services/services";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const useLikes = () => {

    const { userAuth } = useContext(UserAuthContext);
    const token = userAuth.token;

    const [likes, setLikes] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadLikes = async () => {
            try{

                const data = await getAllLikesService({ token });

                setLikes(data);
                
            } catch (error) {
                setError(error.message);
            }
        };

        loadLikes();
    }, [token, setLikes]);
    
    const addLike = (like) => {
        setLikes([like, ...likes]);
    }

    return { likes, addLike };
};

export default useLikes;