import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep17 extends React.Component{
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
                        <h1 className="title">Episode 17: The 12 Animal Zodiacs</h1>
                        <h5 className="korean-title">에피소드 17: 십이간지</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

12 동물 띠 (12 dong mul ttee)- twelve animal zodiacs<br></br>
동물 (dong mul) - animal<br></br>
12간지 (ship eeh gan ji) - the zodiacs<br></br>
쥐 (ji) - rat/mouse<br></br>
소 (soh) - ox<br></br>
호랑이 (ho rang eeh) - tiger<br></br>
토끼 (to kki) - rabbit<br></br>
용 (yong) - dragon<br></br>
뱀 (bem) - snake<br></br>
말 (mal) - horse<br></br>
양 (yang) - sheep<br></br>
원숭이 (won sung eeh) - monkey<br></br>
닭 (dak) - chicken<br></br>
개 (gae) - dog<br></br>
돼지 (dwae ji) - pig<br></br>
<br></br>
자축인요니사오미신유술해 - the 12 zodiacs in order (in 한자 aka hanja)<br></br>
<br></br>
<img className="epPic" src="https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTJfOTEg/MDAxNTQ3MjQzMTI2OTE1.hmpNYOV0TcUgeWRkuAubqpnojgZ9wOXr_WdtekM1KnIg.2y5f6EY7Rw-146Q3u-bdfJdp3HoG4_M9Pg5HkwuHzDIg.JPEG.teatree725/2.jpg?type=w800"></img><br></br>
<br></br>

올해 (ol hae) - this year<br></br>
해 (hae) - year<br></br>
<br></br>
태어나다 (tae uh na da) - to be born<br></br>
사람들 (sah ram deul) - people<br></br>
부르다 (bul reu da) - to call<br></br>
유래 (yoo rae) - origin<br></br>
대해서 (dae hae suh) - about<br></br>
<br></br>
여러 가지 (yuh ruh ga ji) - many different, multiple<br></br>
설 (sul) - legends<br></br>
<br></br>
옛날 (yet nal) - long time ago<br></br>
동물 (dong mul) - animal<br></br>
주다 (juh da) - to give<br></br>
문 (moon) - door<br></br>
도달하다 (do dal ha da) - reach<br></br>
짐승 (jim sung) - animal/creature<br></br>
부터 (buh teh) - from<br></br>
약속 (yak sok) - promise<br></br>
약하다 (yak ha da) - weak<br></br>
붙다 (but da) - to stick<br></br>
먼저 (muhn juh) - first<br></br>
도착하다 (doh chak ha da) - to arrive<br></br>
순간 (sun gan) - moment<br></br>
뛰어내리다 (ttee uh nae li da) - to jump off<br></br>
통과하다 (tong gwa ha da) - to pass through<br></br>
<br></br>
머리가 좋다 (muh ri ga joht da) - to be intelligent (literally means: head is good)<br></br>
친근하다 (chin gun ha da) - to be friendly<br></br>
<br></br>
Check these out if you want to learn more about your animal zodiac + associated personality:<br></br>
More about years <a target="_blank" href="https://m.blog.naver.com/PostView.nhn?blogId=enfl234&logNo=150023835519&proxyReferer=https:%2F%2Fwww.google.com%2F">here</a> and more about the legend <a target="_blank" href="https://m.blog.naver.com/bhubu7777/30183070361">here</a> (in Korean)<br></br>
<a target="_blank" href="https://www.expatguidekorea.com/article/the-12-animals-of-the-korean-zodiac.html">Here’s</a> an English version of similar content<br></br>


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
        <Ep17></Ep17>
        </div>
    );
}


  const Episode17 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode17;