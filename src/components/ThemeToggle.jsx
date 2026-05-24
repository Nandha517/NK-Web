import { useEffect,useState } from "react";

function ThemeToggle(){

  const [dark,setDark] = useState(true);

  useEffect(()=>{

    if(dark){

      document.body.style.background =
      "#020617";

      document.body.style.color =
      "white";

    }

    else{

      document.body.style.background =
      "#f8fafc";

      document.body.style.color =
      "#020617";

    }

  },[dark]);

  return(

    <button

      onClick={()=>setDark(!dark)}

      className="btn btn-primary"

      style={{

        position:"fixed",

        right:"25px",

        top:"120px",

        zIndex:"1000",
      }}

    >

      {dark ? "☀️" : "🌙"}

    </button>

  );

}

export default ThemeToggle;