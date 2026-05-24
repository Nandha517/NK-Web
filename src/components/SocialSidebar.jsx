import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function SocialSidebar() {

  return (

    <div
      style={{
        position: "fixed",
        left: "25px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >

      <a
        href="https://www.linkedin.com/in/nandha-kumar-t-825807213"
        target="_blank"
      >
        <FaLinkedin color="#38bdf8" size={24} />
      </a>

      <a
        href="https://github.com/"
        target="_blank"
      >
        <FaGithub color="#38bdf8" size={24} />
      </a>

      <a
        href="mailto:nanthakumart517@gmail.com"
      >
        <FaEnvelope color="#38bdf8" size={24} />
      </a>

    </div>

  );

}

export default SocialSidebar;