import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep13 extends React.Component{
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
                        <h1 className="title">Episode 13: Schools in Korea</h1>
                        <h5 className="korean-title">에피소드 13: 한국의 학교</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


학교 (hak gyo) - school<br></br>
초등학교 (cho deung hak gyo) - elementary school<br></br>
<br></br>
A Korean elementary school:
<br></br>
<img className="epPic-m" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/%EA%B1%B0%EC%A0%9C_%EA%B8%B0%EC%84%B1%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90.jpg"></img><br></br>
<br></br>
학년 (hak nyun) - school year (6학년 = 6th grade, 3학년 = 3rd grade, etc.)<br></br>
중학교 (jung hak gyo) - middle school<br></br>
고등학교 (go deung hak gyo) - high school<br></br>
<br></br>
입학시기 (ip hak shi gi) - time of entering school (입학 = enter school, 시기 = times)<br></br>
초 (cho) - beginning (as in months, 3월 초 = beginning of march)<br></br>
반장 (ban jang) - class leader<br></br>
경례 (gyeung rae) - salute<br></br>
예의 (yae yee) - manners, politeness<br></br>
선생님 (sun saeng nim) - teacher<br></br>
교실 (gyo shil) - classroom<br></br>
들어오다 (deul euh oh da) - to come in<br></br>
인사 (in sah) - greetings<br></br>
인사를 들이다 (in sah reul deu ri da) - to give greetings to<br></br>
<br></br>
노랑색 (noh rang saek) - yellow<br></br>
교복 (gyo bok) - school uniform<br></br>
체육 (chae yuk) - PE<br></br>
체육복 (chae yuk bok) - PE uniform<br></br>
<br></br>
직접 (jik jup) - directly (as in they themselves/he himself/she herself/I myself/we ourselves)<br></br>
청소하다 (chung so ha da) - to clean<br></br>
<br></br>
수능 (su neung) - Korean college entrance exam<br></br>
영어 (yung euh) - English<br></br>
수학 (soo hak) - math<br></br>
국어 (guk uh) - Korean<br></br>
사회 (sa hweh) - society/social studies<br></br>
한국사 (han guk sah) - korean history<br></br>
보통 (bo tong) - usually/normally<br></br>
유명인 (yuh myung in) - celebrities<br></br>
응원하다 (eung won ha da) - to cheer on <br></br>
혜텍 - (hae taek) - benefits<br></br>
<br></br>
듣기 (deudd gi) - listening, 듣다 (ddeud da) - to listen<br></br>
부분 (bu bun) - part<br></br>
공항 (gong hang) - airport<br></br>
비행기 (bi hang gi) - airplane<br></br>
멈추다 (mum chew da) - to stop<br></br>



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
        <Ep13></Ep13>
        </div>
    );
}


  const Episode13 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode13;