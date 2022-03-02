import { useContext } from "react"
import UsersContext from "../../context/UsersContext"
import { Link } from 'react-router-dom'

export default function Header() {

    const ctxUser = useContext(UsersContext)

    const {
        currentUser,
        authStatus,
        logoutUser
    } = ctxUser

    return (
        <>
            <header>
                <figure> LOGO </figure>

                <nav>
                    <ul>
                        {
                            authStatus ?
                            (
                                <>
                                    <li>
                                        <Link to='/' onClick={() => { logoutUser() }}>
                                            Cerrar sesión
                                        </Link>
                                    </li>
                                </>
                            ):
                            (
                                <>
                                    <li>
                                        <Link to='/registro'>
                                            Crear cuenta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/login'>
                                            Iniciar sesión
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}
