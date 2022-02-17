import Carosel from "components/Carousel";
import Classification from "components/Classification";
import MainMovie from "components/MainMovie";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="container-xxl"
      style={{ display: "flex" }}
    >
      <div style={{ width: '100%', margin: "auto",  flexDirection: "column", marginTop: 0 }}>
        
        <div style={{ marginTop: 100, width: "100%", marginRight: "auto", marginLeft: "auto", display: "flex" }}>
        <div style={{  flex: 2 ,  }} >
              
              </div>
          <div  style={{ flex: 10 }} >
          <Carosel />
          </div>
          <div style={{  flex: 2 , }} >
              
              </div>
        </div>

        <div style={{  marginTop: 300 }} >
        <Classification />
        </div>

        <div style={{  marginTop: 20 }} >
        <MainMovie />
        </div>

        <div style={{ marginTop: 20, marginBottom: 30}}>
        <nav aria-label="...">
         <ul className="pagination pagination-md justify-content-center">
          <li className="page-item disabled">
           <span className="page-link">Prev</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
           <span className="page-link">2</span>
         </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
         <li className="page-item">
           <a className="page-link" href="#">Next</a>
         </li>
        </ul>
        </nav>
        </div>


      </div>
     
    </div>
  );
};
export default Home;
