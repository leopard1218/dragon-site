function Hero() {
  return (  
            <>  
            
                <section id="hero" className="d-flex flex-column justify-content-end align-items-center">

                    <div className="more-snow"></div>

                    <div className="web-tag mt-5">
                    <div className="d-flex justify-content-center">
                        <img src="assets/img/carousel/1.png" alt="" className="web-tag5 carousel-img-item" />
                        <img src="assets/img/carousel/2.png"  alt="" className="web-tag4 carousel-img-item" />
                        <img src="assets/img/carousel/3.png"  alt="" className="web-tag3 carousel-img-item" />
                        <img src="assets/img/carousel/4.png"  alt="" className="web-tag2 carousel-img-item" />
                        <img src="assets/img/carousel/5.png"  alt="" className="web-tag1 carousel-img-item" />
                    </div>
                    </div>

                    <div className="stage">
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    </div>
                    <div className="container mobile-btn">
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <img src="assets/img/carousel/5.png"  alt="" className="testimonial-img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <img src="assets/img/carousel/4.png"  alt="" className="testimonial-img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <img src="assets/img/carousel/3.png"  alt="" className="testimonial-img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <img src="assets/img/carousel/2.png" alt="" className="testimonial-img" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <img src="assets/img/carousel/1.png" alt="" className="testimonial-img" />
                            </div>
                        </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    </div>
                    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                    <g className="wave1">
                        <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(51, 12, 70, 0.1)"/>
                    </g>
                    <g className="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(97, 29, 150, 0.2)"/>
                    </g>
                    <g className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#5e2589"/>
                    </g>
                    </svg>
                </section>  
            </>
        )  
      
}  

export default Hero  