import React from 'react'

export default function About() {
  return (
    <div className="container-fluid py-5" id="about">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5">
                    <div className="about-boris">
                        
                    </div>
                </div>
                <div className="col-lg-7 mt-4 mt-lg-0" style={{textAlign: 'left'}}>
                    <h2 className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block" style={{width: '350px', marginLeft: '-205px'}}>12 Jahre Erfahrung</h2>
                    <h6 className="text-uppercase">Über uns</h6>
                    <h1 className="mb-4">Sie können sich auf uns verlassen</h1>
                    <p>Wir verfügen über langjährige Erfahrung auf unserem Gebiet. Rechtsanwalt Rabinovich berät Mandanten erfolgreich seit 8 Jahren und hat während dieser Zeit ein tiefgreifendes Verständnis für die Bedürfnisse und Anforderungen unserer Kunden entwickelt.</p>
                    <a href="#" className="btn btn-primary mt-2">Mehr erfahren</a>
                </div>
            </div>
        </div>
    </div>
  )
}
