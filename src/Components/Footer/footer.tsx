import "./footer.css";
import React from 'react';
import { GiPadlock, GiMailbox } from 'react-icons/gi';
import { FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="this-container-footer">
                <div className="this-footer-logo"></div>   
                <div className="this-footer-contact">
                    <div className="this-footer-address">
                        <FaMapMarkedAlt className="this-footer-content-icon"/>
                        <p>Rua Felinto Marques Cerqueira, 275, Capuchinhos<br/>
                            CEP: 44076-040  - Feira de Santana - Bahia </p>
                    </div>
                    <div className="this-footer-phone">
                        <FaPhone className="this-footer-content-icon"/>
                        <p>(73) 8832-2103</p>
                    </div>
                    <div className="this-footer-mail">
                        <GiMailbox className="this-footer-content-icon"/>
                        <p>contato@fabriciosodre.com.br</p>
                    </div>
                </div>
            </div>
            <div className="this-container-sub-footer"> 
            ® 2021 Todos os direitos reservados. Desenvolvido por blblemos17@gmail.com 
            <Link to='/contact'><GiPadlock/></Link> </div>
        </div>
    );
}

export default Footer;
