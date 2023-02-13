import { Link } from "react-router-dom"

export const HeaderNav = () => {
    return (
        <ul class="nav-list">
            <Link to={'/login'}>
                <li class="nav-list-item">Login</li>
            </Link>
            <Link to={'/register'}>
                <li class="nav-list-item">Register</li>
            </Link>
        </ul>
    )
}

//función para que cuando haya que mostrar el login o register se muestre correctamente

// {isAuth = 0 && 
//   <ul class="nav-list">
//      <li class="nav-list-item">Login</li>
//      <li class="nav-list-item">Register</li>
//   </ul>
// }


