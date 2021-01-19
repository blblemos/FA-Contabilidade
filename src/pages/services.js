import React, {useEffect} from 'react';
import ThisHeader from '../Components/Header/header';
import RequestContact from '../Components/Request-Contact/request-contact';
import Footer from '../Components/Footer/footer';
import './pages-CSS/titleHeader.css';
import './pages-CSS/services.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({});
  }, [])
  return (
    <div className="this-page-services-container">
      <ThisHeader/>
      <div className="this-title-header">Serviços</div>
      <div className="this-page-services-container-content">
        <div className="this-page-services-contents">
              <div className="this-page-services-content">
                  <div className="this-page-services-img"></div>
                  <div className="this-page-services-text">
                      <h3>Contabilidade</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
              <div data-aos="fade-left" className="this-page-services-content">
                  <div className="this-page-services-img services-img-2"></div>
                  <div className="this-page-services-text">
                      <h3>Abertura De Empresa</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
              <div data-aos="fade-right" className="this-page-services-content">
                  <div className="this-page-services-img services-img-3"></div>
                  <div className="this-page-services-text">
                      <h3>Fiscal</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
              <div data-aos="fade-left" className="this-page-services-content">
                  <div className="this-page-services-img services-img-4"></div>
                  <div className="this-page-services-text">
                      <h3>Financeiro</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
              <div data-aos="fade-right" className="this-page-services-content">
                  <div className="this-page-services-img services-img-5"></div>
                  <div className="this-page-services-text">
                      <h3>Departamento Pessoal e RH</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
              <div data-aos="fade-left" className="this-page-services-content">
                  <div className="this-page-services-img services-img-6"></div>
                  <div className="this-page-services-text">
                      <h3>Societário</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
              <div data-aos="fade-right" className="this-page-services-content">
                  <div className="this-page-services-img services-img-7"></div>
                  <div className="this-page-services-text">
                      <h3>Recuperação de Créditos</h3>
                      <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Morbi ac luctus risus. Proin euismod fermentum neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. 
                          Duis bibendum sapien arcu, sit amet lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas 
                          lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Maecenas lobortis eros et egestas ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                          Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. 
                          Suspendisse enim lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a 
                          justo rhoncus bibendum.
                      </p>
                  </div>
              </div>
        </div>
      </div>
      <RequestContact/>
      <Footer/>
    </div>
  );
};

export default ServicesPage;
