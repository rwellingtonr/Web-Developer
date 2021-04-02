import React, { Component } from 'react';
import SearchField from './SearchField';
import Cardlist from './Cardlist';
import Scroll from './Scroll';


class App extends Component {
  constructor(){
    super();
    this.state={
      users: [],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json();})
    .then(users=>{this.setState({users: users})})
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
}
  
  render() {
    const searchMonster = this.state.users.filter(name =>{
      return name.username.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Monsters</h1>
        <SearchField runQUery={this.onSearchChange}/>
        <Scroll>  
          <Cardlist users={searchMonster} />
        </Scroll>
      </div>
    );
  }
}

export default App;
