import React from "react";
import "./Language.css";
import { AiTwotoneStar} from "react-icons/ai";
const Language= ()=> {
    return (
        <>
        <section id="language">
       
        <div className="Lang_container">
            <div className="card1" >
                <h3>Step 1: Pick a programming language.</h3>
                <p>The first step to start learning machine 
                        learning is to pick up a programming language. There
                        are different programming languages in the market, 
                        but the most suitable for machine learningare Python and R.
                        I recommend Python.</p>
               
            </div>
            
            <div className="card2" >
                <h3>Why?</h3>
                <p ><ul >
                <li>
                    Because its popular, easy to
                    learn and future-ready With Python,
                </li>
                <li>
                    you can switch
                    domains easily. Python offers popular frameworks like Django
                        and Flask for backend development, Tkinter for GUI 
                        development, Pygames for Game development, etc. 
                        </li>
                        </ul>
                        </p>
            </div>
            <div className="card3" >
            
                <p >
                <ul  >
                <li>
                    If you go with Python, you must learn sklearn for Machine 
                    Learning. Sklearn is a modern machine learning 
                    library written in Python.
                    </li>
                    <li>
                    The best thing about sklearn is that most of the Machine 
                    learning algorithms are written for you
                    already.
                    </li>
                        <li>
                        It has a lot of useful classes for 
                        preprocessing your data for further analysis.
                            </li>
                            </ul></p>
                
            </div>
            </div>   
        </section>
        </>
    );
};
export default Language;