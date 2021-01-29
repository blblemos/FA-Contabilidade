import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import ThisHeader from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import RequestContact from '../Components/Request-Contact/request-contact';
import './pages-CSS/titleHeader.css';
import './pages-CSS/news.css';
import newIMG1 from "../Images/news-img.jpg";

const PageNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="this-page-news-container">
      <ThisHeader/>
      <div className="this-title-header">
        Notícias
        <p></p>
      </div>
      <div className="this-page-news-container-content">
        <div className="this-page-news-contents">
          <div className="this-page-news-content">
            <img src={newIMG1} alt="Imagem Notícia"/>
            <div className=" this-page-news-data">
              <h3>JAN</h3>
              <h2>2021</h2>
            </div>
            <div className="this-page-news-content-title">
              <p>COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO</p>
            </div>
            <div className="this-page-news-content-text">
                <p>
                  As empresas no Brasil estão começando a voltar ao escritório e algumas já planejam fazê-lo nos próximos meses.
                  Não há um guia de instruções claro para os desafios à frente, especialmente em meio às...
                </p>
            </div>
            <div className="this-page-news-content-footer">
            <Link to='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' className=" this-page-news-content-btn">Notícia Completa</Link>
            </div>
          </div>
          <div className="this-page-news-content">
            <img src={newIMG1} alt="Imagem Notícia"/>
            <div className=" this-page-news-data">
              <h3>JAN</h3>
              <h2>2021</h2>
            </div>
            <div className="this-page-news-content-title">
              <p>COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO</p>
            </div>
            <div className="this-page-news-content-text">
                <p>
                  As empresas no Brasil estão começando a voltar ao escritório e algumas já planejam fazê-lo nos próximos meses.
                  
                </p>
            </div>
            <div className="this-page-news-content-footer">
            <Link to='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' className=" this-page-news-content-btn">Notícia Completa</Link>
            </div>
          </div>
          <div className="this-page-news-content">
            <img src={newIMG1} alt="Imagem Notícia"/>
            <div className=" this-page-news-data">
              <h3>JAN</h3>
              <h2>2021</h2>
            </div>
            <div className="this-page-news-content-title">
              <p>COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO</p>
            </div>
            <div className="this-page-news-content-text">
                <p>
                  As empresas no Brasil estão começando a voltar ao escritório e algumas já planejam fazê-lo nos próximos meses.
                  Não há um guia de instruções claro para os desafios à frente, especialmente em meio às...
                </p>
            </div>
            <div className="this-page-news-content-footer">
            <Link to='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' className=" this-page-news-content-btn">Notícia Completa</Link>
            </div>
          </div>
        </div>
      </div>
      <RequestContact/>
      <Footer/>
    </div>
  );
};

export default PageNews;
