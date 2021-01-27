import React from 'react';
import './Whatsapp.css';
import iconwpp from '../../Images/whatsapp-logo.svg';

const Whatsapp = () => {
    return (
        <div className="this-whatsapp-container">
            <a target="blank" href="https://wa.me/557541013130?text=Olá!%20Venho%20pelo%20site%20e%20preciso%20de%20um%20contador!">
            <img src={iconwpp} alt="Whatsapp"/>
            </a>
        </div>
    );
};

export default Whatsapp;