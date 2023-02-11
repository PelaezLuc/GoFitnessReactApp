import { HeaderNav } from './HeaderNav'
import './headerNav.css'


export const Header = () => {
    return (
        <header>
            <h1>GoFitness<span class="font-family-app">APP</span></h1>
            <HeaderNav />
        </header>
    )
}