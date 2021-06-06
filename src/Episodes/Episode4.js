import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep4 extends React.Component{
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
                        <h1 className="title">Episode 4: Hallyu Wave</h1>
                        <h5 className="korean-title">에피소드 4: 한류</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

한류 (han ryu)- Korean wave<br></br>
한자 (han ja)- Chinese characters<br></br>
<br></br>
곡 (kok)- song<br></br>
이른 (ii run)- early<br></br>
시작 (shi jak)- beginning<br></br>
처음 (chu eoum)- first<br></br>
그리고 (gu ri go)- and<br></br>
발표하다 (bal pyo ha da)- release (a song)<br></br>
X 말고도 (mal go do)- besides X<br></br>
소녀 (so nyu)- girl<br></br>
시대 (shi dae)- generation<br></br>
<br></br>
Picture of Girl's Generation below:<br></br>
<img className="epPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Girls%27_Generation_at_DMC_Festival_2015_MBC_Radio_DJ_Concert_02.jpg/1200px-Girls%27_Generation_at_DMC_Festival_2015_MBC_Radio_DJ_Concert_02.jpg"></img><br></br>
<br></br>
이유 (ii yu)- reason<br></br>
SNS - social media<br></br>
예능 (ye neung)- Korean variety TV shows<br></br>
올리다 (ol li da)- upload<br></br>
<br></br>
문화 (moon hwa)- culture<br></br>
세계 (sae gae)- world<br></br>
퍼지다 (puh ji da)- spread out<br></br>
흔들다 (heun dul da)- shake<br></br>
이때 (ii tte) - at this time<br></br>
요즘 (yo jeum)- recently<br></br>
인기 (in ki) - popular<br></br>
장난 (jang- joke<br></br>
    <br></br>
미국 (mi guk)- America<br></br>
방송 (bang song)- TV show<br></br>
미쳤죠 (mi chut jo)- it’s crazy<br></br>
<br></br>
도깨비 (do gge bi)- Korean goblin<br></br>
태양 (tae yang)- sun<br></br>
사극 (sa guk)- Korean period (dramas)<br></br>
배우 (bae woo) - actors<br></br>
<br></br>
여자 (yeo ja)- women<br></br>
종류 (joung ryu)- type<br></br>
좋다 (jout da)- good<br></br>
<br></br>
영향 (young hyang)- impact/influence<br></br>
한국어 (han guk uh)- Korean<br></br>
많아지다 (man a ji da) - increase<br></br>
<br></br>
한복 (han bok)- traditional korean clothes (check out episode 1!)<br></br>
경복궁 (kyung bok gung)- famous Korean “castle”<br></br>
사진 (sa jin)- photo<br></br>
찍다 (jjik da)- take (a picture)<br></br>
음악 (eum ak)- music<br></br>
책 (chek)- book<br></br>
역사 (yuk sa) - history<br></br>
깊다 (gip da)- literally means deep, but in this context means long (history)<br></br>



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
        <Ep4></Ep4>
        </div>
    );
}


  const Episode4 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode4;