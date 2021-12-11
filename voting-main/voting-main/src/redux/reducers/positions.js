const positions = (state = [], { type, payload }) => {
    switch (type) {
        case 'GET_ALL_POSITIONS':
            return payload;
        default:
            return state
    }

}

export default positions;