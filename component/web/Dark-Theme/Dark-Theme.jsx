import React from 'react';
import { Row, Col, Container  } from 'react-bootstrap';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleSmall, faAppleWhole,faCircle} from '@fortawesome/free-solid-svg-icons';

export default function Dark_Theme() {
  return (
    <div id='Dark-Theme'>
         <Container>
            <Row>
                <Col md ={6} className='dark-theme-animation'> 
                    <Image
                     src="/image/about_s4_img3.png"
                     alt=''
                     width={547}
                     height={531}
                    />
                </Col>
                <Col md ={6}> 
                    <div className='dark-theme-info'>
                        <div className='dark-theme-baslik'>
                            <p>Beautiful Themes</p>
                        </div>
                        <div className='dark-theme-focus-info'>
                            <h2>Focus More With <br/> <span>Dark Theme</span></h2>
                        </div>
                        <div className='dark-theme-detail'>
                            <p>Apply Notero’s elegant themes to your taste. Dark themes work excellently for those who prefer distraction-free mode.</p>
                        </div>
                        <div className='dark-theme-bilgi'>
                            <ul>
                                <li className='list-pasif'><FontAwesomeIcon icon={faCircle} className='icon'/><span>Filtering notes using matched keywords</span></li>
                                <li className='list-active'><FontAwesomeIcon icon={faCircle} className='icon'/><span>8 Beautiful themes for you select</span></li>
                                <li className='list-pasif'><FontAwesomeIcon icon={faCircle} className='icon'/><span>Save energy for your device	</span></li>
                                <li className='list-pasif'><FontAwesomeIcon icon={faCircle} className='icon'/><span>Easy to switch between light and dark mode</span></li>
                            </ul>
                        </div>
                        <div className='dark-theme-btn'>
                            <button>Discover Now</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> 
    </div>
  )
}
