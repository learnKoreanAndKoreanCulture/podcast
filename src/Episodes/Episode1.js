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
                        <h1 className="title">Episode 1: Hanbok</h1>
                        <h5 className="korean-title">에피소드 1: 한복</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">
전통 (jun tong) - traditional<br></br>
시작하다 (shi jak ha da) - to start<br></br>
고구려, 백제, 신라 (삼국시대) - names of the 3 kingdoms that ruled throughout the korean peninsula<br></br>
<br></br>
색깔 (saek gal) - color<br></br>
하얀색 (ha yan sek) - white<br></br>
빨강 (ppal gang) - red<br></br>
복 (bok) - good fortune<br></br>
노랑색 (noh rang saek) - yellow<br></br>
우주의 중심 (ooh juu ae jung shim) - center of the universe<br></br>
의미 (euh mee) - meaning<br></br>
왕족 (wang jok) - royalty<br></br>
문늬 (muh neh) - pattern<br></br>
용 (yong) - dragon<br></br>
호랑이 (ho rang eeh) - tiger<br></br>
학 (hak) - crane<br></br>
<br></br>
<img className="epPic" src="https://pds.joins.com//news/component/htmlphoto_mmdata/201710/03/4a200cb6-b2a0-4131-adfb-58787eecb520.jpg"></img><br></br>
<br></br>
구성 (gu sung) - configuration<br></br>
저고리 (jeo go ri) - top half of hanbok<br></br>
치마 (chi ma) - skirt<br></br>
바지 (ba ji) - pants<br></br>
조끼 (jo kki) - vest<br></br>
<br></br>
<img className="epPic-m" src="https://t1.daumcdn.net/cfile/blog/184F91264A5ED43B30"></img><br></br>
<br></br>
신발 (shin bal) - shoes<br></br>
꽃신 (kkot shin) - flower (꽃) shoes (신) (pictured below)<br></br>
<br></br>
<img className="epPic-sm" src="https://upload.wikimedia.org/wikipedia/commons/7/72/%ED%99%94%ED%98%9C%EC%9E%A5.jpg"></img><br></br>
<br></br>
비싸다 (bi ssah da) - expensive<br></br>
만들기 힘들다 (man deul gi him deul da) - hard to make<br></br>
집신 (jip shin)- straw shoes (pictured below)<br></br>
<br></br>
<img className="epPic-sm" src="https://folkency.nfm.go.kr/upload/img/20180823/20180823112342_t_.jpg"></img><br></br>
<br></br>
갓 (gat) - traditional hats<br></br>
<br></br>
<img className="epPic-sm" src="https://pds.joins.com/news/component/htmlphoto_mmdata/201902/26/f8372e05-b093-4e4d-a697-4f48b41b1a4b.jpg"></img><br></br>
<br></br>
젓가락 (jut ga rak) - chopsticks<br></br>
비녀 (bi nyuh) - hair accessory<br></br>
<br></br>
<img className="epPic-sm" src="http://mnews.imaeil.com/inc/photos/2019/01/07/2019010711241564198_l.jpg"></img><br></br>
<br></br>
장식 (jang shik) - decoration<br></br>
<br></br>
고름 (go reum) - coat string<br></br>
소매통 (so mae tong) - sleeve<br></br>
색 (saek) - color<br></br>
색에 따라 (saek eh dda ra) - depending on the color<br></br>
신분 (shin bun) - social status<br></br>
<br></br>
요즘 (yo jeum)- these days, recently<br></br>
특별한 날 (teuk byul han nal) - special days<br></br>
경복궁 (gyung bok gung) - one of the old, traditional palaces in korea<br></br>
그리고 (gu ri go) - and, furthermore<br></br>
경험 (gyung hum) - experience<br></br>
<br></br>
한복에 대해서 (han bok eh deh hae suh) - about hanbok<br></br>




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