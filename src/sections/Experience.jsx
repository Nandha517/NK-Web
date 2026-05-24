const experiences = [

  {

    role:"Fundraiser Intern",

    company:"Live For Cause Foundation",

    duration:"Apr 2026 – May 2026",

    logo:"/NK-Web/assets/images/logos/liveforcause.jpg",

    description:
    "Worked on fundraising campaigns, donor outreach, awareness initiatives, and stakeholder engagement activities.",

  },

  {

    role:"Capital Market Analyst Intern",

    company:"Tradeshala",

    duration:"Jul 2025 – Sep 2025",

    logo:"/NK-Web/assets/images/logos/tradeshala-logo.jpg",

    description:
    "Worked on live trading, portfolio analysis, market research, and client-facing presentations.",

  },

  {

    role:"Equity Market Analyst Intern",

    company:"RK Global Shares and Securities",

    duration:"May 2025 – Aug 2025",

    logo:"/NK-Web/assets/images/logos/rkglobal-logo.jpg",

    description:
    "Analyzed stock performance, valuation models, and risk assessment strategies.",

  },

  {

    role:"Tutor For UG Students",

    company:"NS Education Centre",

    duration:"2022 – 2024",

    logo:"/NK-Web/assets/images/logos/ns-education.jpg",

    description:
    "Provided academic tutoring and mentoring support for undergraduate students in commerce, management, and business analytics subjects.",

  },

];

function Experience(){

  return(

    <section
      id="experience"
      className="section"
    >

      <h2 className="section-title">
        Experience
      </h2>

      <div className="timeline">

        {

          experiences.map((exp,index)=>(

            <div
              className="timeline-item"
              key={index}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-card glass">

                <div className="exp-top">

                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="company-logo"
                  />

                  <div>

                    <h3>{exp.role}</h3>

                    <h4>{exp.company}</h4>

                    <p className="exp-duration">
                      {exp.duration}
                    </p>

                  </div>

                </div>

                <p className="exp-desc">
                  {exp.description}
                </p>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Experience;