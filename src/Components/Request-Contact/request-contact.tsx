import React, { useEffect } from 'react';
import "./request-contact.css";
import {SiMinutemailer} from "react-icons/si";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RequestContact = () => {
    useEffect(() => {
        Aos.init({});
    });
    return (
        <div className="this-container-request-contact">
            <p data-aos="zoom-in">
                Solicite uma proposta, visita ou agende uma reunião! 
                <Link className=" this-request-contact-btn" to='/contact'><SiMinutemailer /></Link>
            </p>
            
        </div>
    );
}

export default RequestContact;
