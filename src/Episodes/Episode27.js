import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep27 extends React.Component{
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
                        <h1 className="title">Episode 27: Korean Slang PT. 2</h1>
                        <h5 className="korean-title">에피소드 27: 속어</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

쩐다 (jjun dah) – to be super cool (쩔어)<br></br>

새 신발 쩐다!- your new shoes are dope!<br></br>

새 (sae) – new<br></br>

신발 (shin bal) – shoes<br></br>

썸 (ssum) – when two people aren’t dating but seem to like each other<br></br>

썸을 타다 (ssum eul ta da) – 2 people getting along before they date<br></br>

셀카 (sel ka) – selfie<br></br>

강추 (gang chu) – strong recommendation<br></br>

강한 (gang han) – strong<br></br>

추천 (chu chun) – recommendation<br></br>

기생충을 강추해! – I strongly recommend Parasite<br></br>

기생충 (gi saeng choong) – parasite (a famous movie in Korea)<br></br>

뇌색남 (nue saek nam) – smart, attractive guy<br></br>

뇌 (nue) – brain<br></br>

색시 (saek shi) – sexy<br></br>

남자 (nam ja) – man<br></br>

금사빠 (geum sa ppa) – person who falls in love easily<br></br>

금방 (geum bang) – quickly<br></br>

사랑 (sa rang) – love<br></br>

빠지다 (ppa ji da) – to fall in<br></br>

넘사벽 (num sah byeok) – something that can’t be surpassed<br></br>

넘을 수 없다 (num eul soo up da) – to not be able to overcome, climb, surpass<br></br>

사차원 (sah cha won) – fourth dimension<br></br>

벽 (byeok) – wall<br></br>

짱 (jjang) – great, amazing<br></br>

너는 정말 짱이다! (nuh neun jung mal jjang eeh da) – you’re the best!, you’re so amazing!<br></br>

왕따 (wang dda) – outcast<br></br>

뻥치지 마 (bbung chi ji ma) – don’t lie<br></br>

뻥 (bbung) – lie<br></br>



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
        <Ep27></Ep27>
        </div>
    );
}


  const Episode27 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode27;