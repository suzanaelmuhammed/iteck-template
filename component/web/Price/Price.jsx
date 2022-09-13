import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLock, faNoteSticky, faPaperclipVertical, faArrowRotateRight, faCloudArrowDown, fapaperclip } from '@fortawesome/free-solid-svg-icons';

export default function Price() {
    return (
        <div id='price'>
            <Container >
                <div className='price-style'>
                    <section className='price-info'>
                        <div className='price-baslik'>
                            <h2>Pricing Plan</h2>
                        </div>
                        <div className='price-focus-info'>
                            <p>Start With <span>Affordable Price</span></p>
                        </div>
                    </section>
                    <section>
                        <Row className='price-plan-row'>
                            <Col md={6} className='price-plan-colon'>
                                <div className='basic-plan'>
                                    <div className='basic-plan-header'>
                                        <div className='part-1'>
                                            <div className='img'>
                                                <Image
                                                    src="/image/price_s4_1.png"
                                                    alt=''
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div div className='text-BASIC-PLAN'>
                                                <span>
                                                    BASIC PLAN
                                                </span>
                                            </div>
                                        </div>
                                        <div className='part-2'>
                                            <h2>Free <small> / Month</small></h2>
                                        </div>
                                        <div className='part-3'>
                                            <small class="description">Free 14 days trial, you can use over 20 basic features</small>
                                        </div>
                                    </div>
                                    <div className='basic-plan-body'>
                                        <ul>
                                            <li className='available'>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'>
                                                        <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                                                    </div>
                                                    <small>Write 5 Notes On Only iOS &amp; Android</small>
                                                </div>

                                            </li>
                                            <li className='available'>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'>
                                                        <FontAwesomeIcon icon={faPaperPlane} className='icon' />
                                                    </div>
                                                    <small>Add Attachments, Tables, Codes and More To Your Notes</small>
                                                </div>
                                            </li>
                                            <li style={{opacity:".4"}}>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'><FontAwesomeIcon icon={faLock} className='icon' /></div>
                                                    <small>Protect Your Notes and Notebooks With Lock</small>
                                                </div>
                                            </li>
                                            <li style={{opacity:".4"}}>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'><FontAwesomeIcon icon={faArrowRotateRight} className='icon' /></div>
                                                    <small>Focus Mode and Dark Theme</small>
                                                </div>
                                            </li>
                                            <li style={{opacity:".4"}}>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'><FontAwesomeIcon icon={faCloudArrowDown} className='icon' /></div>
                                                    <small>Export to Text, PDF, HTML and Markdown formats</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='basic-plan-btn'>
                                        <button>Get Started Now</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}  className='price-plan-colon'>
                                <div className='premium-plan'>
                                    <div className='premium-plan-header'>
                                        <div className='part-1'>
                                            <div className='img'>
                                                <Image
                                                    src="/image/price_s4_2.png"
                                                    alt=''
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className='text-premium-plan'> <span> PREMIUM PLAN </span></div>
                                        </div>
                                        <div className='part-2'>
                                            <h2> $29  <small> / Month</small></h2>
                                        </div>
                                        <div className='part-3'>
                                            <small >Experience all premium features and only one-time payment</small>
                                        </div>
                                    </div>
                                    <div className='premium-plan-body'>
                                    <ul>
                                            <li >
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'>
                                                        <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                                                    </div>
                                                    <small>Write 5 Notes On Only iOS &amp; Android</small>
                                                </div>

                                            </li>
                                            <li >
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'>
                                                        <FontAwesomeIcon icon={faPaperPlane} className='icon' />
                                                    </div>
                                                    <small>Add Attachments, Tables, Codes and More To Your Notes</small>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'><FontAwesomeIcon icon={faLock} className='icon' /></div>
                                                    <small>Protect Your Notes and Notebooks With Lock</small>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'><FontAwesomeIcon icon={faArrowRotateRight} className='icon' /></div>
                                                    <small>Focus Mode and Dark Theme</small>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='creat-availableclass'>
                                                    <div className='notes-icon'><FontAwesomeIcon icon={faCloudArrowDown} className='icon' /></div>
                                                    <small>Export to Text, PDF, HTML and Markdown formats</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='premium-plan-btn'>
                                        <button>Get Started Now</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </div>
            </Container>
        </div >
    )
}
