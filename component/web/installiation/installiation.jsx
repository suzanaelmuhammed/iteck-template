import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Installiation() {
  return (
    <div className='installation'>
      <Container>
        <div className='line'>
          <Row>
            <div className='installation-featured'>
              <span>25K+ Installation </span> and Featured on
            </div>
          </Row>
          <Row  >
            <Col md={2} className="col">
              <Link href="/">
                <a>
                  <Image className='img'
                    src="/image/1.png"
                    alt=''
                    width={104}
                    height={15}
                  />
                </a>
              </Link>
            </Col>
            <Col md={2} className="col">
              <Image className='img'
                src="/image/2.png"
                alt=''
                width={123}
                height={40}
              />
            </Col>
            <Col md={2} className="col">
              <Image className='img'
                src="/image/3.png"
                alt=''
                width={75}
                height={23}
              />
            </Col>
            <Col md={2} className="col">
              <Image className='img'
                src="/image/4.png"
                alt=''
                width={127}
                height={28}
              />
            </Col>
            <Col md={2} className="col">
              <Image className='img'
                src="/image/5.png"
                alt=''
                width={113}
                height={25}
              />
            </Col>
            <Col md={2} className="col">
              <Image className='img'
                src="/image/6.png"
                alt=''
                width={111}
                height={40}
              />
            </Col>
          </Row>
        </div>


      </Container>
    </div>
  )
}
