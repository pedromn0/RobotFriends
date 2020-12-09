import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({robots: users}))
}

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const { searchField, robots } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='tc'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    < CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    } 
    
}

export default App;