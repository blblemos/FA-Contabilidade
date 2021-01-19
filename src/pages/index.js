import React, {useEffect} from 'react';
import Services from '../Components/Services/Services';
import Slide from '../Components/Slide/slide';
import About from '../Components/About/about';
import News from '../Components/News/news';
import RequestContact from '../Components/Request-Contact/request-contact';
import Footer from '../Components/Footer/footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="this-page">
      <Slide/>
      <Services/>
      <About/>
      <News/>
      <RequestContact/>
      <Footer/>
    </div>
  );
};

export default Home;
