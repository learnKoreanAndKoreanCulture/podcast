import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep5 extends React.Component{
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
                        <h1 className="title">Episode 5: Chuseok</h1>
                        <h5 className="korean-title">에피소드 5: 추석</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

추석 (chuseok) - traditional holiday in Korea celebrating autumn harvest/honoring ancestors<br></br>
음력 (eum reok) - lunar calendar<br></br>
명절 (myung jul) - traditional holiday<br></br>
가을 (ga eul) - autumn<br></br>
추수 (chu su) - harvest<br></br>
성묘 (sung myo) - memorial services<br></br>
<br></br>
<a target="_blank"  href="https://en.wikipedia.org/wiki/Jesa">제사 (jae sa)</a>- memorial services<br></br>
차례 (cha rae) - memorial services (another word for jae sa 제사)<br></br>
가족 (ga jok) - family<br></br>
이웃 (ee ut) - neighbors<br></br>
음식 (eum shik) - food<br></br>
나누어 먹다 (na nu uh muk da) - to share food<br></br>
<a target="_blank"  href="https://en.wikipedia.org/wiki/Songpyeon">송편 (song pyeon)</a> - korean rice cakes<br></br>
<br></br>
<img className="epPic-m" src="http://health.chosun.com/site/data/img_dir/2020/09/29/2020092901408_0.jpg"></img><br></br>
<br></br>

신도주 (shin do ju) - rice wine<br></br>
토란국 (to ran guk) - type of soup<br></br>
과일 (gwa il) - fruit<br></br>
<br></br>
놀이 (nol ee) - play/activities<br></br>
<a target="_blank"  href="https://en.wikipedia.org/wiki/Ssireum">씨름 (ssi reum)</a> - wrestling<br></br>
<a target="_blank"  href="https://en.wikipedia.org/wiki/Yut">윷놀이 (yut nol li)</a> - board/stick game<br></br>
<br></br>
<img className="epPic-m" src="https://upload.wikimedia.org/wikipedia/commons/9/94/Yut-nori.jpg"></img><br></br>
<br></br>

닭싸움 (dak ssa eum) - physical hopping game<br></br>
<a target="_blank"  href="https://en.wikipedia.org/wiki/Juldarigi">줄다리기 (jul da ri gi)</a> - tug of war<br></br>
<br></br>
성묘 (sung myo) - tradition of visiting ancestor’s graves<br></br>
묘소 (myo so) - grave<br></br>
고향 (go hyang) - home (context of it being one’s childhood home where their family lives)<br></br>
벌초 (bul cho) - tending to and cleaning graves<br></br>
산 (san) - mountain<br></br>
조상 (jo sang) - ancestor<br></br>
찾아가다 (cha za ga da) - to find (visit)<br></br>
뵙다 (beb da) - to visit<br></br>
풍습 (pung sup) - tradition<br></br>
논란 (non ran) - controversy<br></br>
귀찮아하다 (gui chan a ha da) - to find annoying





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
        <Ep5></Ep5>
        </div>
    );
}


  const Episode5 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode5;