import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <>
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><a href="index.html">Dragon betting</a></h1>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Price</a></li>          
          <li><a className="nav-link scrollto" href="#feathers">Mint</a></li>
          <li><a className="nav-link scrollto" href="#services">Roadmap</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
    
  <div className="more-snow"></div>

    <div className="web-tag mt-5">
      <div className="d-flex justify-content-center">
        <img src="assets/img/carousel/1.png"  className="web-tag5 carousel-img-item" />
        <img src="assets/img/carousel/2.png"  className="web-tag4 carousel-img-item" />
        <img src="assets/img/carousel/3.png"  className="web-tag3 carousel-img-item" />
        <img src="assets/img/carousel/4.png"  className="web-tag2 carousel-img-item" />
        <img src="assets/img/carousel/5.png"  className="web-tag1 carousel-img-item" />
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
              <img src="assets/img/carousel/5.png" className="testimonial-img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/carousel/4.png" className="testimonial-img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/carousel/3.png" className="testimonial-img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/carousel/2.png" className="testimonial-img" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/carousel/1.png" className="testimonial-img" />
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


  <main id="main">
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <p>-  Dragon Price  -</p>
        </div>
        <div className="row">

          <div className="price-responsive p-4 mt-md-0">
            <div className="box featured" data-aos="zoom-in" data-aos-delay="50">
              <h3>STAGE<span className="number"> 1</span></h3>
              <span className="nft-unit">1 ~ 2000</span><br/>
              <h4><sup>$</sup>100<span>FTM</span></h4>
            </div>
          </div>

          <div className="price-responsive p-4 mt-md-0">
            <div className="box featured" data-aos="zoom-in" data-aos-delay="50">
              <h3>STAGE<span className="number"> 2</span></h3>
              <span className="nft-unit">2000 ~ 4000</span><br/>
              <h4><sup>$</sup>150<span>FTM</span></h4>
            </div>
          </div>

          <div className="price-responsive p-4 mt-md-0">
            <div className="box featured" data-aos="zoom-in" data-aos-delay="50">
              <h3>STAGE<span className="number"> 3</span></h3>
              <span className="nft-unit">4000 ~ 6000</span><br/>
              <h4><sup>$</sup>200<span>FTM</span></h4>
            </div>
          </div>

          <div className="price-responsive p-4 mt-md-0">
            <div className="box featured" data-aos="zoom-in" data-aos-delay="50">
              <h3>STAGE<span className="number"> 4</span></h3>
              <span className="nft-unit">6000 ~ 8000</span><br/>
              <h4><sup>$</sup>250<span>FTM</span></h4>
            </div>
          </div>

          <div className="price-responsive p-4 mt-md-0">
            <div className="box featured" data-aos="zoom-in" data-aos-delay="50">
              <h3>STAGE<span className="number"> 5</span></h3>
              <span className="nft-unit">8000 ~ 10000</span><br/>
              <h4><sup>$</sup>300<span>FTM</span></h4>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <section id="feathers" className="feathers">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <p>-  MINT -</p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-1 d-flex justify-content-center order-lg-1 mt-3 mt-lg-0">
            <img src="assets/img/change.gif"  className="img-fluid"/>
          </div>
          <div className="col-lg-6 order-2 rder-lg-2 p-5">
            <div id="clockdiv">
              <div>
                <span className="days"></span>
                <div className="smalltext">Days</div>
              </div>
              <div>
                <span className="hours"></span>
                <div className="smalltext">Hours</div>
              </div>
              <div>
                <span className="minutes"></span>
                <div className="smalltext">Minutes</div>
              </div>
              <div>
                <span className="seconds"></span>
                <div className="smalltext">Seconds</div>
              </div>
            </div>

            <div className="row pt-5 text-white rounded d-flex justify-content-center">
              <div className="col-5">
                <label className="label_txt">Mint number</label>
              </div>
              <div className="col-7">
                <input id="mint_num"/>
              </div>
            </div>
            
            <div className="row">
              <h1 className="mt-4 pt-4">Total price is <span className="total-price"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FTM</h1>
            </div>
            
            <div className="row justify-content-around d-flex">
              <input type="button" className="btn col-md-4 col-12 m-2 btn-success label_txt" value="Mint" disabled id=" mint_btn" />
              <input type="button" className="btn col-md-4 col-12 m-2 btn-success label_txt" value="View" disabled id=" view_btn" />
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="services" className="services">
      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <p>-  ROADMAP  -</p>
        </div>
        <div className="row">

          <div className="col-lg-6 col-md-12">
            <div className="icon-box row justify-content-between d-flex" data-aos-delay="50" data-aos="zoom-in-left">
              <div className=" col-md-4 col-12 p-1">
                <img src="assets/img/carousel/1.png" className="roadmap-img" />
              </div>
              <div className="col-md-7 col-12 p-1">
                <h2 className="title"><a href="">2021 . 11</a></h2>
                <p className="description">-complete the art</p>
                <p className="description">-launch of website</p>
                <p className="description">-social media kick off</p>
                <p className="description">-early supporters give aways</p>
                <p className="description">-commuity building</p>
              </div>              
            </div>
          </div>

          <div className="col-lg-6 col-md-12"></div>
          <div className="col-lg-6 col-md-12"></div>

          <div className="col-lg-6 col-md-12 col-12 mt-5">
            <div className="icon-box row justify-content-between d-flex" data-aos="zoom-in-left" data-aos-delay="50">
              <div className="col-md-4 d-flex col-12 p-1">
                <img src="assets/img/carousel/2.png" className="roadmap-img" />
              </div>
              <div className="col-md-7 col-12 p-1">
                <h2 className="title"><a href="">2021 . 12</a></h2>
                <p className="description">-deploy contract(ERC721)Dragon NFT</p>
                <p className="description">-D-app launch</p>
                <p className="description">-no presale</p>
                <p className="description">-start of public sale</p>
                <p className="description">-deploy contract(ERC20)Grass Token</p>
                <p className="description">-Implement Grass token in our ecosystem</p>
                <p className="description">-Grass airdrop to all Dragon minters(5Grass/day)</p>
              </div>   
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 mt-5">

            <div className="icon-box row justify-content-between d-flex" data-aos="zoom-in-left" data-aos-delay="50">
              <div className=" col-md-4 col-12 p-1">
                <img src="assets/img/carousel/3.png" className="roadmap-img" />
              </div>
              <div className="col-md-7 col-12 p-1">
                <h2 className="title"><a href="">2022 . 1</a></h2>
                <p className="description">-Official launch Grass</p>
                <p className="description">-implement staking</p>
                <p className="description">stake Dragon get Grass(20Grass/day)</p>
                <p className="description">stake Grass get Grass(1%)</p>
                <p className="description">-Market place launch</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12"></div>
          <div className="col-lg-6 col-md-12"></div>

          <div className="col-lg-6 col-md-12 col-12 mt-5">            
            <div className="icon-box row justify-content-between d-flex" data-aos="zoom-in-left" data-aos-delay="50">
              <div className=" col-md-4 col-12 p-1">
                <img src="assets/img/carousel/4.png" className="roadmap-img" />
              </div>
              <div className="col-md-7 col-12 p-1">
                <h2 className="title"><a href="">2022 . 2</a></h2>
                <p className="description">-Deploy contract for the game</p>
                <p className="description">-More buyable options in game</p>
                <p className="description">-Expand game and giveaways</p>
                <p className="description">-implements Grass in the games ecosystem</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 mt-5">
            <div className="icon-box row justify-content-between d-flex" data-aos="zoom-in-left" data-aos-delay="50">
              <div className=" col-md-4 col-12 p-1">
                <img src="assets/img/carousel/5.png" className="roadmap-img" />
              </div>
              <div className="col-md-7 col-12 p-1">
                <h2 className="title"><a href="">2022 .3</a></h2>
                <p className="description">-Start betting Game</p>
                <p className="description">when enter game, devote some Grass. 
                  If you win game, you will receive many Grass.</p>
                <p className="description">-Have fun!  It's surprise!</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12"></div>

        </div>
      </div>
    </section>

    <section id="team" className="team">

      <div className="container">
        <div className="section-title" data-aos="zoom-out">
          <p>Our Hardworking Team</p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img">
                <img src="assets/image/2.png" className="img-fluid" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Crypto Expert</h4>
                <span>Artem grinski</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/image/3.png" className="img-fluid" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Designer Mage</h4>
                <span>Ivan Popov</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/image/4.png" className="img-fluid" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Developer Mage</h4>
                <span>Sergey petrov</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/image/5.png" className="img-fluid" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Marketing / Art Mage</h4>
                <span>Milind jalgaonkar</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  </main>

  <footer id="footer">
    <div className="container">
      <h3>Dragon</h3>
      <div className="social-links">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>Dragon</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">Ivan</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</>
  );
}

export default App;
