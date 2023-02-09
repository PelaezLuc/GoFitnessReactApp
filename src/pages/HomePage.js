import './homePage.css'

export const HomePage = () => {
    return (
        <section id="landing">
            <article class="landing-div">
                <h1>GoFitness</h1>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit eius ad corrupti accusamus necessitatibus maiores ab facilis aspernatur provident consectetur
                dolore,
                unde eos nesciunt minima eaque reprehenderit nulla expedita quaerat.</p>

                <div className='btn-container'>
                    <button className="landing-button">Login</button>

                    <button className="landing-button">Registro</button>
                </div>
            </article>
        </section>
    )
}