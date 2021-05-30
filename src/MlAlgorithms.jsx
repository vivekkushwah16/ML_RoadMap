import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import { AiFillCaretRight} from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import "./MlAlgorithms.css"
const MlAlgorithms=() => {
  return (
    <>
    <section id="mlalgorithms"  >
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <div className="card"  >
            <div>
              <h1>Step 2 : Learn Core ML Algorithms</h1>
              <p> Once you have some idea of using sklearn after learning python, you should start looking into
                  how these machine learning algorithms work.
                  While using sklearn, a ML Algorithm is a black box written by the sklearn devleopers.
                 </p>
          </div>
          </div>
        </div>
        <div className="card-grid-space">
          
          <div className="card" >
            <div>
            <p> In order to get an idea of how these Machine learning algorithms work from within, look into:</p>
            <p>
              <ul>
              <li> <AiFillCaretRight className="text-dark MX-1"/>
                Gradient Descent
                </li>
                <li> <AiFillCaretRight className="text-dark MX-1"/>  
                Supervised vs Unsupervised learning
                </li>
                <li> <AiFillCaretRight className="text-dark MX-1"/>
                slope
                </li>
                <li> <AiFillCaretRight className="text-dark MX-1"/>
                Reinforcement Learning
                </li>
                <li> <AiFillCaretRight className="text-dark MX-1"/>
                Basic Linear Regression
                </li>
                <li> <AiFillCaretRight className="text-dark MX-1"/>
                Working of all such similar models
                </li>
              <li><AiFillCaretRight className="text-dark MX-1"/>
                Clustering
                </li>
                </ul>
                </p>
                
            </div>
          </div>
        </div>
        <div className="card-grid-space">
          <div className="card"  >
            <div>
            <p>
                An amazing resource to learn about all this is a 
                book called “Hands-on ML with Scikit learn and
                tensorflow.”
            </p>
            <p>
            <ul>
              <li><AiFillCaretRight className="text-dark MX-1"/>
              Schedule your reading time
                </li>
                <li><AiFillCaretRight className="text-dark MX-1"/>
                Try to turn the pages and look for exercise-questions
                </li>
                <li><AiFillCaretRight className="text-dark MX-1"/>
                Now try to find the answers to those questions while reading
                </li>
                <li><AiFillCaretRight className="text-dark MX-1"/>
                These are the points author of the book wants you too.               
                </li>
                </ul>
                </p>
            </div>
          </div>
        </div>
        
      </section>
    </section>
    </>
  );
}

export default MlAlgorithms;
