import React from 'react'
import './Rotation2.css';
import Button from 'react-bootstrap/Button';
function Rotation2() {
  return (
    <div className="main">
    <section className="bg-dark">
      <article className="orbit">
        <div className="orbit-desktop">
          <div className="orbit-system">
              <div className="orbit-text">
                  <div className="orbit-text-inner">
                      <h1 className="orbit-h1">
                        <span style={{color: '#f16d36'}}>Collective </span>
                         Strength. Accelerated 
                        <span style={{color: '#1d4d95'}}> Growth</span>
                        .
                      {/* <span className="headline-reg">&reg;</span> */}
                      </h1>
                      <hr/>
                      <p className="small2">
                        SVN<span className='reg'>&reg; </span>
                      delivers commercial real estate brokerage solutions that accelerate client growth through the power of shared data, knowledge, and opportunities.
                      </p>
                      <Button variant="outline-dark" className='btn-rotation'>FIND PROPERTIES</Button>
                  </div>
              </div>

              <div className="background-cul">
                  <img decoding="async" src="svn_properties.svg" className="frame"/>
              </div>

              <div className="orbit-container">
                  <div className="orbit-bttn">
                      <div className="animation-investor">
                          <div className="parent-circle">
                              <div className="line"></div>
                              <img decoding="async" className="child-investor" src="svn_investorsDot.svg"/>
                              <img decoding="async" className="child-investorRing" src="svn_investorsRings.svg"/>
                              <div className="txtContainer">
                                  <div className="threeRingTxt">
                                      <a className="dropdown-link" aria-expanded='false' id="dropdown01" href='/investors'>INVESTORS</a>
                                      <div className="dropdown-menu" aria-labelledby="dropdown01">
                                          <p>At SVN, we stand for inclusivity and equality. Our focus on collective strength means that we welcome the opportunity to work with all members of the commercial real estate industry.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="orbit-bttn">
                      <div className="animation-join">
                          <div className="parent-circle">
                              <div className="line2"></div>
                              <img decoding="async" className="child-joinDot" src="svn_joinDot.svg"/>
                              <img decoding="async" className="child-joinRing" src="svn_joinRings.svg"/>
                              <div className="txtContainer2">
                                  <div className="twoRingtxt">
                                      <a className="dropdown-link" aria-expanded='false' id="dropdown02">JOIN SVN</a>
                                      <div className="dropdown-menu" aria-labelledby="dropdown02">
                                          <p>At SVN, we drive innovation and acceleration within the commercial real estate industry. Together with our clients, colleagues, and communities we are building a force that together is driving our industry forward.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="orbit-bttn">
                      <div className="animation-occupiers">
                          <div className="parent-circle">
                              <div className="line3"></div>
                              <img decoding="async" className="child-occupiersDot" src="svn_occupiersDot.svg"/>
                              <div className="txtContainer3">
                                  <div className="txtOccupiers">
                                      <a className="dropdown-link" aria-expanded='false' id="dropdown03" href='/occupiers'>OCCUPIERS</a>
                                      <div className="dropdown-menu" aria-labelledby="dropdown03">
                                          <p>At SVN, we believe in open and transparent communication. We encourage diversity of thoughts and ideas from our colleagues and our community members.</p>
                                          </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="arrow-orbit">
                  <img decoding="async" src="svn_arrow(2).svg" className="img-arow"/>
              </div>
          </div>
        </div>

        <div className="mob-orbit">
          <div className="mob-title-container">
              <div className="orbit-mob-title">
                  <div className="orbit-mob-title-inner">
                      <div className="text-center-mob">
                          <h1 className='orbit-h1'>
                          <span style={{color: '#f16d36'}}>Collective </span>
                         Strength. Accelerated 
                        <span style={{color: '#1d4d95'}}> Growth</span>
                        .
                          </h1>
                      </div>
                  </div>
                  <div className="arrow-orbit-mob">
                  <img decoding="async" src="svn_arrow(2).svg" className="img-arow-mob"/>
              </div>
              </div>

          </div>

          {/* <div className="orbit-container2-mob">
              <div className="con2-row">
                  <div className="col-row">
                      <p>
                      SVN <sup>&reg; </sup> was founded on the belief that proactively cooperating and collaborating with the global commercial real estate community is the right thing to do for our clients and the best way to ensure maximum value for a property. We’ve expanded this ideology to include a Shared Value Network <sup>&reg; </sup>  approach across all our service lines, offices, and the communities where our Advisors live and work.
                      </p>
                      <p>
                          The SVN<sup>&reg;</sup> Shared Value Network encompasses our ecosystem of clients, colleagues, and communities, where together, we create greater value through openness, inclusivity and innovation.
                      </p>

                      <h4>Inclusive</h4>
                      <p>At SVN, we stand for inclusivity and equality. Our focus on collective strength means that we welcome the opportunity to work with all members of the commercial real estate industry.</p>
                      <h4>Innovative</h4>
                      <p>At SVN, we drive innovation and acceleration within the commercial real estate industry. Together with our clients, colleagues, and communities we are building a force that together, is driving our industry forward.</p>
                      <h4>Open</h4>
                      <p>At SVN, we believe in open and transparent communication. We encourage diversity of thoughts and ideas from our colleagues and our community members. </p>
                  </div>
              </div>
          </div> */}
        </div>
      </article>
      <article className='play-container'>
        <h2>The SVN Difference</h2>
        <p>
            PLAY VIDEO
        </p>
        <button className='play-btn-con'>
            <img decoding='async' src='video-btn.svg'/>
        </button>
        <div className='connector-line-con'></div>
      </article>
    </section>
  </div>
  )
}

export default Rotation2