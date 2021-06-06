import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep22 extends React.Component{
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
                        <h1 className="title">Episode 22: Korean New Year’s Day</h1>
                        <h5 className="korean-title">에피소드 22: 설</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

설 (sul) - Korean New Year’s Day<br></br>
음력 (eum ryeok) - lunar calendar<br></br>
이번 년 (eeh bun nyeon) - this year<br></br>
년 (nyeon) - year<br></br>
2월 12일 (eeh wol ship eeh eel) - February 12th<br></br>
<br></br>
삼국시대 (sam guk shi dae) - Three Kingdoms of Korea<br></br>
첫번째 (chut bun jjae)- first<br></br>
기록 (gi rok) - record<br></br>
찾아볼 수 있다 (cha ja bol su it da) - can look for and see that<br></br>

가족 (ga jok) - family<br></br>
시간을 보내다 (shi gan eul bo nae da) - to spend time<br></br>
명절 (myul jul) - holiday<br></br>
<br></br>
전날 (jun nal) - the day before<br></br>
예복 (yae bok) - formal clothes<br></br>
입다 (ip da) - to wear<br></br>
한복 (han bok) - traditional Korean clothing (check out ep.1)<br></br>
차례를 지내다 (cha ryeh reul ji nae da) - to do cha ryeh (the traditional ritual) (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://image.news1.kr/system/photos/2018/2/2/2944726/article.jpg"></img><br></br>
<br></br>
<br></br>

과일 (gwa il) - fruit<br></br>
식혜 (sik hae) - rice drink<br></br>
나물 (na mul) - herbs<br></br>
떡국 (tteok guk) - rice cake soup<br></br>

어르신 (uh reu shin) - elders<br></br>
세배 (sae bae) - greeting on first day of lunar new year<br></br>
아침 (ah chim) - morning<br></br>
인사 (in sah) - greeting<br></br>
새뱃돈 (sae baet don) - money you get on 설 (sul) from elders after greeting them<br></br>
<br></br>
성묘 (sung myo) - process of tending to/cleaning ancestor’s graves (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://jhealthfile.joins.com/photo//2019/09/06/13416ba165db0.jpg"></img><br></br>
<br></br>
조상 (jo sang) - ancestor<br></br>
묘 (myo) - grave<br></br>


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
        <Ep22></Ep22>
        </div>
    );
}


  const Episode22 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode22;