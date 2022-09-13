import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="header-y">
            <section className='section-element-header'>
                <div className='header-element'>
                    <div className='header-element-wrap '>
                        <div className='header-button'>
                            <span>Special</span>
                        </div>
                        <div className='hearst-imoj'>
                            <Image 
                                src="/image/imoj_heart.png"
                                alt=""
                                width={15}
                                height={15}
                            />
                        </div>
                        <div className='header-account'>
                            <p >Get  <span>20% Discount</span>  Get for New Account</p>
                        </div>
                        <div className='header-link'>
                            <span>
                                <Link href="https://iteck.smartinnovates.com/app/app-contact">
                                    <a>Register Now</a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
