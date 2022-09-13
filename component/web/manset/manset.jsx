import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faCirclePlay, faRotate, faCreditCard } from '@fortawesome/free-solid-svg-icons';


export default function Body() {
    return (

        <div id='manset'  >
            <div className='animate'>
                <Container >
                    <Row>
                        <Col className='info'>
                            <div className='note-baslik'>
                                <p className='iteck-heading'>Notero - Easy Notes App</p>
                            </div>
                            <div className='note-info'>
                                <p iteck-heading>Note <span>Your Everything</span> In One App</p>
                            </div>
                            <div className='note-detay'>
                                <p>No coding required to make customizations. The live customizer has everything your marketing need.</p>
                            </div>
                            <div className='elemt-button'>
                                <div className='download-btn'>
                                    <button>
                                        <Link href="https://www.apple.com/app-store/">
                                            <p><FontAwesomeIcon icon={faAppleWhole} className='icon' /><span>Download App</span></p>
                                        </Link>
                                    </button>
                                </div>
                                <div className='play-btn'>
                                    <button>
                                        <Link href="https://www.apple.com/app-store/">
                                            <div className='play'>
                                                <span className='play-icon'>
                                                    <FontAwesomeIcon icon={faCirclePlay} className='icon' />
                                                </span>
                                                <span className='play-span'>View Promotion</span>
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className='iteck-icon-box'>
                                <div className='free-day'>
                                    <span className='style-icon'>
                                        <FontAwesomeIcon icon={faRotate} className='icon' />
                                    </span>
                                    <span className='free-span'>Free 14 Days Trial</span>
                                </div>
                                <div className='one-time'>
                                    <span className='style-icon'>
                                        <FontAwesomeIcon icon={faCreditCard} className='icon' />
                                    </span>
                                    <span className='time-span'>One time payment</span>
                                </div>
                            </div>
                        </Col>
                        <Col className='img'>
                            <Image
                                src="/image/header_4.png"
                                alt=""
                                width={813}
                                height={930}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}