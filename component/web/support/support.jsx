import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function Support() {
  return (
    <div id='support'>
      <div className='support'>
        <section className='support-info'>
          <div className='support-baslik'>
            <h2 >Frequently Asked Question</h2>
          </div>
          <div className='support-focus-info'>
            <p>Need A  <span>Support?</span></p>
          </div>
        </section>
        <section className='support-accordion'>
          <Container>
            <Row>
              <Col md={6} className='support-col-1'>
                <Accordion>
                  <Accordion.Item eventKey="0" className='support-question' >
                    <Accordion.Header>
                    How Benefit That I Got When Choose Basic Plan?	
                    </Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='support-question'>
                    <Accordion.Header>
                    How Do I Organize My Notes?	
                    </Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='support-question'>
                    <Accordion.Header>
                    How Long For A Standard Project	
                    </Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3"  className='support-question'>
                    <Accordion.Header>
							How About Data Security &amp; NDA Agreement						
                    </Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={6} className='support-col-2'>
                <Accordion>
                  <Accordion.Item eventKey="0" className='support-question'>
                    <Accordion.Header>
							How Does Notero Store My Data?						
										</Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='support-question'>
                    <Accordion.Header>
							Does Notero Support Storing Data on iCloud?						
												</Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='support-question'>
                    <Accordion.Header>
							How Do I Change My Email or Password?						
												</Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className='support-question'>
                    <Accordion.Header>
							Can My Premium License Be Used For All Devices?						
                    </Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className='support-question'>
                    <Accordion.Header>
							Can I Lock My Note App?						
                    </Accordion.Header>
                    <Accordion.Body className='support-accordion-body'>
                    Through the collaboration with customers in discussing needs and demand, we're able to attain&nbsp;mutual understanding, gain customer trust to offer appropriate advice
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}
