import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Components/Navbar.js';
import Jumbotron from './Components/Jumbotron.js';

library.add(fab, faPhone);

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron jumboImg="IMG_6885.jpg" />
      </>
    )
  }
}

export default App;
