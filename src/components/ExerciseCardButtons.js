export const ExerciseCardButtons = () => {
    const edit = require ('../../src/edit-icon.png');
    const star = require ('../../src/bx-fav-icon.png');
    const heart = require ('../../src/bx-like-icon.png');
    return (
        <ul className="button-list">
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={edit} alt='' /></button>
            </li>
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={star} alt='' /></button>
            </li>
            <li className="card-btn-container">
                <button className="card-button"><img className="card-button-icon" src={heart} alt=''/></button>
            </li>
        </ul>
    )
}












