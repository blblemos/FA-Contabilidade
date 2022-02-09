import React from 'react';
import './slide.css';
import 'bootstrap/dist//css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';

const Slide = () => {
    return (
        <div className="divSlide">
            <div className="this-opacity"></div>
            <Carousel pause="hover" className="this-carousel" controls={false}>
                <Carousel.Item className="carouselItem" interval={4000} >   
                    <Carousel.Caption className="this-text">
                        <h3>Organização que sua empresa precisa</h3>
                        <p>Cuidamos de todo o seu Departamento Pessoal garantindo mais organização e total controle das rotinas.</p>
                        <div className="slide-btn"><Link to='/services'>Nossos Serviços</Link></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem "  interval={4000} > 
                    <Carousel.Caption className="this-text">
                    <h3>Contabilidade Profissional e Serviços Fiscais</h3>
                    <p>Alta performance para o seu negócio e segurança para as suas finanças.</p>
                    <div className="slide-btn"><Link to='/services'>Nossos Serviços</Link></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem "  interval={4000} >
                    <Carousel.Caption className="this-text">
                    <h3>Confiança & Inovação</h3>
                    <p>Uma empresa criada a partir da nossa paixão por desenvolver pessoas e empresas.</p>
                    <div className="slide-btn"><Link to='/contact'>Entre em Contato</Link></div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

};

export default Slide;