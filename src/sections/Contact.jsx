function Contact(){

  return(

    <section
      id="contact"
      className="section"
    >

      <h2 className="section-title">

        Contact

      </h2>

      <div className="contact-grid">

        <div className="glass contact-card">

          <h3 className="heading-md">

            Send A Message

          </h3>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="7"
              placeholder="Your Message"
            />

            <button
              type="submit"
              className="btn btn-primary"
            >

              Send Message

            </button>

          </form>

        </div>

        <div className="glass contact-card">

          <h3 className="heading-md">

            Contact Details

          </h3>

          <div className="contact-details">

            <p>

              📧

              <span>

                nanthakumart517@gmail.com

              </span>

            </p>

            <p>

              📍

              <span>

                Pollachi, Tamil Nadu, India

              </span>

            </p>

            <a

              href="https://linkedin.com/in/nandha-kumar-t-825807213"

              target="_blank"

              className="linkedin-link"

            >

              🔗

              <span>

                linkedin.com/in/nandha-kumar-t-825807213

              </span>

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;