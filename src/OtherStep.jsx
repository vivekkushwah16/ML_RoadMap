import React from "react";
import Libraries from "./Libraries";
import "./OtherStep.css"

    const OtherStep = () => {
        return (
        <>
        <section id="others">
        <div className="container-fluid col-9 mx-auto">
        <section id="statistics">
        <div className="maincontainer">
            <div className="back">
                <p>Having a basic understanding of probability and statistics is important when it comes to
                mastering Machine Learning.
                Here is one of the best resources for that: Statistics Revision Notes by MathBox</p>
            </div>
            <div className="front">
                <div className="image">
                <img src="https://i.postimg.cc/nhG8H3X6/copywriting.jpg"/>
                <h2><strong>Step 4: : Learn Statistics</strong></h2>
                </div>
            </div>
        </div>
        </section>
        <section id="algebra">
            <div className="maincontainer">
                <div className="back">
                
                    <p>You should learn Linear Algebra if you wish to master Machine Learning and become a pro!
                        This is essential because if you want to tune your models with maximum flexibility, you need to
                        know how they work, and knowing linear algebra is a must for that!
                        When you start, you should focus on Step 1, and while you are following step 1, you can begin
                        learning Linear Algebra parallelly. This is what I call the parallel conquering technique.</p>
                </div>
                <div className="front">
                    <div className="image">
                    <img src="https://i.postimg.cc/ydrv1ZXq/contentmarketing.jpg"/>
                    <h2><strong>Step 5: : Learn  Linear Algebra
                    </strong></h2>
                    </div>
                </div>
            </div>
        </section>    
        <section id="libraries">
            <div className="maincontainer">
                <div className="back">
                
                    <p><ul>
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
                <div className="front">
                    <div className="image">
                    <img src="https://i.postimg.cc/ZqbG0630/webwriting.jpg"/>
                    <h2><strong>Step 6: : Learn Python Libraries</strong></h2>
                    </div>
                </div>
            </div> 
            </section>     
          </div>
          
          </section>


        </>);
    };
export default OtherStep;    