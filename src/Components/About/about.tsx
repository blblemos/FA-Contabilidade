import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({});
    });
    return (
        <div className="this-container-about">
            <div data-aos="zoom-out" className="this-inner-container ">
                <div className="this-photo-about">
                    <div className="this-img-about"></div>
                </div>
                <div className="this-text-about">
                    <div className="this-about-title">Sobre Nós</div>
                    <div className="this-about-text">
                        {/*Limitar em 150 palavras */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac luctus risus. Proin euismod fermentum 
                            neque, eget sodales dolor vestibulum vitae. Suspendisse potenti. Duis bibendum sapien arcu, sit amet 
                            lacinia magna egestas ac. Fusce egestas lacus a ipsum tempor tempus. Maecenas lobortis eros et egestas 
                            ornare. Donec pulvinar mauris quis risus tristique tincidunt.
                            <br/>
                            Praesent faucibus et tortor sed laoreet. Suspendisse tincidunt et risus vitae eleifend. Suspendisse enim 
                            lacus, scelerisque sit amet est non, lobortis faucibus erat. Fusce eu orci a justo rhoncus bibendum. 
                            Aliquam viverra egestas dui id vehicula. Vivamus vestibulum tortor felis, id lacinia nibh porta sed. 
                            Fusce ac ultricies justo. Cras vitae ante nunc. Nunc nec dui mattis, congue ante in, elementum tortor.  
                            </p>
                    </div>
                    <div className="about-btn"><p>Saiba Mais</p></div>
                </div>
            </div>
        </div>
    );

};

export default About;