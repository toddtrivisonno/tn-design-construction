import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Components/Navbar.js';
import Jumbotron from './Components/Jumbotron.js';
import CardDeck from './Components/CardDeck.js';

library.add(fab, faPhone);

class App extends React.Component {

  render() {
    return (
      <>
        <div className="container p-2">
          <Navbar />
        </div>
        <Jumbotron jumboImg="IMG_6885.jpg" />
        <div className="container p-2">
          <hr />
          <h1 className="text-center text-muted p-3">
            <strong>TN Design & Construction</strong>, conveniently located south of Nashville, creates tailored residential and commercial construction projects.
          </h1>
          <hr />
          <CardDeck />
          <hr />
        </div>
      </>
    )
  }
}

export default App;
