import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep1 extends React.Component{
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
                        <h1 className="title">EP 30: Korean Superstitions</h1>
                        <h5 className="korean-title">에피소드 30: 미신</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

미신 (mi shin) – superstition<br></br>

<br></br>

선풍기 (sun pung gi) – fan<br></br>

틀다 (teul da) – to turn on<br></br>

자다 (ja da) – to sleep<br></br>

죽는다 (jook neun da) – to die<br></br>

<br></br>

엿 (yeot) – traditional Korean taffy<br></br>

붙다 (but da) – to stick<br></br>

그래서 (geu rae suh) – so<br></br>

수능 (suh neung) – Korean college admissions test (check out ep. 13)<br></br>

치다 (chi da) – to take (a test)<br></br>

먹다 (muk da) – to eat<br></br>

공부 (gong buh) – studies<br></br>

머리 (muh ri) – head<br></br>

생각하다 (saeng gak ha da) – to think, believe<br></br>

<br></br>

이름 (eeh reum) – name<br></br>

빨강 (ppal gang) – red<br></br>

적다 (juk da) – to write <br></br>

죽은 사람 (guk eun sah ram) – dead person<br></br>

<br></br>

사 (sah) – four (4)<br></br>

재수 (jae suh) – fortune<br></br>

재수 없다 (jae suh up da) – no luck, fortune<br></br>

한자 (han ja) – Chinese characters Korean was based off of<br></br>

어떤 (euh ttun) – some<br></br>

대신 (dae shin) – instead<br></br>

쓰다 (sseu da) – to use<br></br>

<br></br>

밤 (bam) – night<br></br>

휘파람 (whi pah ram) – whistle<br></br>

불다 (bul da) – to blow<br></br>

귀신 (gwi shin) – ghost<br></br>

뱀 (bem) – snake<br></br>
<br></br>

문지방 (moon ji bang) – threshold between rooms in the door<br></br>

밟다 (balb da) – to step on<br></br>

복 (bok) – fortune<br></br>

나간다 (nah gan da)- leave<br></br>

조상님 (joh sang nim) – ancestor<br></br>

앉다 (ahn da) – to sit<br></br>

고려시대 (go yeo shi dae) – goryeo (Korean kingdom founded in 918) dynasty<br></br>

집 (jip) – house<br></br>


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
        <Ep1></Ep1>
        </div>
    );
}


  const Episode1 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode1;