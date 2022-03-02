import { useReducer } from "react";

import UsersReducer from "./UsersReducer";
import UsersContext from "./UsersContext";
import axiosClient from "../config/axios";

const UsersState = (props) => {

    const initialState = {
        currentUser: {
            name: '',
            lastname: '',
            email: ''
        },
        authStatus: false
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    const registerUser = async (form) => {

        const res = await axiosClient.post('/api/users/create', form);

        const token = res.data.data

        dispatch({
            type: 'REGISTRO_EXITOSO',
            payload: token
        })

    }

    const verifyingToken = async () => {

        const token = localStorage.getItem('token')

        if(!token) {
            return delete axiosClient.defaults.headers.common['x-auth-token']
        }

        // Adjunto el token a la siguiente petición de axios
        axiosClient.defaults.headers.common['x-auth-token'] = token

        const res = await axiosClient.get('/api/users/verifytoken')

        const userData = res.data.data

        dispatch({
            type: 'VERIFICAR_TOKEN',
            payload: userData
        })

    }

    const loginUser = async (form) => {

        const res = await axiosClient.post('/api/users/login', form);

        const token = res.data.data

        dispatch({
            type: 'LOGIN_EXITOSO',
            payload: token
        })
    }

    const logoutUser = async () => {

        dispatch({
            type: 'CERRAR_SESION'
        })

    }

    return (
        <UsersContext.Provider
            value={{
                authStatus: globalState.authStatus,
                currentUser: globalState.currentUser,
                registerUser,
                verifyingToken,
                loginUser,
                logoutUser
            }}
        >
            { props.children }
        </UsersContext.Provider>
    )

}

export default UsersState
