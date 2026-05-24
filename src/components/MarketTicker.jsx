const marketData = [

  {
    name:"NIFTY 50",
    value:"24,850.20",
    change:"+0.82%",
    color:"#22c55e",
  },

  {
    name:"SENSEX",
    value:"81,320.44",
    change:"+0.71%",
    color:"#22c55e",
  },

  {
    name:"BANK NIFTY",
    value:"54,220",
    change:"+1.12%",
    color:"#22c55e",
  },

  {
    name:"RELIANCE",
    value:"₹2,980",
    change:"-0.44%",
    color:"#ef4444",
  },

  {
    name:"TCS",
    value:"₹4,120",
    change:"+0.92%",
    color:"#22c55e",
  },

  {
    name:"INFOSYS",
    value:"₹1,682",
    change:"+0.51%",
    color:"#22c55e",
  },

  {
    name:"HDFC BANK",
    value:"₹1,744",
    change:"-0.14%",
    color:"#ef4444",
  },

  {
    name:"ICICI BANK",
    value:"₹1,280",
    change:"+1.31%",
    color:"#22c55e",
  },

  {
    name:"BITCOIN",
    value:"$108,000",
    change:"+2.1%",
    color:"#22c55e",
  },

];

function MarketTicker(){

  return(

    <div

      style={{

        position:"fixed",

        top:"76px",

        width:"100%",

        overflow:"hidden",

        background:"rgba(2,6,23,0.92)",

        borderBottom:
        "1px solid rgba(255,255,255,0.08)",

        zIndex:"999",

        whiteSpace:"nowrap",
      }}

    >

      <div

        style={{

          display:"inline-block",

          padding:"14px 0",

          animation:"tickerMove 35s linear infinite",
        }}

      >

        {[...marketData,...marketData].map((item,index)=>(

          <span

            key={index}

            style={{

              marginRight:"60px",

              fontWeight:"700",

              fontSize:"0.95rem",
            }}

          >

            <span
              style={{
                color:"#38bdf8",
                fontWeight:"800",
              }}
            >

              {item.name}

            </span>

            {" "}

            <span
              style={{
                color:"white",
              }}
            >

              {item.value}

            </span>

            {" "}

            <span
              style={{
                color:item.color,
              }}
            >

              {item.change}

            </span>

          </span>

        ))}

      </div>

    </div>

  );

}

export default MarketTicker;