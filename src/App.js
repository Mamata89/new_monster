

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from "./component/card-list/card-litsComponent"
import {Search} from "./component/Search/search-Component"
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }


  handleSearch = (e) => {
      this.setState({
        searchField: e.target.value
      },() => console.log(this.state.searchField))

     
 }

  render() {
    const filteredArray = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  )
  
 




    return (
      <div>
        {/* <input type="search" placeholder="Search Monster" onChange={this.handleSearch} value={this.state.searchField}/> */}
        <Search  handleSearch={this.handleSearch} placeholder="Search Monster"
          value={this.state.searchField}/>
        
        <CardList monsters={filteredArray}/>
      </div>
  )
  }
}

export default App;
























