import { useEffect,useState } from "react";

function ScrollProgress(){

  const [scroll,setScroll] = useState(0);

  useEffect(()=>{

    const updateScroll = ()=>{

      const current =
      window.scrollY;

      const height =
      document.body.scrollHeight -
      window.innerHeight;

      setScroll(
        (current/height)*100
      );

    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return ()=>window.removeEventListener(
      "scroll",
      updateScroll
    );

  },[]);

  return(

    <div

      style={{

        position:"fixed",

        top:"0",

        left:"0",

        width:`${scroll}%`,

        height:"4px",

        background:
        "linear-gradient(90deg,#06b6d4,#8b5cf6)",

        zIndex:"2000",
      }}

    />

  );

}

export default ScrollProgress;