import React from 'react'

export default function CallToAction() {
  return (
    <div className="container-fluid py-3" id="contact">
        <div className="container py-0">
            <div className="bg-action rounded" style={{height: '500px'}}>
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-7 text-center">
                        <h1 className="text-white mb-4">Haben Sie Fragen? <br />Dann schreiben Sie uns!</h1>

                        <a className="btn btn-primary py-3 px-5 mt-2 d-sm-inline-block d-md-none d-lg-none" href="https://wa.me/4915203373871">WhatsApp</a>
                        <a className="btn btn-primary py-3 px-5 mt-2 d-none d-md-inline-block d-lg-inline-block" type="button" data-toggle="modal" data-target="#contact-form">Kontakt aufnehmen</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
