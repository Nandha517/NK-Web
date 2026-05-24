const certificates = [

  {
    title:"Financial Markets",
    issuer:"Yale University - Coursera",
    desc:"Understanding of global financial markets, behavioral finance, bonds, stocks, and risk management.",
    file:"/assets/docs/Certifications/Coursera/financial-markets.pdf"
  },

  {
    title:"Google Data Analytics",
    issuer:"Google - Coursera",
    desc:"Data cleaning, visualization, spreadsheets, SQL, Tableau, and analytics foundations.",
    file:"/assets/docs/Certifications/Coursera/google-data-analytics.pdf"
  },

  {
    title:"AI For Everyone",
    issuer:"DeepLearning.AI",
    desc:"AI transformation, machine learning workflows, and AI business integration.",
    file:"/assets/docs/Certifications/Coursera/ai-for-everyone.pdf"
  },

  {
    title:"Investment Banking Basics",
    issuer:"Coursera",
    desc:"Investment valuation, financial statement analysis, and corporate finance basics.",
    file:"/assets/docs/Certifications/Coursera/investment-banking.pdf"
  },

];

function Certifications(){

  return(

    <section
      id="certifications"
      className="section"
    >

      <h2 className="section-title">

        Certifications

      </h2>

      <div className="projects-grid">

        {certificates.map((cert,index)=>(

          <div
            key={index}
            className="glass project-card"
          >

            <div className="project-content">

              <h3 className="heading-md">

                {cert.title}

              </h3>

              <p
                style={{
                  color:"#38bdf8",
                  margin:"10px 0",
                  fontWeight:"600",
                }}
              >

                {cert.issuer}

              </p>

              <p className="paragraph">

                {cert.desc}

              </p>

              <div
                className="flex"
                style={{
                  gap:"100px",
                  marginTop:"50px",
                }}
              >

                <a
                  href={cert.file}
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Certificate
                </a>

                <a
                  href={cert.file}
                  download
                  className="btn btn-secondary"
                >
                  Download
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certifications;