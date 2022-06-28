import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searcg-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users};
      }))
  }

  onSearchChange =(event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  }

  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    
    const filteredArray = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
     });

    return (
      <div className="App"> 
        <SearchBox 
        className ='search-box'
        onChangeHandler={onSearchChange} 
        placeholder ='search monsters'/>
        <CardList monsters={filteredArray}/>
      </div>
    );
  }
}

export default App;
