import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import ServicesPage from './pages/services';
import Contact from './pages/contact';
import News from './pages/news';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/contact' component={Contact} />
        <Route path='/news' component={News} />
      </Switch>
    </Router>
  );
}

export default App;
