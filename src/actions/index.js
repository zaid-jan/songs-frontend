import axios from 'axios'

export const getSimilarSongs = (str) => {
    return function(dispatch) {
        axios.get('http://localhost:8000/getSongs')
            .then(res => {
                console.log("sent request", res.data);
                dispatch({
                    type : 'GET_SONGS',
                    payload: res.data,
                })
            })
            .catch(err => console.log(err))
    }
}