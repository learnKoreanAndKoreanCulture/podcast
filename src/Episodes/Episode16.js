import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep16 extends React.Component{
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
                        <h1 className="title">Episode 16: New Year’s</h1>
                        <h5 className="korean-title">에피소드 16: 새해</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

새해 (sae hae) - New Year<br></br>
제야의 종 (jae ah eh jong)- bell of december 31st aka bell of the last day of the year (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://pds.joins.com/news/component/htmlphoto_mmdata/201812/31/96b38f86-c016-4830-8388-5ce26cd929ec.jpg"></img><br></br>
<br></br>
종 (jong) - bell<br></br>
한 해 (han hae) - one year<br></br>
마감하다 (ma gahm da) - to end<br></br>
날 (nal) - day<br></br>
치다 (chi da) - to hit<br></br>
<br></br>
불교 (bul gyo) - buddhism<br></br>
유래 (yoo rae) - origin<br></br>
전통 (jun tong) - tradition<br></br>
<br></br>
해 (hae) - sun<br></br>
뜨다 (tteu da) - to rise<br></br>
보러 (bo ruh) - to watch<br></br>
많이 (man eeh) - a lot<br></br>
가다 (gah da) - to go<br></br>
특희 (teuk hee) - especially<br></br>
해변가 (hae byun gah) - beach<br></br>
산 (san) - mountain<br></br>
<br></br>
나이 (nah eeh) - age<br></br>
다르다 (dah reu da) - to be different<br></br>
1월 1일 (eeh wol eeh ril) - january 1st<br></br>
떡국 (tteok guk) - Korean rice cake soup (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://thumb.mt.co.kr/06/2020/01/2020010109062738646_1.jpg/dims/optimize/"></img><br></br>
<br></br>
먹다 (muk da) - to eat<br></br>
<br></br>
Expression: 나이를 1살 더 먹다 - to age one year<br></br>
나이 (nah eeh) - age, 1살 (han sal) - one year, 더 (duh) - more, 먹다 (muk da) - to eat<br></br>



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
        <Ep16></Ep16>
        </div>
    );
}


  const Episode16 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode16;