const reducer = (globalState, action) => {

    switch (action.type) {
        case 'GET_PETS':
            return {
                ...globalState,
                pets: action.payload
            }
            break;
    
        default:
            return globalState
            break;
    }

}

export default reducer;
