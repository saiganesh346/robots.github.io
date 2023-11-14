import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }    
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots:users}));
    }

    onsearchchange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { searchfield, robots } = this.state;
        const filteredrobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return !robots.length ?
      <h1>Loading</h1> :(
        <div className='tc'>
            <h1 className='f1'>Hello Robots</h1>
            <SearchBox searchchange={this.onsearchchange} />
            <Scroll>
                <CardList robots={filteredrobots} />
            </Scroll>
        </div>
    )
    }
}

export default App;