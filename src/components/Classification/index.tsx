import React from "react";

const Cassification = () => {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-2" style={{  }}>
        <div  style={{ justifyContent: "flex-start",  display: "flex" }} >
                <div style={{ width: 150 , height: 500,  backgroundColor: '#C4C4C4', position: "absolute"}}> 
                <div  style={{ justifyContent: "center",  display: "flex", marginTop: 250  }} >
                    <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >Ads</h1></div>
                      </div>
                 </div>
         </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div style={{ margin: "auto" }}>
              <h1 style={{ textAlign: "center" }}>หมวดหมู่</h1>
            </div>
          </div>
          <div className="row">
              <div className="col-3" >
                  <div style={{ display: 'flex', justifyContent: "center",  alignItems: "center", marginRight: 10}} >
                   <img  src="/images/classification/Rectangle29.png" className="img-fluid rounded"  />
                     <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >หนังล่าสุด</h1></div>
                  </div>
              </div>
              <div className="col-3" style={{ display: 'flex', justifyContent: "center",  alignItems: "center",  }}>
                <div className="container-fluid" style={{ marginRight: 10 }} >
                <div className="row" >
                 <div className="" style={{ display: 'flex', justifyContent: "center",  alignItems: "center" }}>
                     <img  src="/images/classification/image32.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >แอคชั่น</h1></div>
              </div>
                </div>
                <div className="row" style={{marginTop: 10}} >
                    <div className="" style={{ display: 'flex', justifyContent: "center",  alignItems: "center" }}>
                         <img  src="/images/classification/Rectangle34.png" className="img-fluid rounded" />
                    <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >ซี่รีส์</h1></div>
              </div>
                </div>
                </div>
              </div>
              <div className="col-3" style={{ display: 'flex', justifyContent: "center",  alignItems: "center", }}>
              <div className="container-fluid"  style={{ marginRight: 5 }} >
                <div className="row" >
                 <div className="" style={{ display: 'flex', justifyContent: "center",  alignItems: "center" }}>
                     <img  src="/images/classification/Rectangle31.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >การ์ตูน</h1></div>
              </div>
                </div>
                <div className="row" style={{marginTop: 10}} >
                    <div className="" style={{ display: 'flex', justifyContent: "center",  alignItems: "center" }}>
                         <img  src="/images/classification/Rectangle35.png" className="img-fluid rounded" />
                    <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >อนิเมะ</h1></div>
              </div>
                </div>
                </div>
              </div>
              <div className="col-3" style={{ display: 'flex', justifyContent: "center",  alignItems: "center",  }}>
              <div className="container-fluid" style={{ marginLeft: 5 }}  >
                <div className="row" >
                 <div className="" style={{ display: 'flex', justifyContent: "center",  alignItems: "center" }}>
                     <img  src="/images/classification/image33.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >หนังฝรั่ง</h1></div>
              </div>
                </div>
                <div className="row" style={{marginTop: 10}} >
                    <div className="" style={{ display: 'flex', justifyContent: "center",  alignItems: "center" }}>
                         <img  src="/images/classification/image34.png" className="img-fluid rounded" />
                    <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >หนังไทย</h1></div>
              </div>
                </div>
                </div>
              </div>
          </div>


          <div className="row">

            
            <div  className="container-fluid" > 
                <div className="row">
                <div style={{ margin: "auto" }}>
              <h1 style={{ textAlign: "center" }}>ค่ายหนัง</h1>
            </div>
                </div>
                <div className="row">
                        
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
 
    <div className="carousel-item active">
        <div className="container" >
            <div className="row" >
                <div className="col-3" style={{    }}  >
                    <div style={{ display: 'flex', justifyContent: "center",  alignItems: "center", padding: 5}} >
                    <img  src="/images/classification/image31.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  > <img src="/images/classification/image15.png" className='rounded-circle' width={100} /> </div>
                    </div>
                </div>
                <div className="col-3" style={{  }}  >
                <div style={{ display: 'flex', justifyContent: "center",  alignItems: "center", padding: 5}} >
                    <img  src="/images/classification/Rectangle40.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  > <img src="/images/classification/image14.png" className='rounded-circle' width={100} /> </div>
                    </div>
                </div>
                <div className="col-3" style={{    }}  >
                <div style={{ display: 'flex', justifyContent: "center",  alignItems: "center", padding: 5}} >
                    <img  src="/images/classification/Rectangle41.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  > <div className="rounded-circle" style={{ backgroundColor: "white", width: 100, height: 100  , display: 'flex', justifyContent: "center", alignItems: "center"}} >  <img src="/images/classification/image16.png"  className='' width={80} /> </div> </div>
                    </div>
                </div>
                <div className="col-3" style={{   }}  >
                <div style={{ display: 'flex', justifyContent: "center",  alignItems: "center", padding: 5}} >
                    <img  src="/images/classification/Rectangle42.png" className="img-fluid rounded" />
                <div style={ { position: "absolute"  } }  > <div className="rounded-circle" style={{ backgroundColor: "white", width: 100, height: 100  , display: 'flex', justifyContent: "center", alignItems: "center"}} >  <img src="/images/classification/image17.png"  className='' width={80} /> </div>  </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>


          </div>
            
        </div>
        <div className="col-2" style={{  }}>
         <div  style={{ justifyContent: "flex-end",  display: "flex" }} >
                <div style={{ width: 150 , height: 500,  backgroundColor: '#C4C4C4', position: "absolute"}}> 
                    <div  style={{ justifyContent: "center",  display: "flex", marginTop: 250  }} >
                    <div style={ { position: "absolute"  } }  ><h1 style={{ color: "#FFFFFF", textAlign: "center"}} >Ads</h1></div>
                      </div>
                    </div>
                 </div>
                
        </div>
      </div>
    </div>
  );
};

export default Cassification;

