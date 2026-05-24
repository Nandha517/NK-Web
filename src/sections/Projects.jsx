const projects = [

  {

    title:"Commodity Investment Analytics",

    image:
    "/NK-Web/assets/images/dashboards/Commodity Investment Analytics.jpg",

    description:
    "Forecasting system for Gold & Silver Futures using quantitative finance, analytics, and AI-based predictive models.",

    tech:
    "Python • ARIMA • GARCH • LSTM • Power BI",

    paper:
    "/NK-Web/assets/docs/Projects/Silver analytics.pdf",

  },

  {

    title:"WTC 2025 Analytics",

    image:
    "/NK-Web/assets/images/dashboards/WTC 2025 Analytics.jpg",

    description:
    "Cricket analytics project using performance modelling, clustering, predictive analytics, and statistical analysis.",

    tech:
    "Python • ML • Sports Analytics • Visualization",

    paper:
    "/NK-Web/assets/docs/Projects/WTC 2025 Analysis.pdf",

  },

  {

    title:"Flight Delay Analysis",

    image:
    "/NK-Web/assets/images/dashboards/Flight Delay Analysis.jpg",

    description:
    "Operational and statistical analysis of Indian metro flight delays using data analytics and visualization.",

    tech:
    "Python • Excel • Tableau • Analytics",

    paper:
    "/NK-Web/assets/docs/Projects/Analysis of Flight Delays.pdf",

  },

  {

    title:"Forecasting ITC Stock Prices",

    image:
    "/NK-Web/assets/images/dashboards/Forecasting ITC Stock Prices.jpg",

    description:
    "Predictive stock price forecasting project comparing financial time-series models and AI techniques.",

    tech:
    "ARIMA • ANN • Financial Forecasting • AI",

    paper:
    "/NK-Web/assets/docs/Projects/Forecasting ITC Stock Prices.pdf",

  },

];

function Projects(){

  return(

    <section
      id="projects"
      className="section"
    >

      <h2 className="section-title">

        Projects

      </h2>

      <div className="projects-grid">

        {

          projects.map((project,index)=>(

            <div

              key={index}

              className="glass project-card"

            >

              <img

                src={project.image}

                alt={project.title}

                className="project-image"

              />

              <div className="project-content">

                <h3 className="heading-md">

                  {project.title}

                </h3>

                <p className="paragraph">

                  {project.description}

                </p>

                <p
                  style={{

                    color:"#38bdf8",

                    fontWeight:"700",

                    marginBottom:"24px",

                  }}
                >

                  {project.tech}

                </p>

                <div
                  style={{

                    display:"flex",

                    gap:"16px",

                    flexWrap:"wrap",

                  }}
                >

                  <a

                    href={project.paper}

                    target="_blank"

                    rel="noreferrer"

                    className="btn btn-primary"

                  >

                    View Paper

                  </a>

                  <a

                    href={project.paper}

                    download

                    className="btn btn-secondary"

                  >

                    Download

                  </a>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Projects;