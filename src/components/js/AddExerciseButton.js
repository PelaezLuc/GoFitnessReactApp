import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

export const AddExerciseButton = ({ stateModal, setStateModal }) => {

    const { userAuth } = useContext(UserAuthContext);

    return userAuth.userRole === 1 ? (
        <button className="add-exercise-btn" onClick={() => setStateModal(!stateModal)}>+ Añadir ejercicio</button>
    ) : null
}