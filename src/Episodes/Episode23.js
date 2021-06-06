import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep23 extends React.Component{
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
                        <h1 className="title">Episode 23: Korean Sokdam, aka Sayings and Proverbs</h1>
                        <h5 className="korean-title">에피소드 23: 속담</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">



한국어 (han guk euh) - Korean<br></br>
속담 (sok dam) - proverb/traditional sayings <br></br>
배우다 (bae ooh da) - to learn<br></br>
꼭 (kkok) - must<br></br>
알아야하다 (al ah ya ha da) - must know<br></br>
그래서 (geu rae suh) - 내<br></br>
오늘 (oh neul) - today<br></br>
자주 쓰다 (ja joo sseu da) - to use frequently<br></br>
<br></br>
1. 그림의 떡<br></br>
그림 (geu rim) - drawing, painting<br></br>
떡 (tteok) - rice cake<br></br>
보이다 (bo eeh da) - to see<br></br>
먹다 (muk da) - to eat<br></br>
가지다 (ga ji da) - to have<br></br>
소용없다 (soh yong up da) - there’s no point (in doing something)<br></br>
ex) 새 컴퓨터를 사고 싶어도 돈이 없어요. 그림의 떡이에요. = I want to buy a new computer, but I don’t have money. It’s like a rice cake in a painting.<br></br>
<br></br>
2. 등잔 밑이 어둡다.<br></br>
등잔 (deung jan) - oil lamp<br></br>
밑 (mitt) - below<br></br>
어둡다 (uh dupe da) - to be dark<br></br>
가까운 (ga kka un) - close, near<br></br>
멀다 (mul da) - to be far<br></br>
오히려 (oh hi ryeo) - rather, actually, more<br></br>
<br></br>
3. 병 주고 약 준다<br></br>
병 (byung) - illness<br></br>
주다 (joo da) -  to give<br></br>
약 (yak) - medicine<br></br>
방해하다 (bang hae ha da) - to get in the way<br></br>
도와주다 (doh wa ju da) - to help<br></br>
<br></br>
4. 믿는 도끼에 발등 찍힌다<br></br>
믿는 (mid neun) - trusted (comes from 믿다 - to trust)<br></br>
도끼 (do kki) - axe<br></br>
발등 (bal deung) - top of foot<br></br>
찍히다 (jjik hi da) - to get swung on<br></br>
배신 (bae shin) - betrayal<br></br>
배신 당하다 (bae shin dang ha da) - to be betrayed<br></br>
<br></br>
5. 식은 죽 먹기<br></br>
식다 (shik da) - to get cold<br></br>
죽 (juk) - rice soup<br></br>
먹다 (muk da) - to eat<br></br>
ex) 이번 시험 치는 것은 식은 죽 먹기다 = Taking test was like drinking cold rice soup.<br></br>
<br></br>


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
        <Ep23></Ep23>
        </div>
    );
}


  const Episode23 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode23;