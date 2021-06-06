import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep1 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page container-fluid">
                <button className="ep-button"><Link to="/Episodes">Episodes</Link></button>
                <span className="between-buttons">•</span>
                <button className="home-button"><Link to="/">Home</Link></button>
                
                {/*Titles*/}
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">Special Episode 1: Korean Swear Words</h1>
                        <h5 className="korean-title">특별 에피소드 1: 욕설</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

                Learn more swear words <a target="_blank" href="Learn swear words at: badasskorean.com/swearing-in-korean/">here</a>.

                </div>
                <div className="row"><div className="col-12 spacer5"></div></div>
            </div>


        )
    }
}


/* -------------------------Variables------------------------- */
function App() {
    return (
        <div>
        <Ep1></Ep1>
        </div>
    );
}


  const Episode1 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode1;