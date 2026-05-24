function AIBackground(){

  return(

    <>

      <div style={blob1}></div>

      <div style={blob2}></div>

      <div style={blob3}></div>

    </>

  );

}

const common = {

  position:"fixed",

  borderRadius:"50%",

  filter:"blur(120px)",

  zIndex:"-1",

  opacity:"0.35",

};

const blob1 = {

  ...common,

  width:"350px",

  height:"350px",

  background:"#06b6d4",

  top:"-100px",

  left:"-100px",

};

const blob2 = {

  ...common,

  width:"400px",

  height:"400px",

  background:"#8b5cf6",

  top:"40%",

  right:"-120px",

};

const blob3 = {

  ...common,

  width:"300px",

  height:"300px",

  background:"#0ea5e9",

  bottom:"-120px",

  left:"40%",

};

export default AIBackground;