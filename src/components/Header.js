import React from 'react'

export default function Header({setPage}) {
  return (
    <div class="container-fluid" style={{position: 'fixed', zIndex: '1000'}}>
        <div class="row">
            <div class="col-lg-3 bg-secondary d-none d-lg-block" style={{padding: 0}}>
                <a href="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center" style={{margin:0}}>
                    <h1 class="m-0 display-5 text-primary text-uppercase">Kanzlei RBR</h1>
                </a>
            </div>
            <div class="col-lg-9" style={{paddingLeft: 0,paddingRight: 0}}>
                <div class="row bg-white border-bottom d-none d-lg-flex">
                    {/* <div class="col-lg-7 text-left">
                        <div class="h-100 d-inline-flex align-items-center py-2 px-3">
                            <i class="fa fa-envelope text-primary mr-2"></i>
                            <small>info@kanzlei-rbr.com</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i class="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+49 152 03373871</small>
                        </div>
                    </div> */}
                    {/* <div class="col-lg-5 text-right">
                        <div class="d-inline-flex align-items-center p-2">
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="/">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
                <nav class="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                        <h1 onClick={() => setPage('main')} class="m-0 display-4 text-primary text-uppercase">Kanzlei RBR</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav m-auto py-0">
                            
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Zivilrecht</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="#" class="dropdown-item">Kaufrecht</a>
                                    <a href="#" class="dropdown-item">Erbrecht</a>
                                    <a href="#" class="dropdown-item">Reiserecht</a>
                                    <a href="#" class="dropdown-item">Mietrecht und WEG</a>
                                    <a href="#" class="dropdown-item">Familienrecht</a>
                                    <a href="#" class="dropdown-item">Erstellung und Analyse von Verträgen</a>
                                    <a href="#" class="dropdown-item">Rechtliche Begleitung</a>
                                    <a href="#" class="dropdown-item">Forderungsmanagement</a>
                                    <a href="#" class="dropdown-item">Vertretung vor Gerichten und staatlichen Organen</a>
                                    <a href="#" class="dropdown-item">Mahnverfahren</a>
                                    <a href="#" class="dropdown-item">Schutz vor unbegründeten finanziellen Forderungen</a>
                                    <a href="#" class="dropdown-item">Schutz der Verbraucherrechte</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Gesellschaftsrecht</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="#" class="dropdown-item">Gründung und Betreuung von juristischen Personen (Verein, UG, GmbH, Stiftung etc.)</a>
                                    <a href="#" class="dropdown-item">Erstellung von Gründungsdokumenten und Vertragsgestaltung</a>
                                    <a href="#" class="dropdown-item">Erstellung und Prüfung der AGB</a>
                                    <a href="#" class="dropdown-item">Vertretung vor Gerichten, Schiedsgerichten und staatlichen Organen</a>
                                    <a href="#" class="dropdown-item">Rechte der Eigentümer juristischer Personen</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Öffentliches Recht</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="#" class="dropdown-item">Ausländerrecht</a>
                                    <a href="#" class="dropdown-item">Aufenthaltsrecht</a>
                                </div>
                            </div>
                            <a href="#" class="nav-item nav-link">Strafrecht</a>
                        </div>
                        <a href="https://wa.me/4915203373871" class="btn btn-primary mr-3 d-none d-lg-block">WhatsApp</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
