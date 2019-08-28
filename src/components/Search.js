import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSimilarSongs } from '../actions/'

export class Search extends Component {
    constructor(){
        super();
        this.state = {
            qString: ""
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        getSimilarSongs(this.state.qString);
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                <div className="container">
                <br />
                <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card card-sm">
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                        <i className="fas fa-search h4 text-body" />
                        </div>
                        {/*end of col*/}
                        <div className="col">
                        <input className="form-control form-control-lg form-control-borderless" onChange={this.handleChange} type="search" placeholder="Search That Good Shit" />
                        </div>
                        {/*end of col*/}
                        <div className="col-auto">
                        <button className="btn btn-lg btn-success" onCLick={this.handleClick} type="submit">Search</button>
                        </div>
                        {/*end of col*/}
                    </div>
                    </form>
                </div>
                {/*end of col*/}
                </div>
            </div>
            </div>
        )
    }
}

export default connect(null , { getSimilarSongs })(Search)
