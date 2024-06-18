import React from "react";
import Header from "../components/Header";
import Sample1 from "../assets/video/sample_1.mp4";
import Sample2 from "../assets/video/sample_2.mp4";
import "../styles/global.css";
import "../styles/home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-container">
        <Header />
        <video id="background-video" className="videoTag" autoPlay loop muted>
          <source src={Sample1} type="video/mp4" />
        </video>
        <div className="w-100 position-absolute text-box d-flex justify-content-center align-item-center flex-column m-0">
          <div className="w-100 d-flex justify-content-center align-item-center">
            <p className="b-font fw-medium text-center text-white w-75 inria-serif-regular">
              Lorem nostrud sint est dolore elit culpa.
            </p>
          </div>
          <p className="text-center text-white inria-serif-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            culpa consectetur cupiditate voluptate aspernatur laboriosam.
          </p>
        </div>
      </div>
      <div style={{ background: "#e3eff3" }}>
        <div className="container-fluid w-75 ">
          <div className="title-desc">
            <h1 className="inria-serif-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et!
            </h1>
            <p className="inria-serif-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              placeat excepturi ab, laudantium, sequi earum consequuntur
              officiis maxime quae temporibus blanditiis itaque aspernatur
              perspiciatis sit recusandae. Minima pariatur ipsam adipisci? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              praesentium quos accusamus, voluptate autem quae perferendis
              eligendi ut enim corporis.
            </p>
          </div>
          <div className="title-desc">
            <h1 className="inria-serif-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et!
            </h1>
            <p className="inria-serif-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              placeat excepturi ab, laudantium, sequi earum consequuntur
              officiis maxime quae temporibus blanditiis itaque aspernatur
              perspiciatis sit recusandae. Minima pariatur ipsam adipisci? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              praesentium quos accusamus, voluptate autem quae perferendis
              eligendi ut enim corporis.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-container">
        <video id="background-video" className="videoTag" autoPlay loop muted>
          <source src={Sample2} type="video/mp4" />
        </video>
        <div className="w-100 position-absolute text-box d-flex justify-content-center align-item-center flex-column m-0 z-3">
          <div className="w-100 d-flex justify-content-center align-item-center">
            <p className="b-font fw-medium text-center text-white w-75 inria-serif-bold">
              JetSetMed - Personalized Affordable Medical Kits
            </p>
          </div>
          <div className="align-self-center">
            <button className="btn btn-primary rounded-pill px-5 py-2 inria-serif-light btn-text-color bgOrangeColor">
              {" "}
              Get Started{" "}
            </button>
          </div>
        </div>
        <img
          src={require("../assets/image/sample_1.jpg")}
          alt="medical kit"
          className="card-img"
          id="img-1"
        />
        <img
          src={require("../assets/image/sample_1.jpg")}
          alt="medical kit"
          className="card-img"
          id="img-2"
        />
        <img
          src={require("../assets/image/sample_1.jpg")}
          alt="medical kit"
          className="card-img"
          id="img-3"
        />
      </div>
      <div style={{ background: "#e3eff3" }}>
        <div className="container-fluid">
          <h1 className="heading-1">How we do it better</h1>
          <div className="card-container">
            <div className="card">
              <img src={require("../assets/image/sample_1.jpg")} alt="img" />
              <p>Risk Assessment</p>
            </div>
            <div className="card">
              <img src={require("../assets/image/sample_2.jpg")} alt="img" />
              <p>Risk Assessment</p>
            </div>
            <div className="card">
              <img src={require("../assets/image/sample_3.jpg")} alt="img" />
              <p>Pre-trip consultation</p>
            </div>
            <div className="card">
              <img src={require("../assets/image/sample_2.jpg")} alt="img" />
              <p>Kit Delivery</p>
            </div>
            <div className="card">
              <img src={require("../assets/image/sample_3.jpg")} alt="img" />
              <p>Travelling</p>
            </div>
            <div className="card">
              <img src={require("../assets/image/sample_2.jpg")} alt="img" />
              <p>Telecommunication</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#e3eff3" }}>
        <div className="container-fluid">
          <h1 className="heading-1 inria-serif-bold">Make your trips hassel-free</h1>
          <div className="subscription-container">
            <div className="card">
              <div className="title">
                <h4>JetsetMed Free</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="price">
                <span>
                  <span class="material-symbols-outlined">currency_rupee</span>0
                </span>
              </div>
              <button className="btn rounded-pill px-5 py-2">Get Started</button>
              <div className="desc">
                <span className="include">Fees</span>
                <span>Includes</span>
                <ul>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="title">
                <h4>JetsetMed Free</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="price">
                <span>
                  <span class="material-symbols-outlined">currency_rupee</span>0
                </span>
              </div>
              <button className="btn btn-primary rounded-pill px-5 py-2">Get Started</button>
              <div className="desc">
                <span className="include">Fees</span>
                <span>Includes</span>
                <ul>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="title">
                <h4>JetsetMed Free</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="price">
                <span class="material-symbols-outlined">currency_rupee</span>{" "}
                <span className="ruppe">0</span>
              </div>
              <button className="btn btn-primary rounded-pill px-5 py-2">Get Started</button>
              <div className="desc">
                <span className="include">Fees</span>
                <span>Includes</span>
                <ul>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
