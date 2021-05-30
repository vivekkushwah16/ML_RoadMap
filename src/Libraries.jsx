import React from "react";
import { AiFillCaretRight} from "react-icons/ai";

    const Libraries = () => {
        return (
            <>
                 
                <div className="col-md-4 col-10 ">
                    <div className="card">
                    
                            <div className="card-body">
                                <h5 className="card-title">
                                Step 5 : Learn Python Libraries
                            </h5>
                                <p className="card-text">
                                <ul id="list4" className="text-primary">
                                                <li> <AiFillCaretRight className="text-dark MX-1"/>
                                                Learn Numpy
                                                </li>
                                                <li> <AiFillCaretRight className="text-dark MX-1"/>
                                                Learn Pandas
                                                </li>
                                                <li> <AiFillCaretRight className="text-dark MX-1"/>
                                                All this will be helpful to debug the python/sklearn code
                                                </li>
                                                </ul>
                                </p>
                                
                        </div>
                    </div>
                </div>
            </>);
    };
export default Libraries;    