import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep29 extends React.Component{
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
                        <h1 className="title">Episode 29: Korean Societal Issues</h1>
                        <h5 className="korean-title">에피소드 29: 사회적인 문제</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

                사회 (sah hwae) – society<br></br>

사회적 (sah hwae juk) – societal<br></br>

문제 (moon jae) – problem<br></br>
<br></br>

저출산 (juh chul san) – low birth rate<br></br>

출산 (chul san)- birth rate<br></br>

2020년 (eeh chun eeh ship nyun) – year of 2020<br></br>

1000명 (chun myung) – 1000 people<br></br>

7명 (il gop myung) – 7 people<br></br>

태어나다 (tae uh na da) – to be born<br></br>
<br></br>

입시 (ip shi) – college admissions<br></br>

교육 (gyo uk) – education<br></br>

아주 (ah ju) – very<br></br>

치열하다 (chil yeol ha da) – to be competitive, ruthless<br></br>

경쟁 (gyung jaeng)  – competition<br></br>

24시간 (eeh ship sah shi gan) – 24 hours<br></br>

도서관 (doh suh gwan) – library<br></br>

학원 (hak won) – supplementary classes<br></br>
<br></br>

노인 (noh in) – elderly<br></br>

노인 빈곤 (noh in bin gon) – elderly poverty<br></br>

가난하다 (gah nan ha da) – to be poor<br></br>
<br></br>
취업하다 (chi up ha da) – to get a job<br></br>

어렵다 (uh ryup da) – to be difficult<br></br>

공무원 (gong mooh one) – government worker<br></br>

선생님 (sun saeng nim) – teacher<br></br>




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
        <Ep29></Ep29>
        </div>
    );
}


  const Episode29 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode29;