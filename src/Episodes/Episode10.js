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
                        <h1 className="title">Episode 10: Korean UNESCO World Heritage Sites PT.2</h1>
                        <h5 className="korean-title">에피소드 10: 한국 유네스코 세계문화유산</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

한국 (han gook) - korea<br></br>
셰계 (sae gae) - world<br></br>
문화 (mun hwa) - culture<br></br>
유산 (yoo san) - heritage sites<br></br>
<br></br>
<b>1. 산사 (san sa) - mountain temple<br></br></b>
Read more about 산사 on the UNESCO Website in <a target="_blank"  href="https://heritage.unesco.or.kr/%EC%82%B0%EC%82%AC-%ED%95%9C%EA%B5%AD%EC%9D%98-%EC%82%B0%EC%A7%80-%EC%8A%B9%EC%9B%90/">Korean</a> and <a  target="_blank" href="https://whc.unesco.org/en/list/1562/">English</a><br></br>

<img className="epPic" src="http://san.chosun.com/site/data/img_dir/2018/07/31/2018073100801_0.jpg"></img><br></br>
<br></br>
<img className="epPic" src="http://img.khan.co.kr/news/2018/06/30/2018063001003661100296631.jpg"></img><br></br>
<br></br>
불교 (bul gyo)- Buddhism<br></br>
절 (jul) - temple<br></br>
묶어서 (mukk uh su)- tied<br></br>
세계유산 (sae gae yoo san) - world site<br></br>
등재하다 (deung jae ha da) - to list<br></br>
서쪽 (seo jjok) - south<br></br>
년 (nyun) - year (2000년 = year of 2000)<br></br>
사이에 (sa ee eh) - between<br></br>
건축되다 (gun chuk dae da) - to build<br></br>
종교 (jong gyo) - religion<br></br>
활동 (hwal dong) - activity<br></br>
의례 (euh rae) - ritual<br></br>
강학 (gang hak) - lecture<br></br>
그리고 (geu ri go) - and<br></br>
수행 (su haeng) - practice<br></br>
<br></br>
아주 (ah ju) - very<br></br>
오래된 (oh rae den) - old<br></br>
역사 (yuk sah) - history<br></br>
가지고있다 (ga ji go it da) - to have<br></br>
신성한 (shin sung han) - sacred<br></br>
<br></br>

<b>2. 서원 (suh won) - Neo-Confucian academies<br></br></b>
Read more about 서원 on the UNESCO Website in <a target="_blank"  href="https://heritage.unesco.or.kr/%ED%95%9C%EA%B5%AD%EC%9D%98-%EC%84%9C%EC%9B%90/">Korean</a> and <a target="_blank"  href="https://whc.unesco.org/en/list/1498/">English</a><br></br>

<img className="epPic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Korea-Andong-Dosan_Seowon_3025-06.JPG/1200px-Korea-Andong-Dosan_Seowon_3025-06.JPG"></img><br></br><br></br>
<img className="epPic-m" src="https://www.mcst.go.kr/attachFiles/cultureInfoCourt/monthServ/1569214971244.jpg"></img><br></br>
<br></br>
조선시대 (jo seon shi dae) - Joseon time period<br></br>
성리학 (sung ri hak)- Confucianism<br></br>
전국 (jeon guk) - the entire country<br></br>
전파하다 (jun pa ha da) - to spread<br></br>
도우다 (do wu da) - to help<br></br>
경전 (gyung jun) - scriptures<br></br>
연구 (yeon gu) - research<br></br>
수행하다 (su haeng ha da) - to carry out<br></br>
이상적 (ee sang juk) - ideal<br></br>
인간 (een gan) - person<br></br>
인간형 (een gan hyung) - human qualities<br></br>
물 (mul) - water<br></br>
<br></br>

<b>3. 남한산성 - nam han san seung<br></br></b>
Read more about 남한산성 on the UNESCO Website in <a target="_blank"  href="https://heritage.unesco.or.kr/%EB%82%A8%ED%95%9C%EC%82%B0%EC%84%B1/">Korean</a> and <a target="_blank"  href="https://whc.unesco.org/en/list/1439/">English</a><br></br>

<img className="epPic" src="https://storage.doopedia.co.kr/upload/_upload/jwupload/image/201509/18/20150918140028381/20150918140028381_thumb_1024.JPG"></img><br></br>
<br></br>
<img className="epPic-m" src="http://img.yonhapnews.co.kr/etc/inner/KR/2018/09/30/AKR20180930040500061_01_i.jpg"></img><br></br>
<br></br>
성 (sung) - castle<br></br>
임시 (im shi) - temporary<br></br>
수도 (su do) - capital<br></br>
한민족 (han min jok) - people of korea<br></br>
독립성 (dok rip sung) - independence<br></br>
상징 (sang jing) - symbol<br></br>


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