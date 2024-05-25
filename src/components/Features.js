import React from 'react';
import feature from '../img/feature.jpg';

export default function Features() {
  return (
    <div class="container-fluid py-5" id="features">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6" style={{minHeight: '500px'}}>
                    <div class="position-relative h-100 rounded overflow-hidden">
                        <img class="position-absolutes w-100 h-100" src={feature} style={{objectFit: 'cover'}} />
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5" style={{textAlign: 'left'}}>
                    <div class="feature-text bg-white rounded p-lg-5">
                        <h6 class="text-uppercase">Unsere Vorteile</h6>
                        <h1 class="mb-4">Warum wir?</h1>
                        <div class="d-flex mb-4">
                            <div class="btn-primary btn-lg-square px-3" style={{borderRadius: '50px'}}>
                                <h5 class="text-secondary m-0">01</h5>
                            </div>
                            <div class="ml-4">
                                <h5>Erfahrung</h5>
                                <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nostrum.</p>
                            </div>
                        </div>
                        <div class="d-flex mb-4">
                            <div class="btn-primary btn-lg-square px-3" style={{borderRadius: '50px'}}>
                                <h5 class="text-secondary m-0">02</h5>
                            </div>
                            <div class="ml-4">
                                <h5>Effizienz und Vertrauen</h5>
                                <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, facilis.</p>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="btn-primary btn-lg-square px-3" style={{borderRadius: '50px'}}>
                                <h5 class="text-secondary m-0">03</h5>
                            </div>
                            <div class="ml-4">
                                <h5>Ergebnisse, die Sie verdienen</h5>
                                <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, minima?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
