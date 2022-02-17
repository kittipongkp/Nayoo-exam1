import React, {useState} from "react";

const AdsBanner = () => {

  const [show, setShow] = useState(true);

  return (
    <div className="container-xxl  position-fixed" style={{  marginTop: 100, zIndex: 100, display : show == true ? "block" : "none", }} >
    <div className="row" style={{ marginTop: 0 }} >
      <div className='col-3' style={{ backgroundColor: "#C4C4C4", height: 590 , width: 150}}> <div style={{ marginLeft: 5 }}>
         <button type="button" className="close" aria-label="Close" onClick={()=> setShow(false) }  >
            <span aria-hidden="true">X</span>
          </button>
         </div> </div>
      <div className='col-6' style={{  }} ></div>
      <div className='col-3' style={{ backgroundColor: "#C4C4C4", height: 590, width: 150 }}  >
      <div style={{ marginLeft: 5 }}>
         <button type="button" className="close" aria-label="Close" onClick={()=> setShow(false) }  >
            <span aria-hidden="true">X</span>
          </button>
         </div>
      </div>
    </div>
 </div>
  );
};

export default AdsBanner;
