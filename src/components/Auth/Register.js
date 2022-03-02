import { useState, useContext } from "react"

import UsersContext from "../../context/UsersContext"

export default function Register() {

    const ctxUser = useContext(UsersContext)

    const {
        registerUser
    } = ctxUser

    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    })

    console.log(registerUser);

    const handleChange = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        registerUser(data)
    }

    return (
        <>
            <form onSubmit={(evt) => { handleSubmit(evt) }}>
                <label>Nombre</label>
                <input
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={(evt) => { handleChange(evt) }}
                />
                <br />
                <label>Apellido</label>
                <input
                    name="lastname"
                    type="text"
                    value={data.lastname}
                    onChange={(evt) => { handleChange(evt) }}
                />
                <br />
                <label>Correo</label>
                <input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(evt) => { handleChange(evt) }}
                />
                <br />
                <label>Contraseña</label>
                <input
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <button type="submit">Crear usuario</button>
            </form>
        </>
    )
}
