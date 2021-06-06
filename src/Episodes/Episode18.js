import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep18 extends React.Component{
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
                        <h1 className="title">Episode 18: Korean Folk Music</h1>
                        <h5 className="korean-title">에피소드 18: 한국음악</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

판소리 - pansori; Korean musical storytelling<br></br>
한 명 (han myung) - one person<br></br>
소리 (soh ri) - sound<br></br>
고수 (go sooh) - drummer<br></br>
음악 (eum ak)  - music<br></br>
음악적인 (eum ak juk in) - musical<br></br>
이야기 (eeh yah gi) - story<br></br>
만들다 (man deul da) - to make<br></br>
최대 (chae dae) - at most<br></br>
8시간 (yuh deul shi gan) - 8 hours<br></br>
<br></br>
단어 (dan euh) - word<br></br>
여러 (yeo ruh) - several, a lot<br></br>
사람 (sah ram) - person/people<br></br>
모인 (moh een) - gathered, together (모이다 - to gather)<br></br>
장소 (jang soh) - place<br></br>
<br></br>
노래 (noh rae) - song, music<br></br>
소리 (soh ri) - sound<br></br>
서민 (seo min) - common people<br></br>
사이 (sah eeh) - between<br></br>
인기가 많았다 (in ki ga man at da) - was very popular<br></br>
<br></br>
이제 (eeh jae) - now<br></br>
인간문화재 (in gan mun hwa jae)- living national treasure<br></br>
지정되다 (ji jung dwae da) - to be designated<br></br>
Learn more about pansori (판소리) <a target="_blank" href="https://www.youtube.com/watch?v=8Kt7YdXsWzg">here</a><br></br>
<br></br>
풍물 - pungmul; Korean traditional folk music with drumming, dancing, singing<br></br>
민족예술 (min sok yae sul) - ethnic art<br></br>
Instruments mentioned and their pictures:<br></br>
<br></br>
1. 꽹과리 - small flat gong (pictures below)<br></br>
<img className="epPic-sm" src="https://cdn.crowdpic.net/list-thumb/thumb_l_57E8E719AE9EA578B82CD30194AC088C.jpg"></img><br></br>
<br></br>
2. 징 - large gong (pictures below)<br></br>
<img className="epPic-sm" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Jing.jpg"></img><br></br>
<br></br>
3. 장구 - Korean drum (pictures below)<br></br>
<img className="epPic-sm" src="https://img5.yna.co.kr/etc/inner/KR/2018/09/27/AKR20180927160300005_01_i_P4.jpg"></img><br></br>
<br></br>
4. 북 - Korean drum (the word 북 can also mean general kinds of drums) (pictures below)<br></br>
<img className="epPic-sm" src="https://i.pinimg.com/originals/77/d7/ea/77d7ea20ea5c88b7894b10d34d214b35.jpg"></img><br></br>
<br></br>
5. 소고 - type of Korean handheld drum (pictures below)<br></br>
<img className="epPic-sm" src="https://mblogthumb-phinf.pstatic.net/20160623_117/hansoc0805_1466665548895G6PTJ_JPEG/KakaoTalk_20160623_160427939.jpg?type=w800"></img><br></br>
<br></br>
<br></br>
악기 (ak gi) - instrument<br></br>
타악기 (ta ak gi) - percussion instruments<br></br>
합주하다 (hap ju ha da) - ensemble<br></br>
행진하다 (hang jin ha da) - to march<br></br>
춤 (choom) - dance<br></br>
춤을 추다 (choom eul chu da) - to dance<br></br>
연극 (yeon geuk) - play<br></br>
연극을 펼치다 (yeon geuk eul pyul chi da) - to perform a play<br></br>
<br></br>
마을 (mah eul) - village<br></br>
신 (shin) - god<br></br>
농사 (nong sah) - farming<br></br>
제사 (jae sah) - ritual<br></br>
액 (aek) - bad/evil spirits<br></br>
쫓다 (jjot da) - to get rid of<br></br>
믿다 (midt da) - to believe<br></br>
<br></br>
복 (bok) - good fortune<br></br>
부르다 (bu reu da) - to call, call on<br></br>
축원 (chuk won) - wish<br></br>
봄 (bom) - spring<br></br>
풍농 (pung nong)- good harvest<br></br>
기원하다 (gi won ha da) - prayer<br></br>
가을 (ga eul) - fall<br></br>
축제 (chook jae) - festival<br></br>
Watch a pungmul (풍물) performance <a target="_blank" href="https://www.youtube.com/watch?v=DCP0uRWF728">here</a><br></br>
<br></br>
산조 (sanjo) - Korean instrumental solo with a drummer<br></br>
느리게 (neuh ri gae) - slowly<br></br>
빠르게 (ppa reu gae) - quickly<br></br>
진행되다 (jin hang dwae da) - to proceed, continue<br></br>
구조 (goo joh) - format<br></br>
가야금 (gayageum) - traditional Korean stringed instrument (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://i.ytimg.com/vi/dXf3KCQugUM/maxresdefault.jpg"></img><br></br>
<br></br>
<br></br>
전통 (jun tong) - tradition<br></br>
현악기 (hyun ak gi) - string instrument<br></br>
Watch a sanjo (산조) performance <a target="_blank" href="https://www.youtube.com/watch?v=qEZNEk5fFno">here</a><br></br>



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
        <Ep18></Ep18>
        </div>
    );
}


  const Episode18 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode18;