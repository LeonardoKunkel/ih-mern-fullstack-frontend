import { useContext, useState } from 'react'
import UsersContext from "../../context/UsersContext";

export default function Login() {

    const ctxUser = useContext(UsersContext);

    const {
        loginUser
    } = ctxUser

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        loginUser(data)
    }

    return (
        <>

            <form onSubmit={(evt) => { handleSubmit(evt) }}>

                <label> Correo </label>
                <input type="email" name="email" value={data.emial} onChange={(evt) => { handleChange(evt) }} />

                <label> Contraseña </label>
                <input type="password" name="password" value={data.password} onChange={(evt) => { handleChange(evt) }} />

                <button type="submit"> Iniciar Sesión </button>

            </form>

        </>
    )
}
