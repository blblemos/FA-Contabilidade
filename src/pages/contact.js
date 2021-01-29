import React, {useEffect, useState} from 'react';
import {Formik, Field, Form} from 'formik';
import Schema from '../utils/schema';
import ThisHeader from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import mapIcon from '../utils/mapIcons';

import { mask as masker, unMask } from "remask";

import { FaMapMarkedAlt } from 'react-icons/fa';

import './pages-CSS/titleHeader.css';
import './pages-CSS/contact.css';
import 'bootstrap/dist//css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [success, setSuccess]=useState('');
  const onSubmit = (values, actions) => {
    setSuccess("Mensagem Enviada com Sucesso!");
    actions.resetForm({});
    console.log('SUBMIT', values);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className="this-page-contact-container">
      <ThisHeader/>
      <div className="this-title-header">
        Contato
        <p></p>
      </div>
      <div className="this-page-contact-container-content">
        <div className="this-page-contact-contents">
          <Formik 
            validationSchema={Schema}
            onSubmit={onSubmit}
            initialValues={{
              name: '',
              phone: '',
              email: '',
              message: '',
            }}>
            { ({values, errors, touched, handleChange}) => (
              <Form className="this-page-contact-form" noValidate>
                <div className="this-page-contact-success">{success}</div>
                <div className="this-page-contact-form-content">
                    <label className="this-page-contact-form-label">Nome</label>
                    <Field
                        className={errors.name && touched.name ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                        type="text"
                        name="name"
                    />
                </div>
                <div className="this-page-contact-form-content">
                    <label className="this-page-contact-form-label">Telefone</label>
                    <Field
                      value={masker(unMask(values.phone),["(99) 9999-9999", "(99) 9 9999-9999"])}
                      className={errors.phone && touched.phone ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                      name="phone"
                      type="text"
                    />
                </div>
                <div className="this-page-contact-form-content">
                    <label className="this-page-contact-form-label">Email</label>
                    <Field
                        className={errors.email && touched.email  ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                        type="email"
                        name="email"
                    />
                </div>
                <div className="this-page-contact-form-content  this-form-textarea">
                    <label className="this-page-contact-form-label">Mensagem</label>
                    <Field as='textarea'
                        className={errors.message && touched.message  ? 'this-page-contact-form-imput this-form-imput-error' : 'this-page-contact-form-imput'}
                        type="textarea"
                        name="message"
                    />
                </div>
                <div className="this-page-contact-form-content">
                    <button  type='submit' className="this-page-contact-form-btn" >
                        Enviar Mensagem
                    </button>
                    <div className="div-clear"></div>
                </div>
              </Form>
            )}
          </Formik>
            <div className="this-page-container-contact-map">
              <div  className="this-page-contact-map">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href='https://www.google.com/maps/dir/?api=1&destination=-12.242236,-38.9509343' 
                    className="this-page-contact-map-routes"
                  >
                    <p>Rotas<FaMapMarkedAlt className="this-page-contact-map-routes-icon"/></p>
                  </a>
                  <MapContainer
                      center={[-12.242236,-38.9509343]}
                      zoom={15}
                      style={{width: '105%' , height: '105%'}}
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
      </div>
        <Footer/>
    </div>
  );
};

export default Contact;
