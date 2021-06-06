import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep25 extends React.Component{
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
                        <h1 className="title">Episode 25: Korean Independence Day</h1>
                        <h5 className="korean-title">에피소드 25: 3.1절</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


한국 (han guk) – South Korea<br></br>

일본 (il bon) – Japan<br></br>

식민지 (shik min ji) – colony<br></br>
<br></br>
너무 (nuh moo) – too<br></br>

힘들다 (him deul da) – to be difficult, hard<br></br>

그래서 (geu rae suh) – so<br></br>

1919년 (cheon goobaek ship goo nyeon) – year of 1919<br></br>

3월 1일 (sam wol eeh lil)- March 1st<br></br>

3.1운동 (sam il un dong) – 3.1 movement (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://lh3.googleusercontent.com/proxy/DGoVvSv7_eNKs651YPc2l1YmDRv8CFLgBeIYZD5NcIPZmiyh1_ZsI8fWDlBevcr5mVsUMamieinaVeWzu8Y-9Yf7bMs018p8G1mZbK1TIzOpT4VYvVCwby8"></img><br></br>
<br></br>
비폭력 (bi pok ryeok) – nonviolent<br></br>

시민 (shi min) – citizen<br></br>

시민 불복종 운동 (shi min bul bok jong un dong) – civil disobedience<br></br>
<br></br>
“조선 독립 만세!”<br></br>

조선 (jo seon) – Korea (then)<br></br>

독립 (dok rip) – independence<br></br>

만세! (man sae) – hurrah!<br></br>
<br></br>
선언하다 (sun eun ha da) – to declare<br></br>

아주 많은 (ah ju man eun) – very many<br></br>

참가하다 (cham ga ha da) – to participate<br></br>
<br></br>
7,500명 (chil cheon oh baek myung) – 7,500 people<br></br>

죽다 (jook da) – to die<br></br>

16,000명 (ship yook man myung)- 16,000 people<br></br>

다치다 (da chi da) – to be injured, hurt<br></br>

46만명 (sah ship man myung)- 46,000 people<br></br>

체포되다 (chae po dwae da) – to be arrested<br></br>

사형 (sah hyung) – public execution<br></br>


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
        <Ep25></Ep25>
        </div>
    );
}


  const Episode25 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode25;