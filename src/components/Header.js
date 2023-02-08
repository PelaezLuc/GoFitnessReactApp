import { Auth } from "./Auth"

export const Header = () => {
    return (
        <header>
            <span>GoFitness #</span>
            <nav>
                <Auth />
            </nav>
        </header>
    )
}