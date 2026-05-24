function Blogs(){

  const blogPosts = [

    {

      title:
      "Real Lessons from My Stock Market Internship as an MBA Finance Student",

      date:"Mar 3",

    },

    {

      title:
      "Mastering Portfolio Optimization: The Art of Balancing Risk and Return",

      date:"Nov 5",

    },

    {

      title:
      "Predicting Silver Price Trends Using AI and Time Series Models",

      date:"Oct 28",

    },

  ];

  return(

    <section
      id="blogs"
      className="section"
    >

      <h2 className="section-title">

        NK Writes

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

            width:"320px",

            height:"320px",

            background:"rgba(56,189,248,0.06)",

            filter:"blur(120px)",

            borderRadius:"50%",

            top:"-100px",

            right:"-100px",

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

              fontWeight:"700",

              marginBottom:"18px",

              letterSpacing:"2px",

            }}
          >

            BLOGS • INSIGHTS • FINANCE

          </p>

          <h1
            style={{

              fontSize:"4.5rem",

              lineHeight:"1.1",

              fontWeight:"900",

              marginBottom:"60px",

              maxWidth:"800px",

            }}
          >

            WELCOME TO

            <span
              style={{

                display:"block",

                background:
                "linear-gradient(90deg,#38bdf8,#818cf8,#8b5cf6)",

                WebkitBackgroundClip:"text",

                WebkitTextFillColor:"transparent",

              }}
            >

              NK WRITES.

            </span>

          </h1>

          <div
            style={{

              display:"flex",

              flexDirection:"column",

              gap:"38px",

              marginBottom:"60px",

            }}
          >

            {

              blogPosts.map((post,index)=>(

                <div

                  key={index}

                  style={{

                    display:"flex",

                    justifyContent:"space-between",

                    alignItems:"center",

                    gap:"30px",

                    paddingBottom:"22px",

                    borderBottom:
                    "1px solid rgba(255,255,255,0.06)",

                  }}
                >

                  <h3
                    style={{

                      fontSize:"1.6rem",

                      lineHeight:"1.6",

                      fontWeight:"500",

                      maxWidth:"1000px",

                    }}
                  >

                    {post.title}

                  </h3>

                  <span
                    style={{

                      color:"#94a3b8",

                      minWidth:"80px",

                      textAlign:"right",

                      fontSize:"1rem",

                    }}
                  >

                    {post.date}

                  </span>

                </div>

              ))

            }

          </div>

          <a

            href="http://nseducationcentrecom.wordpress.com"

            target="_blank"

            rel="noreferrer"

            className="btn btn-primary"

          >

            Visit My Blog Site

          </a>

        </div>

      </div>

    </section>

  );

}

export default Blogs;