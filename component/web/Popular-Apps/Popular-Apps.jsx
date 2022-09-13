import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';

export default function Popular_Apps() {
    return (
        <div id='Popular_Apps'>
            <div className='popular_app_measurement'>
            <section>
                <div className='Popular_Apps-info' >
                    <div className='Popular_Apps-baslik'>
                        <p>One-Time Payment</p>
                    </div>
                    <div className='Popular_Apps-focus-info'>
                        <h2>Integration With <span>Popular Apps</span></h2>
                    </div>
                    <div className='Popular_Apps-detail'>
                        <p>Notero intergrate with popular apps. Help you easy to connect and collaboration</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='popular-app-image'>
                    <Container>
                        <Row className='image-satiri'>
                            <Col md={2} className='images1'>
                                <Image 
                                    src="/image/intg1.png"
                                    alt=''
                                    width={139}
                                    height={140}
                                />
                            </Col>
                            <Col md={2} className='images2'>
                                <Image 
                                    src="/image/intg5.png"
                                    alt=''
                                    width={155}
                                    height={155}
                                />
                            </Col>
                            <Col md={2} className='images3'>
                                <Image 
                                    src="/image/intg4.png"
                                    alt=''
                                    width={116}
                                    height={117}
                                />
                            </Col>
                            <Col md={2} className='images4'>
                                <Image 
                                    src="/image/intg3.png"
                                    alt=''
                                    width={170}
                                    height={170}
                                />
                            </Col>
                            <Col md={2} className='images5'>
                                <Image 
                                    src="/image/intg2.png"
                                    alt=''
                                    width={140}
                                    height={140}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            </div>
            <div className='wave-image'>
            <Image
            src="/image/about_s4_wave.png"
            alt=''
            layout='fill'
          />
            </div>
        </div>
    )
}
