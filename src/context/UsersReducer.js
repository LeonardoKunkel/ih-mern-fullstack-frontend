
const reducer = (globalState, action) => {

    switch (action.type) {
        case 'REGISTRO_EXITOSO':

            localStorage.setItem('token', action.payload)

            return {
                ...globalState,
                authStatus: true
            }
            break;
    
        case 'VERIFICAR_TOKEN':
            return {
                ...globalState,
                currentUser: action.payload,
                authStatus: true
            }
            break;
            
        default:
            return globalState
            break;
    }

}

export default reducer
