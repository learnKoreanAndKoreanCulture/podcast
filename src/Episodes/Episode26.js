import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep26 extends React.Component{
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
                        <h1 className="title">EP 26: Korean Slang PT. 1</h1>
                        <h5 className="korean-title">에피소드 26: 속어</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

꿀잼 (ggul jam) – something that is super fun/interesting<br></br>

꿀 (ggul) – honey<br></br>

잼 (jam) – derived from 재미있어요 (which means ‘interesting’)<br></br>

반대 (ban dae) – opposite<br></br>

노잼 (noh jam) – something that is not super fun/interesting<br></br>

모쏠 (moh ssol) – abbreviation of 모태솔로<br></br>

모태 (moh tae) – mother’s womb<br></br>

솔로 – solo<br></br>

태어나다 (tae uh na da) – to be born<br></br>

심쿵 (shim kung) – slang term from 심장 and 쿵쿵<br></br>

심장 (shim jang) – heart<br></br>

쿵쿵 (kung kung) – booming sound of heart<br></br>

갑이다 (gap ih da) – something is the most powerful<br></br>

현웃 (hyun ut) – LOL<br></br>

현실 (hyun shil) – reality<br></br>

웃음 (ut seum) – laugh<br></br>

헐 (hul) – omg; used for something shocking/surprising<br></br>

짤 (jjal) – photo<br></br>

사진 (sha jin) – photo<br></br>

덕후 (duk who) – someone obsessed with something<br></br>

웃프다 (ut puh da) – when something is funny but sad<br></br>

웃기다 (ut gi da) – to be funny<br></br>

슬프다 (seul puh da) – to be sad<br></br>






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
        <Ep26></Ep26>
        </div>
    );
}


  const Episode26 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode26;