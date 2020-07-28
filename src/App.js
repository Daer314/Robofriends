import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import {Robots} from './Robots';
import './App.css';



class App extends Component {
    constructor () {
        super ()
        this.state = {
            Robots: Robots,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({Robots: users}));
    // }

    onSearchChange = (event) => {
            this.setState({searchfield: event.target.value})
    }


    render () {
        const filteredRobots = this.state.Robots.filter(Robots => {
        return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>Robofriends</h1>
                <SearchBox SearchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList Robots = {filteredRobots}  /> 
                </Scroll>
            </div>

        );
    }
}

export default App;