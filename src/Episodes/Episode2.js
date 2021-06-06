import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep2 extends React.Component{
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
                        <h1 className="title">Episode 2: Kimchi</h1>
                        <h5 className="korean-title">에피소드 2: 김치</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

<img className="epPic" src="http://img.khan.co.kr/news/2016/12/09/l_2016120901001299800104967.jpg"></img><br></br>
배추 (bae chu) - Napa cabbage<br></br>
소금에 절이다 (so geum eh jul eeh da) - marinate in salt<br></br>
고추 (go chu) - pepper<br></br>
마늘 (ma neul) - garlic<br></br>
생강 (saeng gang) - ginger<br></br>
숙성 (suk sung) - ferment<br></br>
<br></br>
야채 (ya chae) - vegetable<br></br>
오이 (oh eeh) - cucumber<br></br>
무 (muh) - korean radish<br></br>
깍두기 (kkak doh gi) - kimchi made with radish<br></br>
백김치 (baek kim chi) - white kimchi<br></br>
맵지 않다 (mep ji an tda) - not spicy<br></br>
시원하다 (shi one ha da) - refreshing<br></br>
<br></br>
장독 (jang dok) - traditional Korean pot to store Kimchi in (pictured below)<br></br>
<img className="epPic" src="https://lh3.googleusercontent.com/proxy/LiIv0_zTAZM-OYwkq-DViIPZRwIT5mtp_ib65s2LutEf5JWFUXfAHHyjObOn_QwidbqbVr7odh-BVOEsOIepFJMpiOIns4de6Y2C3amv6B7cQjBwURo"></img><br></br>
묻다 (mut da) - bury<br></br>
온도 (on do) - temperature<br></br>
일정 (il jung) - constant<br></br>
<br></br>
냄새 (nem sae) - smell<br></br>
강하다 (gang ha da) - strong<br></br>
외국인 (wae gook in) - foreigner<br></br>
짜다 (jja da) - salty<br></br>
맵다 (mep da) - spicy<br></br>
<br></br>
매일 (mae il) - every day<br></br>
먹다 (muk da) - to eat<br></br>
시간이 걸리다 (si gan eeh gul li da) - takes time<br></br>
추천 (chu cheon)- recommend<br></br>





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
        <Ep2></Ep2>
        </div>
    );
}


  const Episode2 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode2;