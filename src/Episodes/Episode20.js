import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep20 extends React.Component{
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
                        <h1 className="title">Episode 20: Traveling in Seoul PT. 1</h1>
                        <h5 className="korean-title">에피소드 20: 서울 여행지</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


수도 (soo doe) - capital<br></br>
서울 (seoul) - capital city of South Korea<br></br>
꼭 가야한다 (kkok ga ya han da) - must gov
<br></br>
첫번째 (chut bun jjae) - first<br></br>
<br></br>
<b><a target="_blank" href="https://en.wikipedia.org/wiki/Changdeokgung">1. 창덕궁 (chang deok goong)</a> - palace in Seoul (pictured below)</b><br></br>
<br></br>
<img className="epPic" src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjNfNDYg/MDAxNDk4MjAyNTkxMjg3.no-rp6mCC4PWjZp5723bqPKez0V3vJLCFTkszGpJok4g.ft7Wzdq1LuI8e64ApI-BoiLUrvr2cLQgR6v8I54RrOsg.JPEG.mwhead/%EC%99%B8%EA%B5%AD%EC%86%90%EB%8B%98_%EC%99%B8%EA%B5%AD%EC%9D%B8_%EC%86%90%EB%8B%98_%EC%84%9C%EC%9A%B8%EC%8B%9C%ED%8B%B0%ED%88%AC%EC%96%B4_%EC%B0%BD%EB%8D%95%EA%B6%81_%ED%9B%84%EC%9B%90_%EB%B9%84%EC%9B%90_%EC%98%88%EC%95%BD_%2830%29.jpg?type=w800"></img><br></br>
<br></br>
<img className="epPic" src="https://d2uh4olaxaj5eq.cloudfront.net/fit-in/0x1018/7297cbfd-932e-42ed-b47e-42a21f856ae7.jpg"></img><br></br>
<br></br>
임금 (im gum) - king<br></br>
살던 (sal dun) - used to live in<br></br>
공간 (gong gan) - place<br></br>
창덕궁 후원 (chang duk goong who won) - garden inside the palace<br></br>
금지된 (geum ji dwen) - forbidden<br></br>
정원 (jung won) - garden<br></br>
<br></br>
한복 (hanbok) - traditional Korean clothing<br></br>
대여하다 (dae yuh ha da) - borrow, rent<br></br>
입다 (ip da) - to wear<br></br>
돌아다니다 (dol ah da ni da) - to go around<br></br>
사진을 찍다 (sah jin eul jjik da) - to take picture<br></br>
시간을 보내다 (shi gan eul boh nae da) - to spend time<br></br>
<br></br>
두번째 (doo bun jjae) - second<br></br>
<b><a target="_blank" href="https://en.wikipedia.org/wiki/Bukchon_Hanok_Village"> 2.북촌 한옥마을 (buk chon han ok ma eul)</a> - village of Korean traditional houses (pictured below)</b><br></br>
<br></br>
<img className="epPic" src="https://youimg1.tripcdn.com/target/100p11000000r4rhv9EF4_C_750_500.jpg?proc=source%2Ftrip"></img><br></br>
<br></br>
한옥 (han ok) - korean traditional house<br></br>
마을 (mah eul) - village<br></br>
<br></br>
기와집 (gi wah jip) - traditional Korean house with 기와 (tiled roofs)<br></br>
집 (jip) - house<br></br>
기와 (gi wah) - tiled roofs<br></br>
<br></br>
상당히 (sang dang hi) - fairly<br></br>
비싸다 (bi ssa da) - expensive<br></br>
평민 (pyung min) - peasants, normal people<br></br>
어려웠어요 (euh ryeo wot suh yo) - it was difficult<br></br>
<br></br>
<b><a target="_blank" href="https://en.wikipedia.org/wiki/Hongdae,_Seoul">3. 홍대 (hong dae)</a> - neighborhood in Korea (pictured below)</b><br></br>
<br></br>
<img className="epPic" src="http://tong.visitkorea.or.kr/cms/resource/77/2656577_image2_1.jpg"></img><br></br>
<br></br>
줄임말 (jul im mal) - abbreviation<br></br>
예술가 (yae sul ga) - artists<br></br>
모이다 (moh eeh da) - to gather<br></br>
<br></br>
음악 (eum ak) - music<br></br>
성지 (sung ji) - shrine<br></br>
<br></br>
생기다 (sang gi da) - to appear<br></br>
없어지다 (up suh ji da) - to disappear<br></br>
반복하다 (ban bok ha da) - to repeat<br></br>
<br></br>
미술 (mi sul) - art<br></br>
가게 (ga gae) - shop<br></br>
옷 (ot) - clothing<br></br>



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
        <Ep20></Ep20>
        </div>
    );
}


  const Episode20 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode20;