import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep3 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="longerPage container-fluid">
                <button className="ep-button"><Link to="/Episodes">Episodes</Link></button>
                <span className="between-buttons">•</span>
                <button className="home-button"><Link to="/">Home</Link></button>
                
                {/*Titles*/}
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">Episode 3: Alcohol</h1>
                        <h5 className="korean-title">에피소드 3: 술</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


술 (sul) - alcohol<br></br>
소비 (so bi) - consumption<br></br>
순위 (soon wee) - rank<br></br>
문화 (mun hwa) - culture<br></br>
사고 (sa goh) - accident<br></br>
문제 (mun jae) - problem<br></br>
<br></br>
회식 (hwe shik) - gathering to eat/drink, usually after work<br></br>
선배 (sun bae) - someone in a superior position or is older than you<br></br>
어른 (uh reun) - your elders<br></br>
술잔 (sul jan) - drinking cup<br></br>
따라주다 (dda ra ju da) - to pour<br></br>
1차/2차/3차 (il cha/eeh cha/sam cha) - first/second/third round (refers to drinking)<br></br>
<br></br>
강압 (gang ap) - coercion<br></br>
강요 (gang yo) - pressure<br></br>
주량 (ju rang) - amount of alcohol one can drink<br></br>
자랑하다 (ja rang ha da) - to boast<br></br>
멋지다 (mut ji da) - to be cool<br></br>
<br></br>
소주 (soju) - soju, a type of popular drink in korea (pictured below)<br></br>
<br></br>
<img className="epPic" src="http://monthly.chosun.com/upload/1008/1008_366.jpg"></img><br></br>
<br></br>
막걸리 (mak gul li) - traditional alcohol, usually called rice wine (pictured below)<br></br>
<br></br>
<img className="epPic" src="https://src.hidoc.co.kr/image/lib/2020/6/30/1593492805222_0.jpg"></img><br></br>
<br></br>





                </div>
                <div className="col-1"></div>
                <div className="row"><div className="col-12 spacer5"></div></div>
            </div>


        )
    }
}


/* -------------------------Variables------------------------- */
function App() {
    return (
        <div>
        <Ep3></Ep3>
        </div>
    );
}


  const Episode3 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode3;