import React from 'react';
import carousel from '../img/carousel.jpg';


export default function Hero() {
  return (
    <div className="container-fluid p-0 mb-5 pb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item position-relative active" style={{height: 100 + 'vh', minHeight: 400 + 'px'}}>
                    <img className="w-100 h-100" src={carousel} style={{objectFit: 'cover'}} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 900 + 'px'}}>
                            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: '3px'}}>Kanzlei RBR</h4>
                            <h3 className="display-2 text-capitalize text-white mb-4">Wir kämpfen <br />für Ihr Recht</h3>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="https://wa.me/4915203373871">Kontakt aufnehmen</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
