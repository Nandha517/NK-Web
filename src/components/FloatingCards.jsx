function FloatingCards(){

  return(

    <>

      <div style={card1}>

        📈 NIFTY Analytics

      </div>

      <div style={card2}>

        🤖 AI Forecasting

      </div>

      <div style={card3}>

        💹 Quant Finance

      </div>

    </>

  );

}

const common = {

  position:"absolute",

  padding:"18px 24px",

  borderRadius:"20px",

  background:"rgba(15,23,42,0.7)",

  backdropFilter:"blur(14px)",

  border:"1px solid rgba(255,255,255,0.08)",

  fontWeight:"700",

  boxShadow:
  "0 10px 35px rgba(0,0,0,0.3)",

};

const card1 = {

  ...common,

  top:"10%",

  left:"0%",
};

const card2 = {

  ...common,

  top:"45%",

  right:"-10%",
};

const card3 = {

  ...common,

  bottom:"5%",

  left:"10%",
};

export default FloatingCards;