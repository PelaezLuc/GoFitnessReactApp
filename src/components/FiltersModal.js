import { useState } from "react";

export const FiltersModal = ({
  showFiltersModal,
  setShowFiltersModal,
  setFilterType,
  setFilterMuscleGroup,
}) => {
  const handleRebootFilter = () => {
    setFilterType("");
    setFilterMuscleGroup("");

    setShowFiltersModal(false);
  };

  return (
    <>
      {showFiltersModal && (
        <div className="overlay-modal">
          <div className="contenedor-modal">
            <div className="header-modal">
              <h2 className="titulo-modal">Filtros</h2>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => setShowFiltersModal(false)}
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
            <form>
              <select
                name="Type"
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option defaultValue={""}>Todos</option>
                <option value="Hipertrofia">Hipertrofia</option>
                <option value="Cardio">Cardio</option>
              </select>
              <label htmlFor="muscle-group"></label>
              <input
                className="controls"
                type="text"
                name="muscle-group"
                id="muscle-group"
                placeholder="Grupo muscular"
                onChange={(e) => setFilterMuscleGroup(e.target.value)}
              />
            </form>
            <button className="btn" onClick={handleRebootFilter}>
              Reiniciar Filtros
            </button>
          </div>
        </div>
      )}
    </>
  );
};
