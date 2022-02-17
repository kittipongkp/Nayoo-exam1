import React, { useState } from "react";

const AdsBanner = () => {
  const [show, setShow] = useState(true);

  return (
     <div className="container-xxl" style={{ position: "fixed", marginTop: 540, zIndex: 100, display : show == true ? "block" : "none", }} >
        <div className="row" style={{ marginTop: 0 }} >
          <div className='col-3' ></div>
          <div className='col-6' style={{ backgroundColor: "#C4C4C4", height: 130 }} >
          <div style={{ marginLeft: 5 }}>
             <button type="button" className="close" aria-label="Close" onClick={()=> setShow(false) }  >
                <span aria-hidden="true">X</span>
              </button>
             </div>
          </div>
          <div className='col-3' ></div>
        </div>
        <div className="row" style={{ marginTop: 10 }} >
          <div className='col-3' ></div>
          <div className='col-6' style={{ backgroundColor: "#C4C4C4", height: 130 }} ></div>
          <div className='col-3' ></div>
        </div>
     </div>
  )
};

export default AdsBanner;
