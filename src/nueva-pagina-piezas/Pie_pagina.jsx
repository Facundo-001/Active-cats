// import React from 'react';
import './style-fondo.css'

function Pie_pagina() {
    return (
        <footer className="your-class-name py-4 mt-auto bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-2 text-dark text-decoration-none" href="/" aria-label="Company">
                            <svg
                                xmlns="https://st4.depositphotos.com/11498520/22526/v/450/depositphotos_225265782-stock-illustration-cat-vector-kitten-calico-icon.jpg"
                                width="40"
                                height="32"
                                className="d-block me-2"
                                viewBox="0 0 118 94"
                                role="img"
                            >
                                <title>Company Logo</title>
                            </svg>
                            <span className="fs-5" style={{color: '#fff'}}>Active Cats</span>
                        </a>
                        <ul className="list-unstyled small">
                            <li className="mb-2">Description or slogan about the company or brand goes here.</li>
                            <li className="mb-2"><a href="#" target="_blank" rel="noopener noreferrer">License Info</a>.</li>
                            <li className="mb-2">Version Info.</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Home</a></li>
                            <li className="mb-2"><a href="#">Docs</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <h5>Guides</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Getting Started</a></li>
                            <li className="mb-2"><a href="#">Starter Template</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Issues</a></li>
                            <li className="mb-2"><a href="#">Discussions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Pie_pagina;
