import React from 'react';

//https://picsum.photos/800/400
export default function Carrosel() {

  return (
    <div className="container">
      <div className="carousel fade-carousel slide carousel-fade" data-ride="carousel"
        data-interval="5000" id="bs-carousel">
        <ol className="carousel-indicators">
          <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#bs-carousel" data-slide-to="1"></li>
          <li data-target="#bs-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item slides active carousel-item">
            <div className="slide-1">
              <div className="overlay"></div>
            </div>
          </div>
          <div className="item slides carousel-item">
            <div className="slide-2">
              <div className="overlay"></div>
            </div>
          </div>
          <div className="item slides carousel-item">
            <div className="slide-3">
              <div className="overlay"></div>
            </div>
          </div>
          <div className="hero">
            <hgroup>
              <h3>Food Delivery</h3>
            </hgroup>
          </div>
        </div>
      </div>
    </div>
  );
}