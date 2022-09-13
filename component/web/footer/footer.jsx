import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaApple, FaGooglePlay } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Image from 'next/image';
export default function Footer() {
    return (
        <div id='footer'>
            <div className='footer'>
                <Container>
                    <section className='footer-download'>
                        <div className='footer-download-focus-info'>
                            <p>Ready To <span> Download</span></p>
                        </div>
                        <div className='footer-download-details'>
                            <p>Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.</p>
                        </div>
                        <div className='footer-download-button'>
                            <div className='footer-download-appstore'>
                                <button className='btn-app'>
                                    <FaApple className='icon' />
                                    Download On App Store
                                </button>
                            </div>
                            <div className='footer-download-googleplay'>
                                <button className='btn-google'>
                                    <FaGooglePlay className='icon' />
                                    Download On Google Play
                                </button>
                            </div>
                        </div>
                    </section>
                    <div className='footer-page-list'>
                        <section className='page-list'>
                            <Navbar className='navbar' expand="lg">
                                <Navbar.Brand href="#" className='navbar-logo' >
                                    <Image
                                        src="/image/iteck-logo-1.png"
                                        alt=""
                                        width={170}
                                        height={38}
                                    />
                                </Navbar.Brand>
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0 nav"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link href="#action1" className='navbar-link-name'>Home</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>Features</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>Reciews</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>Pricing</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>Company</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>Guide</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>New</Nav.Link>
                                        <Nav.Link href="#action1" className='navbar-link-name'>Privecy Policy</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </section>
                        <section className='mesaj'>
                            <p>© 2022 Copyrights by <span>Iteck Co.</span> All Rights Reserved. Developed by <strong>ThemesCamp</strong></p>
                        </section>
                    </div>
                </Container>

                <a href='#' className='fixed avtive' >
                    <button className='btn'>
                    <FontAwesomeIcon icon={faChevronUp} className='icon' />
                    </button>

                </a>
                
            </div>
        </div>
    )
}
