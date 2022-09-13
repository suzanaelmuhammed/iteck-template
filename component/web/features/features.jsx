import React from 'react';
import { Row, Col, Continer, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function Features() {
  return (
    <div id='features'>
      <div className='note'>
        <span>Notero - Easy Notes App</span>
      </div>
      <div className='text-feature'>
        <h2>  Awesome <span>Features</span></h2>
      </div>
      <div className='feature-item'>
        <Row className='images-line'>
          <Col md={2} className="image-colunu">
            <Link href="#">
              <a>
                <div className='img'>
                  <Image
                    src="/image/fe1.png"
                    alt=''
                    width={124}
                    height={124}
                  />
                </div>
                <p>
                  Notes Powerful<br />
                  and Security
                </p>
              </a>
            </Link>
          </Col>
          <Col md={2} className="image-colunu">
            <a>
              <div className='img'>
                <Image
                  src="/image/fe2.png"
                  alt=''
                  width={124}
                  height={124}
                />
              </div>

              <p>
                Easy Sort, Classify<br />
                and Search
              </p>
            </a>

          </Col>
          <Col md={2} className="image-colunu">
            <a>
              <div className='img'>
                <Image
                  src="/image/fe3.png"
                  alt=''
                  width={124}
                  height={124}
                />
              </div>

              <p>
                Collaboration and<br />
                Share
              </p>
              <div className='new-image'>
                <span>NEW</span>
              </div>
            </a>
          </Col>
          <Col md={2} className="image-colunu">
            <a>
              <div className='img'>
                <Image
                  src="/image/fe4.png"
                  alt=''
                  width={124}
                  height={124}
                />
              </div>

              <p>
                Quick Note In
                <br />
                Everywhere
              </p>
            </a>
          </Col>
          <Col md={2} className="image-colunu">
            <a>
              <div className='img'>
                <Image
                  src="/image/fe5.png"
                  alt=''
                  width={124}
                  height={124}
                />
              </div>

              <p>
                Write and Draw
                <br />
                on Ipad
              </p>
            </a>
          </Col>
        </Row>
      </div>

    </div>
  )
}
