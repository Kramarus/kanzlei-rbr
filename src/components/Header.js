import React from 'react';
import ContactForm from './ContactForm';

export default function Header({ setPage }) {
    return (
        <div className="container-fluid" style={{ position: 'fixed', zIndex: '1000' }}>
            <div className="row">
                <div className="col-lg-3 bg-secondary d-none d-lg-block" style={{ padding: 0 }}>
                    <a href="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center" style={{ margin: 0 }}>
                        <h1 className="m-0 display-5 text-primary text-uppercase">Kanzlei RBR</h1>
                    </a>
                </div>
                <div className="col-lg-9" style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="row bg-white border-bottom d-none d-lg-flex">
                        {/* <div className="col-lg-7 text-left">
                        <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                            <i className="fa fa-envelope text-primary mr-2"></i>
                            <small>info@kanzlei-rbr.com</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+49 152 03373871</small>
                        </div>
                    </div> */}
                        {/* <div className="col-lg-5 text-right">
                        <div className="d-inline-flex align-items-center p-2">
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div> */}
                    </div>
                    <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <h1 onClick={() => setPage('main')} className="m-0 display-4 text-primary text-uppercase">Kanzlei RBR</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav m-auto py-0">

                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Zivilrecht</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="#" className="dropdown-item">Kaufrecht</a>
                                        <a href="#" className="dropdown-item">Erbrecht</a>
                                        <a href="#" className="dropdown-item">Reiserecht</a>
                                        <a href="#" className="dropdown-item">Mietrecht und WEG</a>
                                        <a href="#" className="dropdown-item">Familienrecht</a>
                                        <a href="#" className="dropdown-item">Erstellung und Analyse von Verträgen</a>
                                        <a href="#" className="dropdown-item">Rechtliche Begleitung</a>
                                        <a href="#" className="dropdown-item">Forderungsmanagement</a>
                                        <a href="#" className="dropdown-item">Vertretung vor Gerichten und staatlichen Organen</a>
                                        <a href="#" className="dropdown-item">Mahnverfahren</a>
                                        <a href="#" className="dropdown-item">Schutz vor unbegründeten finanziellen Forderungen</a>
                                        <a href="#" className="dropdown-item">Schutz der Verbraucherrechte</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Gesellschaftsrecht</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="#" className="dropdown-item">Gründung und Betreuung von juristischen Personen (Verein, UG, GmbH, Stiftung etc.)</a>
                                        <a href="#" className="dropdown-item">Erstellung von Gründungsdokumenten und Vertragsgestaltung</a>
                                        <a href="#" className="dropdown-item">Erstellung und Prüfung der AGB</a>
                                        <a href="#" className="dropdown-item">Vertretung vor Gerichten, Schiedsgerichten und staatlichen Organen</a>
                                        <a href="#" className="dropdown-item">Rechte der Eigentümer juristischer Personen</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Öffentliches Recht</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="#" className="dropdown-item">Ausländerrecht</a>
                                        <a href="#" className="dropdown-item">Aufenthaltsrecht</a>
                                    </div>
                                </div>
                                <a href="#" className="nav-item nav-link">Strafrecht</a>
                            </div>
                            <button className="btn btn-primary mr-3 d-none d-lg-block" type="button" data-toggle="modal" data-target="#contact-form">Kontakt aufnehmen</button>
    
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}
