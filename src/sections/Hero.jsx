function Hero(){

  return(

    <section
      id="home"
      className="section hero"
    >

      <div>

        <p className="hero-sub">
          MBA Finance | AI Analytics
        </p>

        <h1 className="hero-title">

          Building The Future Of

          <span>
            Intelligent Finance
          </span>

        </h1>

        <p className="hero-desc">

          MBA Finance student passionate about
          AI-powered financial intelligence,
          investment research, analytics,
          and data-driven business systems.

        </p>

        <div className="hero-buttons">

          <a
            href="/assets/docs/Nandha Resume.pdf"
            className="btn btn-primary"
            target="_blank"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="btn btn-secondary"
          >
            Explore Projects
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/assets/images/nandha-profile.jpg"
          alt="Nandha Kumar"
        />

      </div>

    </section>

  );

}

export default Hero;