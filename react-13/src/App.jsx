import React from 'react';

import './App.scss';
import TopBar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

class App extends React.Component {
  constructor() {
    super()
    this.state = {contacts: [], list: []}
  }

  
  setContacts(contacts){
    this.setState({contacts})
  }
  
  async componentDidMount(){
    const contacts = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(value => value.json())
    this.setContacts(contacts)
    this.setState({list: contacts})
  }

  render() {
    return (
      <React.Fragment>
        <TopBar/>
        <Filters contacts={this.state.contacts} list={this.state.list} setContacts={this.setContacts.bind(this)}/>
        <Contacts contacts={this.state.contacts}/>
      </React.Fragment>
    )
  }
}

export default App;
