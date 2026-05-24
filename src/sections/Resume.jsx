function Resume(){

  return(

    <section
      id="resume"
      className="section"
    >

      <h2 className="section-title">

        Resume

      </h2>

      <div

        className="glass card"

        style={{

          maxWidth:"900px",

          margin:"auto",

          textAlign:"center",
        }}

      >

        <h3

          className="heading-md"

          style={{
            marginBottom:"20px",
          }}

        >

          Nandha Kumar T Resume

        </h3>

        <p

          className="paragraph"

          style={{
            marginBottom:"35px",
          }}

        >

          MBA Finance | Financial Analytics |
          AI Research | Investment Intelligence

        </p>

        <div
          className="flex"
          style={{
            justifyContent:"center",
            gap:"20px",
            flexWrap:"wrap",
          }}
        >

          <a

            href="/NK-Web/assets/docs/Nandha Kumar TSM Resume.pdf"

            target="_blank"

            className="btn btn-primary"

          >

            View Resume

          </a>

          <a

            href="/NK-Web/assets/docs/Nandha Kumar TSM Resume.pdf"

            download

            className="btn btn-secondary"

          >

            Download PDF

          </a>

        </div>

      </div>

    </section>

  );

}

export default Resume;