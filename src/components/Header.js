import { HeaderNav } from './HeaderNav'
import './header.css'


export const Header = () => {
    return (
        <header>
            <h1 className='logo-app'>GoFitness<span class="font-family-app">APP</span></h1>
            <HeaderNav />
        </header>
    )
}