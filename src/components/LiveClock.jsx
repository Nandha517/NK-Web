import { useEffect,useState } from "react";

function LiveClock(){

  const [time,setTime] = useState(
    new Date()
  );

  useEffect(()=>{

    const interval = setInterval(()=>{

      setTime(new Date());

    },1000);

    return ()=>clearInterval(interval);

  },[]);

  return(

    <div

      className="glass"

      style={{

        position:"fixed",

        right:"25px",

        bottom:"25px",

        padding:"14px 20px",

        zIndex:"1000",

        fontWeight:"700",
      }}

    >

      {time.toLocaleTimeString()}

    </div>

  );

}

export default LiveClock;