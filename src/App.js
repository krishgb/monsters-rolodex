import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList'
import { SearchBox } from './components/searchbox/SearchBox';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => this.setState({ searchField: e.target.value })

  render() {
    const { monsters, searchField } = this.state;
    const filteredSearch = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredSearch} />
      </div>
    )
  }

}

export default App;
