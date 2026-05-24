const skills = [

  "Financial Analytics",

  "Equity Research",

  "Financial Modelling",

  "Investment Research",

  "AI & Machine Learning",

  "Python",

  "Power BI",

  "SQL",

  "Tableau",

  "Data Visualization",

  "Business Analytics",

  "Forecasting",

  "Portfolio Analysis",

  "Market Research",

  "Risk Analytics",

];

function Skills(){

  return(

    <section
      id="skills"
      className="section"
    >

      <h2 className="section-title">

        Skills & Expertise

      </h2>

      <div
        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",

          gap:"28px",

          maxWidth:"1400px",

          margin:"0 auto",

        }}
      >

        {

          skills.map((skill,index)=>(

            <div

              key={index}

              className="glass"

              style={{

                padding:"32px",

                borderRadius:"26px",

                position:"relative",

                overflow:"hidden",

                transition:"0.35s",

              }}
            >

              <div
                style={{

                  position:"absolute",

                  width:"180px",

                  height:"180px",

                  background:"rgba(56,189,248,0.07)",

                  filter:"blur(80px)",

                  borderRadius:"50%",

                  top:"-60px",

                  right:"-60px",

                }}
              />

              <div
                style={{

                  position:"relative",

                  zIndex:"2",

                }}
              >

                <h3
                  style={{

                    fontSize:"1.35rem",

                    fontWeight:"700",

                    color:"#f8fafc",

                    textAlign:"center",

                  }}
                >

                  {skill}

                </h3>

              </div>

            </div>

          ))

        }

      </div>

      <div
        style={{

          marginTop:"70px",

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(240px,1fr))",

          gap:"28px",

          maxWidth:"1200px",

          marginInline:"auto",

        }}
      >

        <div
          className="glass"
          style={{

            padding:"38px",

            borderRadius:"28px",

            textAlign:"center",

          }}
        >

          <h2
            style={{

              fontSize:"3rem",

              color:"#38bdf8",

              marginBottom:"12px",

            }}
          >

            15+

          </h2>

          <p className="paragraph">

            Analytics & Finance Projects

          </p>

        </div>

        <div
          className="glass"
          style={{

            padding:"38px",

            borderRadius:"28px",

            textAlign:"center",

          }}
        >

          <h2
            style={{

              fontSize:"3rem",

              color:"#38bdf8",

              marginBottom:"12px",

            }}
          >

            10+

          </h2>

          <p className="paragraph">

            Certifications & Courses

          </p>

        </div>

        <div
          className="glass"
          style={{

            padding:"38px",

            borderRadius:"28px",

            textAlign:"center",

          }}
        >

          <h2
            style={{

              fontSize:"3rem",

              color:"#38bdf8",

              marginBottom:"12px",

            }}
          >

            5+

          </h2>

          <p className="paragraph">

            Research Papers & Studies

          </p>

        </div>

      </div>

    </section>

  );

}

export default Skills;