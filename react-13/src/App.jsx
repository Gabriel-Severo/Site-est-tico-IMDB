import React from 'react';

import './App.scss';
import TopBar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

class App extends React.Component {
  constructor() {
    super()
    this.state = {contacts: []}
  }

  setContacts(contacts){
    this.setState({contacts})
  }

  render() {
    return (
      <React.Fragment>
        <TopBar/>
        <Filters contacts={this.state.contacts} setContacts={this.setContacts.bind(this)}/>
        <Contacts contacts={this.state.contacts} setContacts={this.setContacts.bind(this)}/>
      </React.Fragment>
    )
  }
}

export default App;
