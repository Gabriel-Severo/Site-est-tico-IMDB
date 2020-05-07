import React from 'react';

import './App.scss';
import TopBar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBar/>
        <Filters/>
        <Contacts/>
      </React.Fragment>
    )
  }
}

export default App;
