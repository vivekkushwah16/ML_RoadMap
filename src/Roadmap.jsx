import React from "react";
import { AiFillForward } from "react-icons/ai";
import "./Roadmap.css";
const Roadmap =() => {
    return(
        <> 
        <section id="roadMap">
          <div className="container-fluid"> 
          <div className=" roadMap_content">
              <div id="roadMAp-text">
               <h2>Roadmap</h2>
              
               <p><AiFillForward className="mx-1 fs-4"/>
               I am talking about the complete machine learning roadmap for beginners. This post is
                going to be a bit different.
                I won’t be telling you about the usual stuff and courses but will be walking you through the
                realistic events that will happen while you are on your ML journey.
                I will discuss a personal secret technique, which I call the Parallel Conquering Technique.
                One of the reasons beginners get confused when it comes to learning machine learning is that
                they don’t know what to learn from where and how? There are just too many options for
                courses, books, and ML algorithms.
                I am going to share a set of steps that you should take to master Machine learning.
               </p>
               </div>
          </div>
          </div>
        </section>  
       </>
    );
}
export default Roadmap;