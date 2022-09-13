import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Image from 'next/Image';
import Link from 'next/link';

import Accordion from 'react-bootstrap/Accordion';

export default function Note_Management() {
    return (
        <div id='Note-Management'>
            <Container>
                <Row className='note-managment-part'>
                    <Col md={6} >
                        <div className="note-managment-info">
                            <div className='note-managment-baslik'>
                                <p>Better Note Management</p>
                            </div>
                            <div className='note-managment-Focus-info'>
                                <p>Your Notes <span>Security</span></p>
                            </div>
                            <div className='note-managment-detail'>
                                <p>Automatically syncs across all your devices. You can also access and write notes without internet connection.</p>
                            </div>
                            <div className='note-managment-setting'>
                                <Container>
                                    <div className='note-managment-menu'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0" className='note-managment-menu-item' >
                                                <Accordion.Header>
                                                    Create and Save your notes with multi-media
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1" className='note-managment-menu-item'>
                                                <Accordion.Header>
                                                    Web Clipper Extension
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2" className='note-managment-menu-item'>
                                                <Accordion.Header>
                                                    Protect your note with lock
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </Container>
                            </div>
                            <div className='note-managment-btn'>
                                <Link href={"#"}>
                                    <span class="iteck-button-text">Free Register</span>
                                </Link>
                            </div>
                        </div>

                    </Col>
                    <Col md={6} className="mobile-animtion">
                        <Image
                            src="/image/2mobiles.png"
                            alt=''
                            width={653}
                            height={700}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}