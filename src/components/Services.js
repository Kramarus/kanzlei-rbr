import React from 'react';

export default function Services() {
  return (
    <div className="container-fluid py-5">
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-3" style={{textAlign: 'left'}}>
                <h6 className="text-uppercase">Was wir können</h6>
                <h1 className="mb-4">Unsere Gebiete</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquid quia, assumenda eveniet velit eaque est quo tempore excepturi sint!</p>
                <a href="#" className="btn btn-primary mt-2">More Services</a>
            </div>
            <div className="col-lg-9 pt-5 pt-lg-0">
                <div className="bg-primary rounded" style={{height: 200 + 'px'}}></div>
                <div className="owl-carousel service-carousel position-relative" style={{marginTop: -100 + 'px', padding: '0 30px'}}>
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                        <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                            <i className="fa fa-2x fa-landmark"></i>
                        </div>
                        <h5 className="mb-4 px-4">Zivilrecht</h5>
                        <p className="m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum, sunt eos maiores tenetur ducimus!</p>
                    </div>
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                        <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                            <i className="fa fa-2x fa-users"></i>
                        </div>
                        <h5 className="mb-4 px-4">Gesellschaftsrecht</h5>
                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est repudiandae non dicta repellat tempora autem.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                        <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                            <i className="fa fa-2x fa-hand-holding-usd"></i>
                        </div>
                        <h5 className="mb-4 px-4">Öffentliches Recht</h5>
                        <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni sed porro.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                        <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                            <i className="fa fa-2x fa-gavel"></i>
                        </div>
                        <h5 className="mb-4 px-4">Strafrecht</h5>
                        <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus inventore doloremque esse!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
