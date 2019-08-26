import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Landing.css'


class Landing extends Component {
    constructor(){
        super()
        this.state = {
            pokeid: '',
            pokepic: '',
            pokename: ''
        }

    }

    handleClick = () => {
        const { pokeid } = this.state
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`)
        .then(res => {
            console.log(res.data)
            this.setState({
                pokepic: res.data.sprites.front_default,
                pokename: res.data.name.toUpperCase()
            })
        })
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            pokeid: value
        })
    }
    
    
    render(){
        // console.log(this.state.pokeid)
        const {pokepic, pokename} = this.state
        return(
            <main>
                <Link to='/house'>
                     Link
                </Link>
                
                <div className="inputContainer">
                    <h4 style={{margin:0}} >Enter pokeID</h4>
                    <input onChange={this.handleChange} style={{height:20, marginRight:5, marginLeft:5}}/>
                    <button onClick={this.handleClick} style={{height:20}}>Submit</button>
                </div>

                <div className="pokemonContainer">
                    <h3 style={{marginBottom:0}}>{pokename}</h3>
                    <img src={pokepic} />
                </div>
            </main>
        )
    }
}

export default Landing;