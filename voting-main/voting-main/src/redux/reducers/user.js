const user = (state = {}, { type, payload }) => {
    switch (type) {
        case 'USER_LOGIN':
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }

}

export default user;