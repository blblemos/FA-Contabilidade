import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./news.css";
import { Link } from "react-router-dom";
export default class News extends Component {
  render() {
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
          breakpoint: 600,
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
                  <Link to='/news' className=" this-news-content-btn">Notícia Completa</Link>
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
                    <Link to='/news' className=" this-news-content-btn">Notícia Completa</Link>
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
                    <Link to='/news' className=" this-news-content-btn">Notícia Completa</Link>
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
                    <Link to='/news' className=" this-news-content-btn">Notícia Completa</Link>
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
                    <Link to='/news' className=" this-news-content-btn">Notícia Completa</Link>
              </div>
            </div>
          </div>
        </Slider>
        <div className="this-container-btn">
          <Link to='/news' className="this-morenews-btn">Mais Notícias</Link>
        </div>
      </div>
    );
  }
}