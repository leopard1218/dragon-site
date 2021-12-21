function Mint() {
  return (  
      <>
        <section id="feathers" className="feathers">
          <div className="container">
              <div className="section-title" data-aos="zoom-out">
              <p>-  MINT -</p>
              </div>
              <div className="row">
              <div className="col-lg-6 order-1 d-flex justify-content-center order-lg-1 mt-3 mt-lg-0">
                  <img src="assets/img/change.gif" alt="" className="img-fluid"/>
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
                      <input id="mint_num" />
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
      </>
    )  
   
  }  
  
  export default Mint  