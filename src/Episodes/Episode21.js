import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep21 extends React.Component{
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
                        <h1 className="title">Episode 21: Traveling in Seoul PT. 2</h1>
                        <h5 className="korean-title">에피소드 21: 서울 여행지</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

서울 (seoul) - the capital city of South Korea<br></br>
여행지 (yeo hang ji) - travel destination<br></br>
<br></br>
<b><a target="_blank" href="https://en.wikipedia.org/wiki/Han_River_(Korea)">1. 한강 (han kang) - a famous lake in Korea</a></b> (pictured below)<br></br>
<br></br>
<img className="epPic" src="https://post-phinf.pstatic.net/MjAyMDEwMjBfNzAg/MDAxNjAzMTg3MjU3MDA5.yKWro3uS2TxQzm2FvPDwDU56X19R_hN9-oCuXEFh764g.a14WCoT6cNMTtW2M35r2ztRKXk2aWMX8bp9hNckmUPAg.JPEG/iStock-1092676254.jpg?type=w1200"></img><br></br>
<br></br>

한강 다리 (han kang da ri) - hangang bridge<br></br>
다리 (da ri) - bridge<br></br>
<br></br>
영화 (young hwa) - movie<br></br>
드라마 (duh ra ma) - drama<br></br>
<br></br>
야경 (ya gyeong) - view in the night<br></br>
최고다 (che go da) - to be the best<br></br>
<br></br>
한강시민공원 망원 지구 - night view is great from this location<br></br>
시민 (shi min) - citizen<br></br>
공원 (gong won) - park<br></br>
아름답다 (ah reum dap da) - to be beautiful<br></br>
성산대교 (sung san dae gyo) - another bridge in han gang<br></br>
<br></br>

<b><a target="_blank" href="https://en.wikipedia.org/wiki/Myeong-dong">2. 명동 (myeong dong) - popular shopping area (pictured below)</a></b><br></br>
<br></br>
<img className="epPic-m" src="http://img.hani.co.kr/imgdb/resize/2017/0519/149508642721_20170519.JPG"></img><br></br>
<br></br>
관광객 (gwan gwang gaek) - tourist<br></br>
가다 (ga da) - to go<br></br>
<br></br>
쇼핑 (sho ping) - shopping<br></br>
먹을 수 있다 (muk eul soo it da) - to be able to eat<br></br>
활기찬 (hwal gi chan) - lively, vibrant<br></br>
분위기 (boon wi gi) - atmosphere<br></br>
<br></br>

<b><a target="_blank" href="https://en.wikipedia.org/wiki/War_Memorial_of_Korea">3. 용산 전쟁기념관 - Korean War Memorial (pictured below)</a></b><br></br>
<br></br>
<img className="epPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Korean.War.Memorial.01.jpg/1200px-Korean.War.Memorial.01.jpg"></img><br></br>
<br></br>
용산 (yong san) - a district in Seoul<br></br>
전쟁 (jeon jang) - war<br></br>
기념관 (gi nyeom gwan) - memorial<br></br>
<br></br>
한국 (han gook) - South Korea<br></br>
분단 (boon dan) - separated<br></br>
국가 (gook gah) - countryv
<br></br>
6.25 전쟁 (yook eeh oh jeon jang) - the Korean War<br></br>
미국 (mi guk) - USA<br></br>
대한민국 (dae han min guk) - South Korea
중국 (joong gook) - China<br></br>
북한 (book han) - North Korea<br></br>
<br></br>
역사 (yeok sah) - history<br></br>
관심 (gwan shim) - interest
관심이 있다 (gwan shim eeh it da) - to have an interest in<br></br>
꼭 (kkok) - must<br></br>
가보다 (gah boh da) - to try going to<br></br>
<br></br>
<b><a target="_blank" href="https://en.wikipedia.org/wiki/Insa-dong">4. 인사동 (in sa dong) - street in Korea</a></b><br></br>
<br></br>
<img className="epPic" src="https://post-phinf.pstatic.net/MjAyMDExMDZfMjUg/MDAxNjA0NjIwNzM5NzAx.e0BQ6deeOyCSdyEawR3i2TwGTByro3tkVSQVeLwSTy0g.3PTzhMhM49huB3nf69QNnhpRgmuChCbubOCaBo4xA2Eg.JPEG/DLTJ000.jpg?type=w1200"></img><br></br>
<br></br>
한지 (han ji) - Korean traditional paper<br></br>
알록달록 (al lok dal lok) - various colors<br></br>



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
        <Ep21></Ep21>
        </div>
    );
}


  const Episode21 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode21;