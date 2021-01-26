import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { ImCalculator } from 'react-icons/im';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FaRegHandshake, FaUsers } from 'react-icons/fa';
import { GiTakeMyMoney, GiLion } from 'react-icons/gi';
import { MdMoneyOff } from 'react-icons/md';
import { IoIosBusiness } from 'react-icons/io';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        Aos.init({});
    });
    return (
        <div className="this-container-services">
            <div className="this-services-title">Serviços</div>
            <div className="this-services-for-8">
                <div className="this-container-for-4" data-aos="fade-right">
                    <Link to='/services' className="this-services-content">
                        <ImCalculator className="this-services-icon"/>
                        <h3>Contabilidade</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                    <Link to='/services' className="this-services-content">
                        <IoIosBusiness className="this-services-icon"/>
                        <h3>Abertura De Empresa</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                    <Link to='/services' className="this-services-content">
                        <GiLion className="this-services-icon"/>
                        <h3>Fiscal</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                    <Link to='/services' className="this-services-content">
                        <GiTakeMyMoney className="this-services-icon"/>
                        <h3>Financeiro</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                </div>
                <div className="this-container-for-4" data-aos="fade-left">
                    <Link to='/services' className="this-services-content">
                        <FaUsers className="this-services-icon"/>
                        <h3>Departamento Pessoal e RH</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                    <Link to='/services' className="this-services-content">
                        <FaRegHandshake className="this-services-icon"/>
                        <h3>Societário</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                    <Link to='/services' className="this-services-content">
                        <MdMoneyOff className="this-services-icon"/>
                        <h3>Recuperação de Créditos</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. 
                            Proin euismod fermentum neque, eget sodales dolor vestibulum vitae.
                        </p>
                    </Link>
                    <Link to='/services' className="this-services-content">
                        <FiArrowRightCircle className="this-services-icon"/>
                        <h3>Saiba Mais</h3>
                        <FiArrowRightCircle className="this-services-icon-more"/>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Services;