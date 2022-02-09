import "./footer.css";
import React from 'react';
import { GiPadlock, GiMailbox } from 'react-icons/gi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { FaMapMarkedAlt, FaPhone, FaFacebookSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="this-container-footer">
          <div className="this-footer-logo">
            <div className="this-footer-logo-img"></div>
          </div>   
          <div className="this-footer-container-contact">
            <div className="this-footer-contact">
              <div className="this-footer-address">
                <FaMapMarkedAlt className="this-footer-content-icon"/>
                <p>Rua Coronel José Pinto dos Santos, 843, São João<br/>
                  CEP: 440514-00  - Feira de Santana - Bahia 
                </p>
              </div>
              <div className="this-footer-phone">
                <FaPhone className="this-footer-content-icon"/>
                <p>(75) 4101-3130</p>
              </div>
              <div className="this-footer-mail">
                <GiMailbox className="this-footer-content-icon"/>
                <p>
                  contato@fabriciosodre.com.br
                </p>
              </div>
              <div className="this-footer-social">
                <a target="blank" href="https://www.instagram.com/fabricioscontabilidade/"><RiInstagramFill className="this-footer-content-icon"/></a>
                <a target="blank" href="https://www.facebook.com/fabriciosodrecontabilidade"><FaFacebookSquare className="this-footer-content-icon"/></a>
                <a target="blank" href="https://wa.me/557541013130?text=Olá!%20Venho%20pelo%20site%20e%20preciso%20de%20um%20contador!"><IoLogoWhatsapp className="this-footer-content-icon"/></a>
              </div>
            </div>
          </div>
      </div>
      <div className="this-container-sub-footer"> 
        ® 2021 Todos os direitos reservados. Desenvolvido por blblemos17@gmail.com 
      </div>
    </div>
  );
}

export default Footer;
