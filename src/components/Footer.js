import React from 'react';
import { Link } from 'react-router-dom';
import Datenschutz from './Datenschutz';
import Impressum from './Impressum';
import ContactForm from './ContactForm';

export default function Footer({ setPage }) {
    return (
        <div className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5" style={{ marginTop: 90 + 'px', textAlign: 'left' }}>
            <div className="row pt-5">
                <div className="col-lg-6 col-md-6 mb-5">
                    <a href="#" className="navbar-brand">
                        <h1 className="m-0 mt-n2 display-4 text-primary text-uppercase d-inline-block">Kanzlei RBR</h1>
                    </a>
                    <p className="m-0">Anwaltskanzlei Rabinovich<br />Merianstraße 19<br />60316 Frankfurt am Main</p>
                    {/* <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div> */}
                </div>
                <div className="col-lg-3 col-md-3 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-white mb-2" href="#services"><i className="fa fa-angle-right mr-2"></i>Unsere Gebiete</a>
                        <a className="text-white mb-2" href="#about"><i className="fa fa-angle-right mr-2"></i>Über uns</a>
                        <a className="text-white mb-2" href="#contact"><i className="fa fa-angle-right mr-2"></i>Kontakt</a>
                        <a className="text-white mb-2" type="button" data-toggle="modal" data-target="#datenschutz"><i className="fa fa-angle-right mr-2"></i>Datenschutz</a>
                        <a className="text-white" type="button" data-toggle="modal" data-target="#impressum"><i className="fa fa-angle-right mr-2"></i>Impressum</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Kontakte</h4>
                    <div className="d-flex flex-column justify-content-start">

                        <p className="m-0">+49 152 03373871</p>
                        <p className="m-0">info@kanzlei-rbr.com</p>

                    </div>
                </div>
            </div>
            <div className="row p-4 mt-5 mx-0" style={{ background: 'rgba(256, 256, 256, .05)' }}>
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white">&copy; <a className="font-weight-bold" href="#">Kanzlei RBR</a>. Alle Rechte geschützt</p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <p className="m-0 text-white">Erstellt von <a className="font-weight-bold" href="https://webbylon.com">Webbylon</a></p>
                </div>
            </div>
            <a href="#" className="btn btn-primary px-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>
            <div class="modal fade" id="datenschutz" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '1000px' }}>
                    <div class="modal-content" >
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Datenschutzerklärung</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Datenschutz />
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="impressum" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '1000px' }}>
                    <div class="modal-content" >
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Impressum</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Impressum />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="contact-form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Kontaktformular</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
