import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Similar extends Component {    
    createListOfSongs = () => { 
        const songs = this.props.songs;
        let i = 0;
        const list =  songs.map(song => {
            i++;
            return <div key={i}>
                        <li>{song.name}</li>
                    </div>
        })
        console.log("list", list)
        return list;
    }

    render() {
        const list = this.createListOfSongs();
        return (
            <div>
                {list}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    songs: state.songsStore.data || [],
})

export default connect(mapStateToProps, null)(Similar)
