import React from 'react';
import './index.css';
import Navbar3 from './Navbar3';
import Banner from "./Banner";
import Introduction from './Introduction';
import Roadmap from './Roadmap';
import OtherStep from './OtherStep';
import Language from './Language';
import MlAlgorithms from './MlAlgorithms';
import Deployment from './Deployment';
import Footer from "./Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>
        <Navbar3 />
        <Banner/>
        <Introduction/>
        <Roadmap/>
        <Language/>
        <MlAlgorithms/>
        <Deployment/>
        <OtherStep/>
        <Footer/>
    </>
  );
}

export default App;
