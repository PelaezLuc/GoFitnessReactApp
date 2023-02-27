import { HeaderNav } from './HeaderNav'
import './header.css'


export const Header = () => {
    return (
        <header>
            <h1 className='logo-app'>GoFit<span className="font-family-app">APP</span></h1>
            <HeaderNav />
        </header>
    )
}