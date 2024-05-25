import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5" style={{marginTop: 90 + 'px', textAlign: 'left'}}>
        <div className="row mt-5">
            
            <div className="col-lg-4">
                <div className="d-flex justify-content-lg-center p-4" style={{background: 'rgba(256, 256, 256, .05)'}}>
                    <i className="fa fa-2x fa-envelope-open text-primary"></i>
                    <div className="ml-3">
                        <h5 className="text-white">Email</h5>
                        <p className="m-0">info@kanzlei-rbr.com</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="d-flex justify-content-lg-center p-4" style={{background: 'rgba(256, 256, 256, .05)'}}>
                    <i className="fa fa-2x fa-map-marker-alt text-primary"></i>
                    <div className="ml-3">
                        <h5 className="text-white">Büro</h5>
                        {/* <p className="m-0">Anwaltskanzlei Rabinovich<br>Merianstraße 19<br>60316 Frankfurt am Main</p> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="d-flex justify-content-lg-center p-4" style={{background: 'rgba(256, 256, 256, .05)'}}>
                    <i className="fa fa-2x fa-phone-alt text-primary"></i>
                    <div className="ml-3">
                        <h5 className="text-white">Telefon</h5>
                        <p className="m-0">+49 152 03373871</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-lg-4 col-md-4 mb-5">
                <a href="#" className="navbar-brand">
                    <h1 className="m-0 mt-n2 display-4 text-primary text-uppercase">Kanzlei RBR</h1>
                </a>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, commodi ex. Cumque.</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-5">
                <h4 className="font-weight-semi-bold text-primary mb-4">Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Hauptseite</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Unsere Gebiete</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Über uns</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Kontakt</a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-5">
                <h4 className="font-weight-semi-bold text-primary mb-4">Gesetzliches</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>AGB</a>
                    <a className="text-white mb-2" href="./datenschutz.html"><i className="fa fa-angle-right mr-2"></i>Datenschutz</a>
                    <a className="text-white mb-2" href="./impressum.html"><i className="fa fa-angle-right mr-2"></i>Impressum</a>
                </div>
            </div>
        </div>
        <div className="row p-4 mt-5 mx-0" style={{background: 'rgba(256, 256, 256, .05)'}}>
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <a className="font-weight-bold" href="#">Kanzlei RBR</a>. Alle Rechte geschutzt</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
                <p className="m-0 text-white">Erstellt von <a className="font-weight-bold" href="https://webbylon.com">Webbylon</a></p>
            </div>
        </div>
    </div>
  )
}
