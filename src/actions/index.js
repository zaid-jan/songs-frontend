import axios from 'axios'

export const getSimilarSongs = (str) => {
    return function(dispatch) {
        axios.get('http://localhost:8000/getSongs')
            .then(data => dispatch({
                type : 'GET_SONGS',
                payload: data,
            }))
            .catch(err => console.log(err))
    }
}