import React from 'react'

const Pricing = () => {
  return (
    <>

      <section className="top-menu">
          <div className="topcorner_logo"><a href=""><img className="logo" src="Assets/slinker_logo.png"/></a></div>
      </section>


    <section className="pricing_plan">

        <div className="pricing1 py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h3 className="mt-3 pricing_title mb-1">Simple Pricing<br /> for everyone</h3>
                        <h6 className="pricing_subtitle">Choose the Right Plan for you</h6>
                        <div className="free-months py-5">
                            <img className="img-fluid" src="Assets/Get 2 months for free.svg" alt=""/>
                        </div>
                        <div className="switcher-box mt-4 d-flex align-items-center justify-content-center">
                            <span className="font-14 font-weight-medium">MONTHLY</span>
                            <div className="onoffswitch position-relative mx-2">
                                <input type="checkbox" name="onoffswitch1" className="onoffswitch-checkbox d-none" id="myonoffswitch1"/>
                                <label className="onoffswitch-label d-block overflow-hidden" htmlFor="myonoffswitch1">
                                        <span className="onoffswitch-inner d-block"></span>
                                        <span className="onoffswitch-switch d-block bg-circle position-absolute"></span>
                                    </label>
                            </div>
                            <span className="font-14 font-weight-medium">YEARLY</span>
                        </div>
                    </div>
                </div>
                <div className="row py-5 mt-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <h5 className="mt-3 mb-1 font-weight-bold">BASIC</h5>
                                <h6 className="subtitle font-weight-normal"> Updates will be Made within 3 to 5 Business days.
                                </h6>
                                <div className="pricing my-3">
                                    <sup>MAD</sup>
                                    <span className="monthly display-5">1600</span>
                                    <span className="yearly display-5">240</span>
                                    <small className="monthly">/mo</small>
                                    <small className="yearly">/yr</small>
                                    <span className="d-block"> <span className="font-weight-medium">TTC</span>
                                    </span>
                                </div>
                                <ul className="list-inline">
                                    
                                    <li className="d-block py-2">Adding New Pages (2 Pages/Month)</li>
                                    <li className="d-block py-2">Adding New Posts (4 Posts/Month)</li>
                                    <li className="d-block py-2">Updating Content (Up To 10 updates/Month) </li>
                                   
                                    <li className="d-block py-2">Page Design & layout updates (Once per page/Month)</li>
                                    
                                    <li className="d-block py-2">images/photos editing, processing, and uploading (Up to 5)</li>
                                    <li className="d-block py-2">Support Live Chat, Emails & Phone Calls ( 1 Hour/Month)</li>
                                    
                                    
                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Start Free Trial</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <span className="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span>
                                <h5 className="mt-3 mb-1 font-weight-bold">Pro</h5>
                                <h6 className="subtitle font-weight-normal">Updates will be made within 1 to 2 days (Including Weekends)</h6>
                                <div className="pricing my-3">
                                    <sup>MAD</sup>
                                    <span className="monthly display-5 green-color ">2600</span>
                                    <span className="yearly display-5 green-color">400</span>
                                    <small className="monthly">/mo</small>
                                    <small className="yearly">/yr</small>
                                    <span className="d-block"> <span className="font-weight-medium">TTC</span> 
                                    </span>
                                </div>
                                <ul className="list-inline">
                                    <li className="d-block py-2">Adding New Pages (Up to 10 Pages)</li>
                                    <li className="d-block py-2">Adding New Posts (Up to 12 Posts/Month)</li>
                                    <li className="d-block py-2">Updating Content (Unlimited) </li>
                                    <li className="d-block py-2">Page Design & layout updates (Up to 5 Pages/Month)</li>
                                    <li className="d-block py-2">images/photos editing, processing, and uploading (Up to 15)</li>
                                    <li className="d-block py-2">Support Live Chat, Emails & Phone Calls (1 Hour/Week)</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Start Free Trial</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <h5 className="mt-3 mb-1 font-weight-bold">GROWING</h5>
                                <h6 className="subtitle font-weight-normal">For newbies in affiliate marketing</h6>
                                <div className="pricing my-3">
                                    <sup>$</sup>
                                    <span className="monthly display-5">58</span>
                                    <span className="yearly display-5">600</span>
                                    <small className="monthly">/mo</small>
                                    <small className="yearly">/yr</small>
                                    <span className="d-block">Save <span className="font-weight-medium">$50</span> a Year
                                    </span>
                                </div>
                                <ul className="list-inline">
                                    <li className="d-block py-2">1 Website</li>
                                    <li className="d-block py-2">500 Pages per website</li>
                                    <li className="d-block py-2">Find Amazon broken products</li>
                                    <li className="d-block py-2">Find missing Affiliate tags</li>
                                    <li className="d-block py-2">Limited page checks</li>
                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Start Free Trial</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-12 text-center ">
                <h3 className="mt-3 pricing_title mb-1">You can choose number of pages <br/> instead of monthlty subscription
                </h3>
                <h6 className="pricing_subtitle py-3">Choose the Right Plan for you</h6>
            </div>
            <div className="col-lg-12 text-center rangeslider">

                <div className="__range __range-step __range-step-popup">
                    <input id="jribo" defaultValue="1" type="range" max="4" min="1" step="1" list="ticks2" list="pango"/>
                    <div id="slider-thumb"></div>
                    <datalist id="ticks2">
                            <option defaultValue="1">5$</option>
                            <option defaultValue="2">10$</option>
                            <option defaultValue="3">15$</option>
                            <option defaultValue="4">20$</option>
                        </datalist>

                    <output className="__range-output-square"></output>
                </div>
                <div className="pango">
                    <span>3 Pages</span>
                    <span>20 Pages</span>
                    <span>100 Pages</span>
                    <span>Unlimited <br/> Pages</span>
                </div>



            </div>
            <div className="col-lg-12 text-center select-btn pt-5  ">
                <a href="#" className="btn ">
                        Select
                    </a>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-12 text-center ">
                <h3 className="mt-3 pricing_title mb-1">All Plans Include</h3>
                <h6 className="pricing_subtitle py-3">Choose the Right Plan for you</h6>
            </div>
        </div>

    </section>

    <section className="include_cards py-5">
        <div className="container">
            <div className="  row justfy-centent-center">
                <div className="col-lg-3 col-md-4 col-sm-6 d- ">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex ">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/> Site Audit Reports</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card " style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/> Site Audit Reports</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/> Site Audit Reports</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/>Site Audit Reports</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-4 row justfy-centent-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/> Site Audit Reports</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/> Site Audit Reports</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/> Site Audit Reports</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card" style={{width: '14rem'}}>
                        <div className="card-body d-flex">

                            <p className="card-text align-items-center d-flex justify-content-center">Unlimited <br/>Site Audit Reports</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="faq">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center ">
                    <h3 className="mt-3 pricing_title mb-1">Frequently Asked Questions</h3>
                    <h6 className="pricing_subtitle py-3">If you are heastating, do not worry - we are here to explain <br/> ecrything you mihgt want to know, Let us help!</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 py-5">
                    <details id="details_text">
                        <summary id="summary_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit? </summary>
                        <p>
                            If you are heastating, do not worry - we are here to explain <br/> ecrything you mihgt want to know, Let us help!
                        </p>
                    </details>
                    <details>
                        <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit? </summary>
                        <p>
                            If you are heastating, do not worry - we are here to explain <br/> ecrything you mihgt want to know, Let us help!
                        </p>
                    </details>
                    <details>
                        <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit? </summary>
                        <p>
                            If you are heastating, do not worry - we are here to explain <br/> ecrything you mihgt want to know, Let us help!
                        </p>
                    </details>
                    <details>
                        <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit? </summary>
                        <p>
                            If you are heastating, do not worry - we are here to explain <br/> ecrything you mihgt want to know, Let us help!
                        </p>
                    </details>
                </div>
            </div>
        </div>

    </section>
    <section className="contact_rectangle">
        <div className="container">
            <div className="row text-center rectangle  ">
                <div className="col-lg-9 col-sm-12 align-middle ">

                    <h3 className="">Feel free to Contact us </h3>

                    <h6 className="">Check our Contact page!</h6>

                </div>
                <div className="col-lg-3 col-sm-12 pt-4 ">
                    <a href="#" className="btn btn-style ">
                            Contact us
                        </a>
                </div>
            </div>
        </div>

        </section>
        <div className="empty"></div>
    </>
  )
}

export default Pricing
