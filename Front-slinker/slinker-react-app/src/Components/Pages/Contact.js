import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="top-menu">
          <div className="topcorner_logo">
            <a href=""><img className="logo" src="Assets/Slinker logo.svg"/></a>
          </div>
        </section>
        <section className="contact">
          <div className="contact__leftbg">
            <div className="contact__text">
              <h2 className="signup__title">Leave us a message for any information.</h2>
              <p className="signup__subtitle">
                Or send email directly from you mail box.
              </p>
            </div>
          </div>
          <div className="signup__form">
            <div className="wrapper container-contact">
              <form action="#">
                <div className="form-row">
                  <div className="input-data input-data_contact">
                    <input type="text" required />
                    <div className="underline"></div>
                    <label for=""> Full Name</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-data input-data_contact">
                    <input type="text" required />
                    <div className="underline"></div>

                    <label for="">Email Address</label>
                  </div>
                </div>
                <div className="form-row textarea-row">
                  <div className="input-data input-data_contact textarea">
                    <textarea rows="8" cols="80" wrap="off" required></textarea>
                    <br />
                    <div className="underline"></div>
                    <label for="">Write your message</label>
                  </div>
                </div>

                <div className="form-btn">
                  <button type="submit" className="btn--register">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
