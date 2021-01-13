import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import News from './pages/news';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/news' component={News} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
