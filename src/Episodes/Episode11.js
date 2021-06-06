import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep11 extends React.Component{
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
                        <h1 className="title">Episode 11: Korean Variety Shows</h1>
                        <h5 className="korean-title">에피소드 11: 한국 예능</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


예능 (yeh neung) - variety show<br></br>
<br></br>
코미디 프로 - comedy program<br></br>
방청객 (bang chung gaek) - audience<br></br>
녹화 (nok hwa) - recording (a show, film, etc)<br></br>
진행하다 - to do/progress<br></br>
특징 (teuk jing) - characteristic, special point<br></br>
분장 (bun jang) - make up<br></br>
말투 (mal too) - way of talking<br></br>
활용하다 (hwal yong ha da) - to use<br></br>
<br></br>
토크쇼 - talk show<br></br>
게스트 - guest<br></br>
엠씨 - MC (host)<br></br>
질문하다 (jil mun ha da) - to ask<br></br>
답하다 (dap ha da) - to reply<br></br>
방식 (bang shik) - style/system<br></br>
<br></br>
서바이벌 - survival<br></br>
투표 (too pyo) - vote<br></br>
많이 (man ee) - a lot<br></br>
<br></br>
바뀌다 (ba qui da) - to change<br></br>
대본 (dae bon) - script<br></br>
없다 (up da) - to not exist<br></br>
<br></br>

Recommendations for Korean Variety Shows: 
<a target="_blank" href="https://www.youtube.com/watch?v=KP5ORJ1zbyk"> 개그콘서트</a>, 
<a target="_blank"  href="https://www.youtube.com/watch?v=YS10Cdaz2Kk&t=491s"> 비긴어게인</a>, 
<a target="_blank"  href="https://www.youtube.com/watch?v=UVWpvyxztBE"> 슈돌 (return of superman)</a>, 
<a target="_blank"  href="https://www.youtube.com/watch?v=BwyhTrrLJrg"> 아는형님</a>, <br></br>
<a target="_blank"  href="https://www.youtube.com/watch?v=MjuJyti1Uwo"> 런닝맨</a>, 
<a target="_blank"  href="https://www.youtube.com/watch?v=RnKfb19iwiI"> 무한도전</a>, 
<a target="_blank"  href="https://www.youtube.com/watch?v=Xb3rIaOOMr8"> 해피투게더</a>, 
<a target="_blank"  href="https://www.youtube.com/watch?v=bgLah5W7yK0"> 쇼미더머니</a>.

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
        <Ep11></Ep11>
        </div>
    );
}


  const Episode11 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode11;