const education = [

  {

    degree:"Master of Business Administration,(Finance & Analytics)",

    institution:"Thiagarajar School of Management",

    year:"2024 – 2026",

    desc:
    "Specialization in Finance, Analytics, and AI-driven business systems.",

    logo:"/assets/images/logos/tsm-logo.jpg",

  },

  {

    degree:"Bachelor of Business Administration",

    institution:"NGM College of Arts and Sciences, Pollachi",

    year:"2021 – 2023",

    desc:
    "Focused on management fundamentals, accounting, and business analytics.",

    logo:"/assets/images/logos/ngm-logo.jpg",

  },

  {

    degree:"High School",

    institution:"PKD School, Pollachi",

    year:"2020 – 2021",

    desc:
    "Commerce stream with strong foundation in economics and business studies.",

    logo:"/assets/images/logos/pkd-logo.jpg",

  },

];

function Education(){

  return(

    <section
      id="education"
      className="section"
    >

      <h2 className="section-title">

        Education

      </h2>

      <div className="timeline">

        {education.map((item,index)=>(

          <div
            key={index}
            className="timeline-item"
          >

            <div className="glass timeline-card">

              <div className="experience-top">

                <img
                  src={item.logo}
                  alt={item.institution}
                  className="education-logo"
                />

                <div>

                  <h3 className="heading-md">

                    {item.degree}

                  </h3>

                  <h4 className="company-name">

                    {item.institution}

                  </h4>

                  <p className="duration">

                    {item.year}

                  </p>

                </div>

              </div>

              <p className="paragraph">

                {item.desc}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Education;