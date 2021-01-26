import "./footer.css";
import React from 'react';
import { GiPadlock, GiMailbox } from 'react-icons/gi';
import { FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
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
            </div>
          </div>
      </div>
      <div className="this-container-sub-footer"> 
        ® 2021 Todos os direitos reservados. Desenvolvido por blblemos17@gmail.com 
        <Link to='/contact'><GiPadlock/></Link> 
      </div>
    </div>
  );
}

export default Footer;
