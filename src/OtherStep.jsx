import React from "react";
import Libraries from "./Libraries";
import "./OtherStep.css"

    const OtherStep = () => {
        return (
        <>
        <section id="others">
        <div className="container-fluid ">
        <div className="row">
            <div className="card_content gy-3">
        <section id="statistics">
        <div className="maincontainer">
            <div className="back bg-light">
                <p className="text-dark">Having a basic understanding of probability and statistics is important when it comes to
                mastering Machine Learning.
                Here is one of the best resources for that: Statistics Revision Notes by MathBox</p>
            </div>
            <div className="front border border-darken-1 bg-dark">
               
                
                <h2><strong className="text-light ">Step 4: : Learn Statistics</strong></h2>
                </div>
            </div>
        
        </section>
        <section id="algebra">
            <div className="maincontainer">
                <div className="back">
                
                    <p className="px-2">You should learn Linear Algebra if you wish to master Machine Learning and become a pro!
                        This is essential because 
                        if you want to tune your models with maximum flexibility, you need to
                        know how they work, and knowing linear algebra is a must for that!
                        When you start, you should focus on Step 1, and while you are following step 1, you can begin
                        learning Linear Algebra parallelly. This is what I call the parallel conquering technique.</p>
                </div>
                <div className="front ">
                    <h2><strong>Step 5: : Learn  Linear Algebra
                    </strong></h2>
                    </div>
                </div>
        </section>    
        <section id="libraries">
            <div className="maincontainer ">
                <div className="back bg-light">
                    <p className="text-dark"><ul>
                        <li>
                        Learn Numpy
                        </li>
                        <li>
                        Learn Pandas
                        </li>
                        <li>
                        All this will be helpful to debug the python/sklearn code
                        </li>
                    </ul>.</p>
                </div>
                <div className="front border border-darken-1 bg-dark">
                    <h2><strong className="text-light ">Step 6: : Learn Python Libraries</strong></h2>
                    </div>
                </div>
         
            </section>
            </div>     
          </div>
          </div>
          </section>


        </>);
    };
export default OtherStep;    