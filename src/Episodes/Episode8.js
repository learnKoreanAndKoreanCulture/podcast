import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep8 extends React.Component{
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
                        <h1 className="title">Episode 8: Honorifics and Formalities</h1>
                        <h5 className="korean-title">에피소드 8: 존댓말</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">
존댓말 (jon det mal) - formal language<br></br>
반말 (ban mal) - casual language<br></br>
<br></br>
일단은 (il dan eun) - so first<br></br>
호칭 (ho ching) - title<br></br>
다 (da) - all<br></br>
오빠 (oppa) - title for older males/older brother used by females<br></br>
여자 (yeo ja) - woman<br></br>
남자 (nam ja) - man<br></br>
단어 (dan euh) - word<br></br>
형 (hyung) - title for older males/older brother used by males<br></br>
언니 (eunni) - title for older female/older sister used by females<br></br>
누나 (nunna) - title for older female/older sister used by males<br></br>
선배 (sunbae) - senior<br></br>
후배 (hoobae) - junior <br></br>
<br></br>
막내 (maknae) - youngest<br></br>
다른 (da reun) - other<br></br>
나라 (na ra) - country<br></br>
<br></br>
씨 (ssi) - title to indicate respect<br></br>
님 (nim) - title to indicate respect<br></br>
<br></br>
Examples:<br></br>
진우 오빠, 안녕하세요!  - Hello Jinwoo oppa!<br></br>
내 누나는 착해. - My older sister (nuna) is nice.<br></br>
주연 선배, 잘 지내셨어요? - Jooyeon sunbae, how have you been?<br></br>
지연씨, 만나서 반갑습니다! - Jiyeon-ssi, nice to meet you!<br></br>
<br></br>
친구 (chingu) - friend<br></br>
동생 (dong sang) - younger siblings or people younger than you<br></br>
나의 (na eeh) - age<br></br>
같다 (gat da) - to be the same<br></br>
더 어리다 (duh eu ri da) - to be younger than<br></br>
<br></br>
할아버지 (hal a bu ji) - grandfather<br></br>
할머니 (hal muh ni) - grandmother<br></br>
선생님 (sun saeng nim) - teacher<br></br>
교수님 (gyo suh nim) - professor<br></br>
부모 (buh mo) - parents<br></br>
<br></br>
중요하다 (jung yo ha da) - to be important<br></br>
좋은 점 (jo eun jum) - good points<br></br>
나쁜 점 (na ppeun jum) - bad points<br></br>
예를 들면 (ye reul dul myun) - for example<br></br>
쓰다 (sseu da) - to use<br></br>
심부름 (ssim bu rum) - chores<br></br>
<br></br>
기분 (gi bun) - feeling<br></br>
나쁘다 (na ppeu da) - to be bad<br></br>
기분이 나쁘다 (gi bun ee na ppeu da)- to offend<br></br>
제대로 (jae dae ro) - properly<br></br>
어떻게 (eu ddeuk kae) - how<br></br>
나아요 (na ah yo) - it’s better<br></br>




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
        <Ep8></Ep8>
        </div>
    );
}


  const Episode8 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode8;