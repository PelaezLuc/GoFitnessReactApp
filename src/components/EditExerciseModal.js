import { useContext, useState } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import { editWorkoutService } from "../services/services";

export const EditExerciseModal = ({
  workout,
  stateEditModal,
  setStateEditModal,
  editWorkout,
}) => {
  const { userAuth } = useContext(UserAuthContext);
  const token = userAuth.token;
  const idWorkout = workout.id;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [muscle_group, setMuscleGroup] = useState("");
  const [video, setVideo] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const editedWorkout = await editWorkoutService({
        idWorkout,
        name,
        type,
        description,
        muscle_group,
        token,
      });

      editWorkout({ idWorkout, editedWorkout });

      setStateEditModal(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {stateEditModal && (
        <div className="overlay-modal">
          <div className="contenedor-modal">
            <div className="header-modal">
              <h2 className="titulo-modal">EDITAR EJERCICIO</h2>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => setStateEditModal(false)}
            >
              <svg
                className="x-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <form onSubmit={handleForm}>
              <label htmlFor="name"></label>
              <input
                className="controls"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="type"></label>
              <input
                className="controls"
                type="text"
                name="type"
                id="type"
                placeholder="tipo (aerobico o anaerobico)"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="description"></label>
              <input
                className="controls"
                type="text"
                name="description"
                id="description"
                placeholder="Descripción"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="muscle-group"></label>
              <input
                className="controls"
                type="text"
                name="muscle-group"
                id="muscle-group"
                placeholder="Grupo muscular"
                onChange={(e) => setMuscleGroup(e.target.value)}
              />
              <label htmlFor="video"></label>
              <input
                className="controls"
                type="file"
                name="video"
                id="video"
                placeholder="Añadir vídeo"
                onChange={(e) => setVideo(e.target.value)}
              />
              <input className="btn" type="submit" value="Editar Ejercicio" />
              {error ? <p>{error}</p> : null}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
