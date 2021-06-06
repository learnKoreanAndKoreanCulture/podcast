import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep24 extends React.Component{
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
                        <h1 className="title">Episode 24: Cultural Differences of Korea and US</h1>
                        <h5 className="korean-title">에피소드 24: 한국과 미국의 문화적인 차이</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

미국 (mi guk) – USA<br></br>

살다 (sal da) – to live, to reside in<br></br>

한국인 (han guk in) – Korean<br></br>

얘기하다 (yae gi ha da) – to talk about, discuss<br></br>
<br></br>
미국인 (mi guk in) – American<br></br>

서로 (suh ro) – each other<br></br>

웃다 (ut da) – to smile, laugh<br></br>

인사하다 (in sa ha da) – to greet<br></br>

하지 마세요 (ha ji ma sae yo) – do not do it<br></br>
<br></br>
코를 풀다 (ko reul pul da) – to blow nose<br></br>

코 (ko) – nose<br></br>

실례 (shil lae) – something that is rude or needs to be excused<br></br>
<br></br>
정치 (jung chi) – politics<br></br>

대해서 (dae hae suh) – about (something)<br></br>

많은 (man eun) – a lot<br></br>

사람들 (sah ram deul) – people<br></br>

관심 (gwan shim) – interest<br></br>

관심을 가지고 있다 (gwan shim eul ga ji go it da) – to have interest in<br></br>

놀라웠어요 (Nol la wot suh yo) – it was surprising<br></br>
<br></br>
작다 (jak da) – to be small<br></br>

좁다 (jop da) – to be narrow<br></br>

유행 (yoo haeng) – trends<br></br>

전국 (jun gook) – the entire nation<br></br>

퍼지다 (puh ji da) – to spread<br></br>
<br></br>
차 (cha) – car<br></br>

필요하다 (pil yo ha da) – to need<br></br>

지하철 (ji ha cheul) – subway<br></br>

버스 (buh su) – bus<br></br>

택시 (taek shi) – taxi<br></br>

기차 (gi cha) – train<br></br>

특히 (teuk hi) – especially<br></br>


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
        <Ep24></Ep24>
        </div>
    );
}


  const Episode24 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode24;