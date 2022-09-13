import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';

import { FaGithub, FaTwitter,FaTelegram } from "react-icons/fa";

export default function Community() {
    return (
        <div id='community'>
            <div className='community'>
                <Container>
                    <section className='community-info'>
                        <div className='community-baslik'>
                            <h2 >Notero Community</h2>
                        </div>
                        <div className='community-focus-info'>
                            <p>join Into<span>Our Hub</span></p>
                        </div>
                    </section>
                    <section className='community-details-info'>
                        <div className='community-list'>
                            <Row>
                                <Col md={4} className='community-list-col'>
                                    <div className='community-github'>
                                    <i className='bi bi-github icon'></i>
                                        <div className='community-box-title'>
                                            <h5>Github</h5>
                                            <p >Open Source &amp; Commnit Code</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='community-list-col'>
                                    <div className='community-twitter'>
                                    <i class="bi bi-twitter icon" ></i>
                                        <div className='community-box-title'>
                                    <h5>Twitter</h5>
                                    <p>Latest News &amp; Update</p>
                                    </div>
                                    </div>
                                </Col>
                                <Col md={4} className='community-list-col'>
                                    <div className='community-telegram'>
                                    <i class="bi bi-telegram icon" ></i>
                                        <div className='community-box-title'>
                                    <h5>Telegram</h5>
                                    <p>Chanel for Community</p>
                                    </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    )
}
