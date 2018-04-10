import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import GalleryPage from './GalleryPage';

class Main extends Component {
  render() {
    return (
      <Switch>
      	 <Route exact path='/' component={Home} />
      	 <Route path='/about/' component={About} />
      	 <Route path='/services/' component={Services} />
      	 <Route path='/contact/' component={Contact} />
      	 <Route path='/gallery/' component={GalleryPage} />
      </Switch>
    );
  }
}

export default Main;