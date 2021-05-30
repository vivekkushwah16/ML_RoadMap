import React from 'react';
import "./Deployment.css"
import { AiOutlineArrowRight} from "react-icons/ai";
const Devployment=() =>{
  return (
    <>
    <section id="deployment" >
     <section id="cards-wrapper">
        <div className="card-grid-space">
          <div className="card_dep"  >
             <div>
                <h1>Step:3 Learn Deployment</h1>
                <p> To host your machine learning models with a 
                  powerful backend, you will need to learn
                  frameworks like Django and Flask.
                  Docker and Kubernetes can be of great 
                  help if you want to ship and deploy your
                  models quickly!
                  Streamlit is worthy of looking into if 
                  you wish to build custom web apps for machine
                  learning anddata science
                </p>
             </div>
          </div>
        </div>
      </section>
    </section>
    </>
  );
}

export default Devployment;
