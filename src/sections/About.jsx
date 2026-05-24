function About(){

  return(

    <section
      id="about"
      className="section"
    >

      <h2 className="section-title">

        About Me

      </h2>

      <div
        className="glass"
        style={{

          padding:"70px",

          borderRadius:"34px",

          maxWidth:"1400px",

          margin:"0 auto",

          position:"relative",

          overflow:"hidden",

        }}
      >

        <div
          style={{

            position:"absolute",

            width:"420px",

            height:"420px",

            background:"rgba(56,189,248,0.08)",

            filter:"blur(120px)",

            borderRadius:"50%",

            top:"-120px",

            right:"-120px",

          }}
        />

        <div
          style={{

            position:"absolute",

            width:"320px",

            height:"320px",

            background:"rgba(139,92,246,0.08)",

            filter:"blur(120px)",

            borderRadius:"50%",

            bottom:"-120px",

            left:"-120px",

          }}
        />

        <div
          style={{

            position:"relative",

            zIndex:"2",

          }}
        >

          <p
            style={{

              color:"#38bdf8",

              fontSize:"1.2rem",

              fontWeight:"700",

              marginBottom:"20px",

              letterSpacing:"1px",

            }}
          >

            MBA FINANCE • AI ANALYTICS • RESEARCH

          </p>

          <h2
            style={{

              fontSize:"3.5rem",

              lineHeight:"1.2",

              fontWeight:"900",

              marginBottom:"35px",

              maxWidth:"1000px",

            }}
          >

            Transforming Finance Through

            <span
              style={{

                background:
                "linear-gradient(90deg,#38bdf8,#818cf8,#8b5cf6)",

                WebkitBackgroundClip:"text",

                WebkitTextFillColor:"transparent",

              }}
            >

              {" "}AI, Analytics & Intelligent Decision Systems

            </span>

          </h2>

          <p
            className="paragraph"
            style={{

              fontSize:"1.15rem",

              maxWidth:"1200px",

              marginBottom:"30px",

            }}
          >

            I am Nandha Kumar T,
            an MBA Finance student at
            Thiagarajar School of Management
            with a strong passion for
            financial analytics,
            investment research,
            artificial intelligence,
            and data-driven business strategy.

          </p>

          <p
            className="paragraph"
            style={{

              fontSize:"1.1rem",

              maxWidth:"1200px",

              marginBottom:"55px",

            }}
          >

            My academic and professional journey
            revolves around integrating
            traditional financial concepts with
            modern technologies such as
            AI,
            machine learning,
            predictive analytics,
            business intelligence,
            and quantitative finance.

            I enjoy building intelligent systems
            that solve real-world business problems,
            improve financial decision-making,
            and create meaningful strategic insights.

          </p>

          <div
            style={{

              display:"grid",

              gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",

              gap:"28px",

            }}
          >

            <div
              className="glass"
              style={{

                padding:"34px",

                borderRadius:"26px",

              }}
            >

              <h3
                style={{

                  color:"#38bdf8",

                  marginBottom:"16px",

                  fontSize:"1.5rem",

                }}
              >

                Finance + AI

              </h3>

              <p className="paragraph">

                Combining financial intelligence
                with AI-powered analytics
                for smarter forecasting,
                investment research,
                and strategic business solutions.

              </p>

            </div>

            <div
              className="glass"
              style={{

                padding:"34px",

                borderRadius:"26px",

              }}
            >

              <h3
                style={{

                  color:"#38bdf8",

                  marginBottom:"16px",

                  fontSize:"1.5rem",

                }}
              >

                Research & Innovation

              </h3>

              <p className="paragraph">

                Actively working on projects related to
                stock market analytics,
                machine learning,
                business intelligence,
                financial forecasting,
                and management research.

              </p>

            </div>

            <div
              className="glass"
              style={{

                padding:"34px",

                borderRadius:"26px",

              }}
            >

              <h3
                style={{

                  color:"#38bdf8",

                  marginBottom:"16px",

                  fontSize:"1.5rem",

                }}
              >

                Career Vision

              </h3>

              <p className="paragraph">

                Aspiring to become a future-ready
                finance and analytics professional
                capable of driving intelligent,
                technology-enabled business decisions
                in modern organizations.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;