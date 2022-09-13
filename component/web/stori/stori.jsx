import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";

export default function Stori() {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return (
        <div id='stori'>
            <div className='stori'>
                <Container>
                    <div className='strip'>

                        <Slider autoplay={true}  {...settings}>
                            <div className='image-setting'>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/1-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/2-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/3-scaled.jpg"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/4-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/5-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div className='image-setting'>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/1-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/2-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/3-scaled.jpg"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/4-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/5-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div> <div className='image-setting'>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/1-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/2-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/3-scaled.jpg"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/4-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                            <div>
                                <Image style={{ borderRadius: "20px" }}
                                    src="/image/5-1.png"
                                    alt=''
                                    width={190}
                                    height={420}
                                />
                            </div>
                        </Slider>
                        <div className='img'>
                        <Image
                            src="/image/hand.png"
                            alt=''
                            width={450}
                            height={600}
                        />
                    </div>
                    </div>
                    

                </Container>
                <Slider {...settings}>
                </Slider>
            </div>
        </div>
    )
}
