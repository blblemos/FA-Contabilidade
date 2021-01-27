import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import ServicesPage from './pages/services';
import Contact from './pages/contact';
import News from './pages/news';
import OneNews from './pages/One-News/one-news.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Whatsapp/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/contact' component={Contact} />
        <Route path='/news' component={News} />
        <Route path='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' component={OneNews} />
      </Switch>
    </Router>
  );
}

export default App;
