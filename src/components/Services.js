import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuildingColumns, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services() {
    return (
        <div className="container-fluid py-5" id="services" style={{ boxSizing: 'border-box' }}>
            <div className="container py-5">
                <div className="row mb-3">
                    <div className="col-12" style={{ textAlign: 'left' }}>
                        <h6 className="text-uppercase">Was wir können</h6>
                        <h1 className="mb-4">Unsere Gebiete</h1>
                        
                        {/* <a href="#" className="btn btn-primary mt-2">More Services</a> */}
                    </div>
                </div>

                <div className="row bg-primary rounded pt-3 pb-3">
                    <div className="col-lg-3 col-md-6 mb-sm-3 col-sm-12">
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4 pb-3">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-landmark"></i>
                            </div>
                            <h5 className="mb-4 px-4">Zivilrecht</h5>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-sm-3 col-sm-12">
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4 pb-3">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-users"></i>
                            </div>
                            <h5 className="mb-4 px-4">Gesellschaftsrecht</h5>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-sm-3  col-sm-12">
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4 pb-3">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <FontAwesomeIcon className='fa fa-2x' icon={faBriefcase} />
                            </div>
                            <h5 className="mb-4 px-4">Öffentliches Recht</h5>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4 pb-3">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-gavel"></i>
                            </div>
                            <h5 className="mb-4 px-4">Strafrecht</h5>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
