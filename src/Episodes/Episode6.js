import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep6 extends React.Component{
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
                        <h1 className="title">Episode 6: Taekwondo</h1>
                        <h5 className="korean-title">에피소드 6: 태권도</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

<a  target="_blank" href="https://www.youtube.com/watch?v=jlzVmOUP1is">This</a> is a super super cool slo-mo video by the Slo Mo Guys, highly recommended!<br></br>
Also watch K-Tiger’s Taekwondo performance video <a  target="_blank" href="https://www.youtube.com/watch?v=ENKh-1qUvJA">here</a> and a longer version <a target="_blank" href="https://www.youtube.com/watch?v=Sp1hff70HRs">here</a><br></br>
And the 2012 Olympics Final Match for 태권도 is <a  target="_blank" href="https://www.youtube.com/watch?v=8_2rvik7NrY">here</a><br></br>

<a  target="_blank" href="https://buffalotkd.com/what-is-tae-kwon-do/">태권도 (taekwondo)</a> - type of Korean martial arts<br></br>
유명 (yu myoung) - fame<br></br>

무술 (mu sul) - martial arts<br></br>
신체부위 (shin chae bu we) - body parts<br></br>
이용하다 (ee yong ha da) - to use<br></br>
상대방 (sang dae bang) - opponent<br></br>
제압하다 (jae ap ha da) - overpower<br></br>
목표 (mok pyo) - goal<br></br>
<br></br>
상징 (sang jing) - symbol<br></br>
정식 (jung shik) - official<br></br>
종목 (jong mok)- event<br></br>
<br></br>
띠 (thee) - belt (indicating level of skill in 태권도)<br></br>
순서 (sun suh) - order<br></br><br></br>

흰띠, 노란띠, 초록띠, 파란띠, 빨간띠, 검은띠 - white belt, yellow belt, green belt, blue belt, red belt, black belt (pictured below)<br></br>
<img className="epPic" src="https://img.khan.co.kr/news/2014/10/20/l_2014102101003193300240271.jpg"></img><br></br>
<br></br>

잘하다 (jal ha da) - to be good at (가장 잘하다 = to be the best)<br></br>
<br></br>
발차기 (bal cha gi) - kicks (pictured below)
<br></br>
<img className="epPic" src="https://i.ytimg.com/vi/ZLgwMp90pUs/maxresdefault.jpg"></img><br></br>
<br></br>

중요하다 (jun yo ha da) - to be important<br></br>
지르기 (ji ru gi) - moves using your hand<br></br>
찌르기 (jji ru gi) - moves using ends of hand<br></br>
치기 (chi gi) - moves to hit<br></br>
<br></br>
앞차기 (ap cha gi) - front kick<br></br>
기초 (gi cho) - basic<br></br>
기술 (gi sul) - skill<br></br>
<br></br>
돌려차기 (dol ryuh cha gi) - spin kick (돌려 means spin)<br></br>
뒤차기 (dwi cha gi) - behind kick (뒤 means back/behind)<br></br>
<br></br>
유연함 (yoo yeon ham) - flexible (유연하다 = to be flexible)<br></br>
힘 (heem) - power/strength<br></br>
필요하다 (pil yo ha da) - to need<br></br>
힘들다 (him deul da) - to be hard/difficult<br></br>




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
        <Ep6></Ep6>
        </div>
    );
}


  const Episode6 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode6;