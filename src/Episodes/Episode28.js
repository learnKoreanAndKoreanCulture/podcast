import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep28 extends React.Component{
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
                        <h1 className="title">Episode 28: Korean Legend Stories</h1>
                        <h5 className="korean-title">에피소드 28: 한국의 전설</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


용왕 (yong wang) – King of the ocean (왕 – king)<br></br>
<br></br>
What paintings imagine 용왕 to be:
<br></br>
<img className="epPic-m" src="https://i.pinimg.com/originals/f7/c4/43/f7c443dd73648a7eb1dd7b2a6e88e498.jpg"></img><br></br>
<br></br>

딸 (ddal) – daughter<br></br>

병들다 (byung deul da) – to have an illness<br></br>

앓다 (al da) – to be sick<br></br>

의원 (euh won) – doctor, physician<br></br>

토끼 (to kki) – rabbit<br></br>

간 (gan) – liver<br></br>

필요하다 (pil yo ha da) – to need<br></br>

거북이 (guh book eeh) – turtle<br></br>

육지 (yook ji) – land<br></br>

올라가다 (ol la ga da) – to go up to<br></br>

하지만 (ha ji man) – but<br></br>

헤엄치다 (hae eum chi da) – to swim<br></br>

가다가 (ga da ga) – while going<br></br>

진실 (jin sil) – truth<br></br>

말하다 (mal ha da) – to say<br></br>

진실을 말하다 (jin sil eul mal ha da) – to say the truth, to confess<br></br>

육지 (yook ji) – land<br></br>

데려다주다 (dae ryeo da ju da)- to bring something/someone somewhere<br></br>

도망가다 (do mang ga da) – to run away<br></br>
<br></br>
이야기 (eeh ya gi) – story<br></br>

곰 (gom) – bear<br></br>

호랑이 (ho rang eeh) – tiger<br></br>

인간 (in gan) – human<br></br>

되고 싶다 (dwae goh ship da) – to want to become<br></br>

그래서 (geu rae suh) – so<br></br>

환웅 (hwang oong) – legendary founder of 고조선<br></br>

동굴 (dong geul) – cave<br></br>

100일 (baek il) – 100 days<br></br>

동안 (dong an) – during, while<br></br>

빛 (bit) – light<br></br>

보지 않다 (boh ji an da) – to not see<br></br>

쑥 (ssuk) – mugwort (bitter herb)<br></br>

마늘 (ma neul) – garlic<br></br>

먹다 (muk da) – to eat<br></br>

<br></br>
The bear and tiger begging to be turned into humans:
<br></br>
<img className="epPic-m" src="https://blog.kakaocdn.net/dn/bN0aB1/btqJWS5NuxT/15S2fOcx0nIWU4q3lfTGl0/img.jpg"></img><br></br>
<br></br>

중간 (jung gan) – the middle<br></br>

도망치다 (doh mang chi da) – to run away<br></br>

21일 (eeh ship il) – 21 days<br></br>

인간이 되다 (in gan eeh dwae da) – to become human<br></br>

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
        <Ep28></Ep28>
        </div>
    );
}


  const Episode28 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode28;