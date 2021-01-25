import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./news.css";
import { Link } from "react-router-dom";

const News = () =>  {
    var settings = {
      className: "center this-container-news-slide",
      centerPadding: "60px",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            infinite: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            initialSlide: 2
          }
        }
      ]
    };
    return (
      <div className="this-container-news">
        <div className="this-news-title">Notícias</div>
        <Slider {...settings}>
          <div className=" this-slide-news">
            <div className="this-content-news">
              <div className=" this-news-content-img">
                <div className=" this-news-data">
                  <h3>JAN</h3>
                  <h2>2021</h2>
                </div>
              </div>
              <div className=" this-news-content-title">
                <p>91% dos profissionais preferem modelo de trabalho híbrido</p>
              </div>
              <div className=" this-news-content-text">
                <p>Com o home office cada vez mais consolidado como modelo de trabalho eficiente, chegou a 91% o 
                percentual de profissionais qualificados que acreditam que o futuro é o trabalho híbrido.</p>
              </div>
              <div className="this-news-content-footer">
                  <Link to='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' className=" this-news-content-btn">Notícia Completa</Link>
              </div>
            </div>
          </div>
          <div className=" this-slide-news">
            <div className="this-content-news">
              <div className=" this-news-content-img">
                  <div className=" this-news-data">
                    <h3>JAN</h3>
                    <h2>2021</h2>
                  </div>
                </div>
                <div className=" this-news-content-title">
                  <p>91% dos profissionais preferem modelo de trabalho híbrido</p>
                </div>
                <div className=" this-news-content-text">
                  <p>Com o home office cada vez mais consolidado como modelo de trabalho eficiente, chegou a 91% o 
                  percentual de profissionais qualificados que acreditam que o futuro é o trabalho híbrido.</p>
                </div>
                <div className="this-news-content-footer">
                    <Link to='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' className=" this-news-content-btn">Notícia Completa</Link>
                </div>
            </div>
          </div>
          <div className=" this-slide-news">
            <div className="this-content-news">
              <div className=" this-news-content-img">
                  <div className=" this-news-data">
                    <h3>JAN</h3>
                    <h2>2021</h2>
                  </div>
                </div>
                <div className=" this-news-content-title">
                  <p>91% dos profissionais preferem modelo de trabalho híbrido</p>
                </div>
                <div className=" this-news-content-text">
                  <p>Com o home office cada vez mais consolidado como modelo de trabalho eficiente, chegou a 91% o 
                  percentual de profissionais qualificados que acreditam que o futuro é o trabalho híbrido.</p>
                </div>
                <div className="this-news-content-footer">
                    <Link to='/COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO' className=" this-news-content-btn">Notícia Completa</Link>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default News;