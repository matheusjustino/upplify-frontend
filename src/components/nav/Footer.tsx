/* eslint-disable */
import React from 'react';

export default function Footer() {

    return (
        <section id="footer" style={{ background: '#e17055' }}>
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <h4><b style={{ color: 'white' }}>Social</b></h4>
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}