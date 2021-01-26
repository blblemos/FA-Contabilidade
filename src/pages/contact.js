import React, {useState, useEffect} from 'react';
import ThisHeader from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import mapIcon from '../utils/mapIcons';
import MaskedInput from 'react-maskedinput';
import { FaMapMarkedAlt } from 'react-icons/fa';

import './pages-CSS/titleHeader.css';
import './pages-CSS/contact.css';
import 'bootstrap/dist//css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  var nameError;
  var phoneError;
  var emailError;
  var messageError;

  const handleSubmit = (event) => {

  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className="this-page-contact-container">
        <ThisHeader/>
        <div className="this-title-header">Contato</div>
        <div className="this-page-contact-container-content">
            <div className="this-page-contact-contents">
                    <form className="this-page-contact-form" noValidate onSubmit={handleSubmit}>
                        <div className="this-page-contact-form-content">
                            <label className="this-page-contact-form-label">Nome</label>
                            <input
                                className={nameError ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                                type="text"
                                placeholder=""
                                name="name"
                                id="name" 
                                value={name} 
                                onChange={event => setName(event.target.value)}
                            />
                        </div>
                        <div className="this-page-contact-form-content">
                            <label className="this-page-contact-form-label">Telefone</label>
                            <MaskedInput
                                className={phoneError ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                                mask="(11) 111111111"
                                placeholder="" 
                                name={phone}
                                id="phone" 
                                value={phone} 
                                onChange={event => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="this-page-contact-form-content">
                            <label className="this-page-contact-form-label">Email</label>
                            <input
                                className={emailError ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                                type="email"
                                placeholder=""
                                id="email" 
                                value={email} 
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="this-page-contact-form-content  this-form-textarea">
                            <label className="this-page-contact-form-label">Mensagem</label>
                            <textarea
                                className={messageError ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                                placeholder=""
                                id="message" 
                                value={message} 
                                onChange={event => setMessage(event.target.value)}
                            />
                        </div>
                        <div className="this-page-contact-form-content">
                            <button className="this-page-contact-form-btn" >
                                Enviar Mensagem
                            </button>
                            <div className="div-clear"></div>
                        </div>
                    </form>
                <div  className="this-page-contact-map">
                    <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/dir/?api=1&destination=-12.242236,-38.9509343' className="this-page-contact-map-routes"><p>Rotas<FaMapMarkedAlt className="this-page-contact-map-routes-icon"/></p></a>
                    <MapContainer
                        center={[-12.242236,-38.9509343]}
                        zoom={15}
                        style={{width: '110%' , height: '110%'}}
                    >
                        <TileLayer
                        url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        <Marker 
                              icon={mapIcon}
                              position={[-12.242236,-38.9509343]}
                          >
                          </Marker>
                    </MapContainer>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  );
};

export default Contact;
