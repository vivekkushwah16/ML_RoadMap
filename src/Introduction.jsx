import React from "react";
import { AiFillForward } from "react-icons/ai";
import "./Intro.css";
const Introduction = () => {
    return (
        <>
        <section id="intro">
         <div  className="content">
         <h1 id="intro_heading">Introduction</h1>
            <img src="https://www.edjio.com/images/course-logo/machine-learning.png"
             className="img-fluid my-3 "  width="300px" height="200px"
              alt="image" />
                     
            <p ><AiFillForward className="mx-1 fs-4"/>Machine learning (ML) is the study of computer algorithms 
               that improve automatically through experience and by the use of data. 
               It is seen as a part of 
               artificial intelligence. Machine learning algorithms build a 
               model based on sample data, known as "training data", in order 
               to make predictions or decisions without being explicitly programmed 
                to do so.</p>

         </div>
        </section>
        </>
    );
}
export default Introduction;