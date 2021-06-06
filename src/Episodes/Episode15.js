import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep15 extends React.Component{
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
                        <h1 className="title">Episode 15: K-Pop PT. 2</h1>
                        <h5 className="korean-title">에피소드 15: 케이팝</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


성공하다 (sung gong ha da) - to succeed<br></br>
그중에 (geu jung ae) - among<br></br>
제일 (jae il) - most<br></br>
유명한 (yoo myung han) - famous<br></br>
여자아이돌 (yuh ja idol) - female idol<br></br>
<br></br>
<a target="_blank" href="https://en.wikipedia.org/wiki/Blackpink">Blackpink (블랙핑크)</a> is pictured below:
<br></br>
<img className="epPic-m" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/10/16/41e9b47c-07af-11eb-afc8-92e0da0ef1c3_image_hires_155550.jpg?itok=ihKswLDq&v=1602834958"></img><br></br>
<br></br>
여자 (yuh ja) - female/girl<br></br>
<br></br>
남자아이돌 (nam ja idol) - male idol<br></br>
<br></br>
<a target="_blank" href="https://en.wikipedia.org/wiki/BTS">BTS (방탄소년단)</a> is pictured below:
<br></br>
<img className="epPic-m" src="https://www.nme.com/wp-content/uploads/2021/05/bts-butterconceptteaser-2021.jpg"></img><br></br>
<br></br>
남자 (nam jah) - male/boy<br></br>
특이하다 (teuk eeh ha da) - to be unique/different<br></br>
좋은 (jo eun) - good<br></br>
소속사 (so sok sa) - agency/entertainment company<br></br>
중요하다 (jung yo ha da) - to be important<br></br>
작곡 (jak gok) - compose<br></br>
작사 (jak sah) - writing lyrics<br></br>
촬영 (charl young) - filming<br></br>
이런 것 (eeh run gut) - something like this, things like this<br></br>
다 (da) - all, everything<br></br>
힘든 (him deun) - difficult<br></br>
상황 (sang hwang) - situation<br></br>
잘 이겨내다 (jal eeh gyu nae da) - to overcome<br></br>
돈을 벌다 (don eul bul da) - to make money<br></br>
인기를 얻다 (een gi reul ut da) - gain popularity<br></br>
<br></br>
최근 (chae geun) - recently<br></br>
<br></br>
BTS performing their hit single Dynamite at the <a target="_blank" href="https://www.youtube.com/watch?v=jWRMXiHhDjc">Grammy Awards show</a>:
<br></br>
<img className="epPic" src="https://media.gq-magazine.co.uk/photos/604f27c895d320e638a93eac/master/pass/BTS_Dynamite%2001.jpg"></img><br></br>
<br></br>
노래 (noh rae) - song<br></br>
24시간 (ee ship sah shi gan) - 24 hours<br></br>
제일 많은 (jae il man eun) - the most<br></br>
많은 (man eun) - a lot<br></br>
조회수 (joh hae su) - views<br></br>
기록하다 (gi rok ha da) - to record<br></br>
1위 (il wee) - first<br></br>
새로운 (sae ro un) - new<br></br>
어머어머 (uh muh uh muh) - very, a lot<br></br>
대단하다 (dae dan ha da) - to be amazing, excellent<br></br>
<br></br>
영어 (young uh) - English<br></br>
쓰다 (sseu da) - to use<br></br>
재목 (jae mok) - title<br></br>
따라 부르다 (dda ra buh reu da) - to sing along<br></br>
춤 (choom) - dance<br></br>
춤을 추다 (choom eul chu da) - to dance<br></br>
보통 (bo tong) - usually, normally<br></br>
경우 (gyung ooh) - case, circumstance<br></br>
잘생기다 (jal saeng gi da) - to be good looking<br></br>
얼굴 (eul gul) - face<br></br>




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
        <Ep15></Ep15>
        </div>
    );
}


  const Episode15 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode15;