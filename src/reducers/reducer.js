const initialState = {
    songs : [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_SONGS':
            return {
                ...state,
                songs: action.payload,
            }
        default: return state;
    }
}