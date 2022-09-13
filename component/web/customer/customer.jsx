import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Customer() {
  return (
    <div id='customer'>
      <div className='customer'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='customer-info'>
                <div className='customer-baslik'>
                  <h2 >Testimonials </h2>
                </div>
                <div className='customer-focus-info'>
                  <p>Loved From <span>Customers</span></p>
                </div>
                <div className='customer-detail'>
                  <p>Notero loved from thoudsands customer worldwide and get trusted from big companies.</p>
                </div>
                <div className='statik'>
                  <div className=' customer-download-setting'>
                    <div className='img'>
                      <Image
                        src="/image/testi_s4_ic1.png"
                        alt=''
                        width={65}
                        height={52}
                      />
                    </div>
                    <div className='oran'>
                      <p>2,5M+</p>
                    </div>
                    <div className='bilgi'>
                      <p >Downloaded and Installation</p>
                    </div>
                  </div>
                  <div className='customer-reviews-setting'>
                    <div className='img'>
                      <Image
                        src="/image/testi_s4_ic2.png"
                        alt=''
                        width={54}
                        height={52}
                      />
                    </div>
                    <div className='oran'>
                      <p>4.8/5</p>
                    </div>
                    <div className='bilgi'>
                      <p>Based on 1,258 reviews</p>
                    </div>
                  </div>
                </div>
                <div className='customer-btn'>

                  <Row>
                    <Col md={6} className='store-btn'>
                      <Link href='#'>
                        See Reviews On App Store
                      </Link>
                    </Col>
                    <Col md={{ span: 2, offset: 1 }} className='play-icon'>
                      <FontAwesomeIcon icon={faCirclePlay} className='icon' />
                    </Col >
                    <Col md={3} className='view-text'>
                      View<br/> Promotion
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6} >
              <div className='notification'>
                  <div className='card-1'>
                    <div className='img'>
                      <Image
                        src="/image/user4.png"
                        alt=''
                        width={90}
                        height={90}
                      />
                    </div>
                    <div className='adding'>
                      <div className='icon'>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                      </div>
                      <div className='mesaj'>
                        <span>“You can even send emails to Evernote and gather all of the things you need in a single place.”</span>
                      </div>
                      <div className='name'>
                          JURGEN K.  <span>/   Senior Marketing At Brator</span>
                      </div>
                    </div>
                  </div>
                  <div className='card-2'>
                    <div className='img'>
                    <Image
                        src="/image/user5.png"
                        alt=''
                        width={90}
                        height={90}
                      />
                    </div>
                    <div className='adding'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                      </div>
                      <div className='mesaj'>
                        <span>“You can even send emails to Evernote and gather all of the things you need in a single place.”</span>
                      </div>
                      <div className='name'>
                          JURGEN K.  <span>/   Senior Marketing At Brator</span>
                      </div>
                    </div>
                  </div>
                  <div className='card-3'>
                  <div className='img'>
                  <Image
                        src="/image/user6.png"
                        alt=''
                        width={90}
                        height={90}
                      />
                    </div>
                    <div className='adding'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                        <FontAwesomeIcon icon={faStar} className='icon'/>
                      </div>
                      <div className='mesaj'>
                        <span>“You can even send emails to Evernote and gather all of the things you need in a single place.”</span>
                      </div>
                      <div className='name'>
                          JURGEN K.  <span>/   Senior Marketing At Brator</span>
                      </div>
                    </div>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        
      </div>
    </div>
  )
}
