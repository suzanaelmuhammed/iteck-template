import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {CaretDownOutlined  ,SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

import {FaRegUser} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Component_Navbar() {

    const menu1 = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://iteck.smartinnovates.com/app/app-home-onepage/">
                            One Page
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://iteck.smartinnovates.com/app/">
                            Multi Page
                        </a>
                    ),
                },
            ]}
        />
    );

    const menu2 = (
        <Menu
            items={[
                { key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action3">About</a>
                    ),},
                    { key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action4">Services</a>
                    ),},
                    { key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action5">Team</a>
                    ),},
                    { key: '4',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action6">Search</a>
                    ),},
                    { key: '5',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action7">Error Page</a>
                    ),},
            ]}
        />
    );

    const menu3 = (
        <Menu
            items={[
                { key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action3">Features</a>
                    ),},
                    { key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action4">Reviews</a>
                    ),},
                    { key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action5">Pricing</a>
                    ),},
                    { key: '4',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action6">Support</a>
                    ),},
                    { key: '5',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action7">Community</a>
                    ),},
            ]}
        />
    );

    const menu4 = (
        <Menu
        items={[
            { key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="#action3">Blog</a>
                ),},
                { key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="#action4">Single Post</a>
                ),},
        ]}
        />
    );

    const menu5 = (
        <Menu
            items={[
                {key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action3"> Portfolio</a>
                    ),},
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#action4">Single project</a>
                    ), },
            ]}
        />
    );

    return (
        <section className='section-element-body'>
            <div className='body-element'>
                <div className='body-element-navbar '>
                    <div className='navbar-element'>
                        <Navbar className='navbar' expand="lg">
                            <Container>
                                <Navbar.Brand href="#" className='navbar-logo' >
                                    <Image
                                        src="/image/iteck-logo-1.png"
                                        alt=""
                                        width={170}
                                        height={40}
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0 nav"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Dropdown overlay={menu1}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                Home
                                                    <CaretDownOutlined /> 
                                                </Space>
                                            </a>
                                        </Dropdown>
                                        <Dropdown overlay={menu2}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                Pages
                                                    <CaretDownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                        <Dropdown overlay={menu3}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <span className='hot'>HOT</span>
                                                <Space>
                                                Elements
                                                    <CaretDownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                        <Dropdown overlay={menu4}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                Blog
                                                    <CaretDownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                        <Dropdown overlay={menu5}>
                                            <a onClick={(e) => e.preventDefault()}>
                                                <Space>
                                                Project
                                                    <CaretDownOutlined />
                                                </Space>
                                            </a>
                                        </Dropdown>
                                        <Nav.Link href="#action1" style={{marginTop:"-8px"}}>Contact</Nav.Link>
                                    </Nav>
                                    <Form className="d-flex">
                                        <button className='button-icon'><FaRegUser className='icon'/></button>

                                        <Button className='button'><span>join iteck Hub </span>
                                            <FontAwesomeIcon icon={faArrowRight} className='icon' />
                                        </Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Component_Navbar;