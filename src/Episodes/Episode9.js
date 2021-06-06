import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep9 extends React.Component{
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
                        <h1 className="title">Episode 9: Korean UNESCO World Heritage Sites PT.1</h1>
                        <h5 className="korean-title">에피소드 9: 한국 유네스코 세계문화유산</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


한국 (han gook) - korea<br></br>
셰계 (sae gae) - world<br></br>
문화 (mun hwa) - culture<br></br>
유산 (yoo san) - heritage sites<br></br>
<br></br>
<b>1. 석굴암, 불국사 - Buddhist grotto/temple</b><br></br>
Read more about 석굴암 and 불국사 in <a target="_blank" href="http://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1113700240000">Korean</a> and <a target="_blank" href="https://whc.unesco.org/en/list/736/">English</a><br></br>
<br></br>
<img className="epPic-m" src="http://world.kbs.co.kr/special/unesco/common/images/excellent_unesco1_5.jpg"></img><br></br>
<br></br>
<img className="epPic-m" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%EA%B2%BD%EC%A3%BC_%EB%B6%88%EA%B5%AD%EC%82%AC.jpg/1200px-%EA%B2%BD%EC%A3%BC_%EB%B6%88%EA%B5%AD%EC%82%AC.jpg"></img><br></br>
<br></br>
<img className="epPic-m" src="https://i.pinimg.com/originals/d9/0e/45/d90e45d2f07bbfbb0aec933bfa2a9638.jpg"></img><br></br>
<br></br>
산 (san) - mountain<br></br>
신라 - Silla<br></br>
시대 (shi dae) - times, era<br></br>
불교 (bul gyo)- Buddhism<br></br>
불상 (bul sang)- statue of Buddha<br></br>
바다 (ba da)- sea<br></br>
바라보다 (ba ra bo da) - looking at<br></br>
지었다 (ji ut da) - built<br></br>
건축 (gun chook) - building, construct<br></br>
종교 (jong gyo) - religion<br></br>
예술 (ye sul)  - arts<br></br>
가치 (ga chi) - value<br></br>
독특한 (dok teuk han) - special<br></br>
덕분에 (duk bun eh)- thanks to <br></br>
<br></br>

<b>2. 조선왕릉 - Joseon royal tombs</b><br></br>
Read more about 조선왕릉 in <a target="_blank" href="https://royaltombs.cha.go.kr/">Korean</a> and <a target="_blank" href="https://whc.unesco.org/en/list/1319/">English</a><br></br>
<img className="epPic" src="https://royaltombs.cha.go.kr/new/images/main/img_visual02.jpg"></img><br></br>
<br></br>
<img className="epPic-m" src="https://ggtour.or.kr/wp-content/uploads/2015/07/%EC%A1%B0%EC%84%A0%EC%99%95%EB%A6%891-1024x683.jpg"></img><br></br>
<br></br>
<img className="epPic-m" src="https://portal.nrich.go.kr/royalTomb/resources/royaltomb/image/sub/O005_img02.jpg"></img><br></br>
<br></br>
조선 - Joseon  <br></br>
왕릉 (wang reung) - royal tombs<br></br>
왕 (wang) - King<br></br>
흩어져있다 (heut teu ju it da) - spread out<br></br>
5세기에 걸쳐서 - over a period of 500 years<br></br>
묻다 (mut da) - bury<br></br>
아름답다 (ah reum dap da)- beautiful<br></br>
자연 (ja yeon)- nature<br></br>
<br></br>

<b>3. 종묘 - Jongmyo</b><br></br>
Read more about 종묘 in <a target="_blank" href="https://jm.cha.go.kr/">Korean</a> and <a target="_blank" href="https://whc.unesco.org/en/list/738/">English</a><br></br>
<img className="epPic" src="http://jm.cha.go.kr/JM/images/main/main_visual_01.jpg"></img><br></br>
<br></br>
<img className="epPic-m" src="https://lh3.googleusercontent.com/proxy/W8fD6qj7PDhu3aQxcwaDuBUrRxxqy-s9r1RED0nWAZzXF2ZvV6arDsWrzHQsFU7JuSMPpLLMZk-odFhR0jB6_b7ve_A96yCt-6RsMFX9xb1jPJFxqt2EqPTrHWqZ5Lm56GYfdHn-HJCnZXl3Ald8EXb-w1PwYt2SxdghSzc0lLD2GrfUel5iR0z7i8-EmPxEPqhseEaOuRvtsfYSAUGnnK7xkg"></img><br></br>
<br></br>
서울 - Seoul, capital city of Korea<br></br>
위한 (wee han) - for<br></br>
보존 (bo jeon) - preserve<br></br>
상태 (sang tae) - state<br></br>
우수하다 (woo su ha da) - great, excellent<br></br>
<br></br>
중심 (jung shim) - middle, main<br></br>
앞마당 (ap ma dang) - front yard<br></br>
길다란 (gil da ran) - long<br></br>
방 (bang) - room<br></br>





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
        <Ep9></Ep9>
        </div>
    );
}


  const Episode9 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode9;