import { useState, useEffect } from "react";

function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {

        const top = window.scrollY;

        const offset = section.offsetTop - 120;

        const height = section.offsetHeight;

        const id = section.getAttribute("id");

        if (
          top >= offset &&
          top < offset + height
        ) {
          setActive(id);
        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <nav className="navbar">

      {/* LEFT SIDE */}

      <div className="nav-left">

        <a
          href="#home"
          className="logo-link"
        >

          <h1 className="logo">

            <span className="logo-blue">
              Nan
            </span>

            <span className="logo-cyan">
              dha
            </span>

          </h1>

        </a>

      </div>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        <a
          href="#about"
          className={
            active === "about"
              ? "active-nav"
              : ""
          }
        >
          About
        </a>

        <a
          href="#skills"
          className={
            active === "skills"
              ? "active-nav"
              : ""
          }
        >
          Skills
        </a>

        <a
          href="#experience"
          className={
            active === "experience"
              ? "active-nav"
              : ""
          }
        >
          Experience
        </a>

        <a
          href="#education"
          className={
            active === "education"
              ? "active-nav"
              : ""
          }
        >
          Education
        </a>

        <a
          href="#projects"
          className={
            active === "projects"
              ? "active-nav"
              : ""
          }
        >
          Projects
        </a>

        <a
          href="#research"
          className={
            active === "research"
              ? "active-nav"
              : ""
          }
        >
          Research
        </a>

        <a
          href="#gallery"
          className={
            active === "gallery"
              ? "active-nav"
              : ""
          }
        >
          Gallery
        </a>

        <a
          href="#blog"
          className={
            active === "blog"
              ? "active-nav"
              : ""
          }
        >
          Blog
        </a>

        <a
          href="#contact"
          className={
            active === "contact"
              ? "active-nav"
              : ""
          }
        >
          Contact
        </a>

      </div>

    </nav>

  );

}

export default Navbar;