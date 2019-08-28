const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GET_SONGS':
            return {
                ...state,
                data: action.payload,
            }
        default: return state;
    }
}