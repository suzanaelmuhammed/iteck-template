import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faRotate, faTextWidth } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap';

import { IconName } from "react-icons/ai";

import Link from 'next/link';

export default function Creative() {
  return (
    <div id='creative'>
      <section>
        <div className='wave-image' >
          <Image
            src="/image/about_s4_wave.png"
            alt=''
            layout='fill'
          />
        </div>
      </section>
      <section>
        <div className='creat'>
          <Image className='img'
            src="/image/about_s4_lines.png"
            alt=''
            layout='fill'
          />
        </div>
        <div className='creativ-row-part'>
          <div className='ipad-creativ'>
            <Container>
              <Row>
                <Col md={6} className='ipad-img-column' >
                  <div className='img'>
                    <Image
                      src="/image/ipad.png"
                      alt=''
                      width={520}
                      height={400}
                    />
                  </div>

                </Col>
                <Col md={6} className='ipad-info-column'>
                  <div className='ipad-note-baslik'>
                    <p >Notero - Easy Notes App</p>
                  </div>
                  <div className='ipad-note-info'>
                    <p>The Notero For  <span>Creatives</span></p>
                  </div>
                  <div className='ipad-note-detay'>
                    <p>Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc</p>
                  </div>
                  <div className='ipad-note-transactions'>
                   <ul>
                      <li><button className='icon-arka'><FontAwesomeIcon icon={faTag} className="icon"/></button><span>Filtering notes using matched keywords</span></li>
                      <li><button className='icon-arka'><FontAwesomeIcon icon={faRotate} className="icon"/></button><span>Automatically sync in real time	</span></li>
                      <li><button className='icon-arka'><FontAwesomeIcon icon={ faTextWidth} className="icon"/></button><span>Complete note editor with rich text options	</span></li>
                    
                   </ul>
                  </div>
                  <div className='ipad-note-btn'>
                      <button>
                        <Link href={"#"}>
                        <span class="iteck-button-text">	Free Register	</span>
                        </Link>
                      </button>
                  </div>

                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}