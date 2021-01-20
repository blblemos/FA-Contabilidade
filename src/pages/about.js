import React, {useEffect} from 'react';
import ThisHeader from '../Components/Header/header';
import RequestContact from '../Components/Request-Contact/request-contact';
import Footer from '../Components/Footer/footer';
import './pages-CSS/titleHeader.css';
import './pages-CSS/about.css';
import {GiShakingHands} from 'react-icons/gi';
import {FiTarget} from 'react-icons/fi';
import {BsEye} from 'react-icons/bs';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="this-page-about-container">
      <ThisHeader/>
      <div className="this-title-header">Sobre Nós</div>
      <div className="this-page-about-container-content">
          <div className="this-page-about-contents">
            <div className="this-page-about-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla velit eu 
                    neque gravida vestibulum. Aliquam vitae massa tellus. Curabitur aliquam porttitor tincidunt. 
                    Sed luctus urna lacus, in feugiat purus semper nec. Nunc vulputate dui in lectus porttitor, a 
                    semper ipsum scelerisque. Donec egestas elementum sem, posuere porttitor risus vestibulum sed. 
                    Fusce vestibulum diam urna, sed sollicitudin justo ultrices in. In nisi dui, congue vitae molestie ac, 
                    pharetra et mauris. Donec lobortis, mi eu mattis ultrices, velit eros aliquam orci, et varius purus leo 
                    eget mauris. Pellentesque placerat turpis arcu. Nullam ligula nunc, ullamcorper eget sem ac, convallis ultricies 
                    diam. Vivamus bibendum quis arcu non aliquam. Donec augue tortor, eleifend ut molestie quis, posuere quis risus. 
                    Mauris ut nulla at est bibendum pharetra. Fusce consectetur nisi vel lorem aliquam consectetur. Nulla facilisi.
                    <br/><br/>
                    Quisque eu congue magna, ut dignissim urna. Integer eu eleifend ex, in tempor augue. Nulla in mollis felis. 
                    Nulla bibendum a ex eu eleifend. Aliquam commodo orci at porta auctor. In volutpat, leo sit amet aliquet 
                    congue, nisl lacus egestas felis, et tincidunt mauris nisl quis purus. Integer tortor tellus, dictum eu 
                    turpis dapibus, laoreet gravida ex. Etiam euismod volutpat orci, vel auctor sem pretium et.
                    <br/><br/>
                    Proin ac congue ipsum. Donec lacinia ipsum eu cursus fringilla. Vestibulum mi dolor, vulputate egestas 
                    aliquam sed, viverra ac ipsum. In tellus turpis, tincidunt et pretium eu, sagittis et ante. Quisque in nibh 
                    pulvinar sem porta consequat non ac augue. Aenean convallis ac felis quis ullamcorper. Duis laoreet tortor vitae 
                    sapien aliquet blandit. Aenean malesuada urna quis nibh sagittis, at consequat sem malesuada. Mauris maximus nibh 
                    risus, quis convallis dolor lobortis eget. Pellentesque laoreet est efficitur ipsum molestie mollis eget a neque. 
                    In varius vitae sapien at sollicitudin. Duis venenatis at ipsum vel varius. Proin gravida auctor luctus.
                    <br/><br/>
                    Suspendisse id massa mollis, malesuada urna nec, ornare sapien. Interdum et malesuada fames ac ante ipsum primis 
                    in faucibus. Donec porta pharetra elit, sit amet tristique mauris condimentum id. Nullam luctus mauris leo, congue 
                    ultricies risus blandit et. Nullam faucibus, dolor ut convallis maximus, libero erat facilisis odio, eu facilisis 
                    neque libero sit amet ante. Nulla diam purus, ornare ac dui eu, scelerisque euismod lectus. Ut eu massa leo. 
                    Integer pretium, nunc et consectetur rhoncus, turpis nunc varius ligula, vitae commodo sem diam sit amet tellus. 
                    Pellentesque sed urna sit amet elit finibus aliquet at ac ipsum. Suspendisse ipsum tortor, aliquet eu bibendum et, 
                    tempor ac erat. Suspendisse aliquam elementum tincidunt. Nunc quis sem arcu. Sed dapibus risus ut risus auctor 
                    gravida.
                    <br/><br/>
                    Cras quis eros vitae enim condimentum semper. Phasellus commodo dictum magna a luctus. Aliquam erat volutpat. 
                    Etiam mattis porta dui eu faucibus. Curabitur tincidunt libero at ante finibus ultrices. Quisque finibus 
                    malesuada arcu congue pulvinar. Maecenas semper tincidunt mi, ac condimentum lectus mollis id. Ut non massa 
                    vitae quam suscipit rutrum sed eget quam.
                </p>
            </div>
            <div className="this-page-about-cards">
                  <div className="this-page-about-card">
                    <FiTarget className="this-page-about-icon"/>
                      <h5>Missão</h5>
                      <p>
                          Quisque eu congue magna, ut dignissim urna. Integer eu eleifend ex, in tempor augue. 
                          Nulla in mollis felis. Nulla bibendum a ex eu eleifend.
                          Cras quis eros vitae enim condimentum semper.
                      </p>
                  </div>
                  <div className="this-page-about-card">
                    <BsEye className="this-page-about-icon"/>
                      <h5>Visão</h5>
                      <p>
                          Quisque eu congue magna, ut dignissim urna. Integer eu eleifend ex, in tempor augue. 
                          Nulla in mollis felis. Nulla bibendum a ex eu eleifend.
                          Cras quis eros vitae enim condimentum semper.
                      </p>
                  </div>
                  <div className="this-page-about-card">
                    <GiShakingHands className="this-page-about-icon"/>
                      <h5>Valores</h5>
                      <p>
                          - Quisque eu congue magna; <br/>
                          - Ut dignissim urna; <br/>
                          - Integer eu eleifend;<br/>
                          - ex, in tempor augue. <br/>
                      </p>
                  </div>
            </div>
          </div>
      </div>
      <RequestContact/>
      <Footer/>
    </div>
  );
};

export default About;
