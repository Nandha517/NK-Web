const papers = [

  {

    year:"2026",

    title:"Yield Curve Modelling",

    desc:
    "Research on interest rate derivatives, term structures, and quantitative modelling techniques.",

  },

  {

    year:"2026",

    title:"Green HRM & Psychological Capital",

    desc:
    "Study on sustainable organizational performance using SEM and behavioral analytics.",

  },

  {

    year:"2025",

    title:"AI in Higher Education",

    desc:
    "Research on GenAI adoption, ethics, and digital transformation in management education.",

  },

  {

    year:"2025",

    title:"Silver Forecasting Models",

    desc:
    "Forecasting silver prices using ARIMA, GARCH, and econometric finance models.",

  },

  {

    year:"2023",

    title:"Entrepreneurship Study",

    desc:
    "Business innovation and startup ecosystem analysis among emerging entrepreneurs.",

  },

];

function Research(){

  return(

    <section
      id="research"
      className="section"
    >

      <h2 className="section-title">

        Research Timeline

      </h2>

      <div className="timeline">

        {papers.map((paper,index)=>(

          <div
            key={index}
            className="timeline-item"
          >

            <div className="glass card">

              <div

                style={{

                  display:"inline-block",

                  padding:"8px 16px",

                  borderRadius:"12px",

                  background:
                  "rgba(56,189,248,0.1)",

                  color:"#38bdf8",

                  fontWeight:"700",

                  marginBottom:"20px",
                }}

              >

                {paper.year}

              </div>

              <h3

                className="heading-md"

                style={{
                  marginBottom:"18px",
                }}

              >

                {paper.title}

              </h3>

              <p className="paragraph">

                {paper.desc}

              </p>

              <div
                className="flex"
                style={{
                  gap:"15px",
                  marginTop:"25px",
                }}
              >

                <button className="btn btn-primary">

                  View Paper

                </button>

                <button className="btn btn-secondary">

                  Download

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Research;