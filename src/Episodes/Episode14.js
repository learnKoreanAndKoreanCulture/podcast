import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep14 extends React.Component{
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
                        <h1 className="title">Episode 14: K-pop PT.1</h1>
                        <h5 className="korean-title">에피소드 14: 케이팝</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

역사 (yeok sah) - history<br></br>
정말 (jung mal) - really<br></br>
한국 (han gook) - South Korea<br></br>
발전하다 (bal jun ha da) - to grow, develop<br></br>
도와주다 (do wah ju da) - to help<br></br>
<br></br>
6.25 전쟁 (yook eeh oh jun jang) - The Korean War<br></br>
전쟁 (jun jaeng) - war<br></br>
후 (who) - after (ex: 전쟁 후 = after the war)<br></br>
그렇게 (gu reuk kae) - like (that)<br></br>
잘 살다 (jal sal da) - to live well<br></br>
나라 (na rah) - country<br></br>
때문에 (ddae mun eh) - because<br></br>
많은 (man eun) - a lot<br></br>
미국 (mi guk) - america<br></br>
미국인 (mi guk in) - American<br></br>
X 밖에 모르다 (X bac que mo ru da) - to only know X <br></br>
<br></br>
젝스키스, HOT, 신화 - famous Kpop groups (HOT is pictured below)<br></br>
<br></br>
<img className="epPic-sm" src="https://image.ajunews.com/content/image/2018/08/21/20180821155328219204.jpg"></img><br></br>
<br></br>
아이돌 (ah eeh dol) - idol<br></br>
기획사 (gi whik sah) - agency<br></br>
3대 (sam dae) - big three/top there<br></br>
진짜 (jin jja) - really<br></br>
라이벌 (rah eh bul) - rival<br></br>
<br></br>
2000 년대 (eehc hun nyeon dae) - the 2000’s<br></br>
처음으로 (chu eum euh ro) - for the first time<br></br>
진입하다 (jin ip ha da) - to enter<br></br>
진출 (jin chul) - advancement/debut<br></br>
놀랍다 (nol lap da) - to be surprising<br></br>
자랑스럽다 (ja rang suh reup da) - to be proud of<br></br>
<br></br>
Wonder Girls during their hit song "Nobody" promotions:
<br></br>
<img className="epPic-m" src="https://t1.daumcdn.net/cfile/tistory/24206D35587DE30E21"></img><br></br>
<br></br>
아주 많은 (ah ju man eun) - a lot<br></br>
인기를 끌다 (in gih reul ggeul da) - to be popular<br></br>
일본 (il bon) - japan<br></br>
<br></br>
예기하다 (yae gi ha da) - to talk about<br></br>
까먹다 (gga muk da) - to forget<br></br>
한 때 (han ddae) - at one point, at some point in time<br></br>
조회수 (joh hwae suh) - views<br></br>
제일 (jae il) - most (제일 많다 = has the most)<br></br>
1억 (il uhk) - 100 million views<br></br>
돌파하다 (dol pa ha da) - to break through<br></br>
넘었다 (num euht da) - surpassed<br></br>
<br></br>
마침내 (ma chim nae) - finally<br></br>
2011년 (eeh chun ship il nyun) - year of 2011<br></br>
2012년 (eeh chun ship eeh nyun) - year of 2012<br></br>
전세계 (jun sae gae) - the whole world<br></br>
알려지다 (al ryeo ji da) - to become known<br></br>
공연하다 (gong yeon ha da) - to perform<br></br>
<br></br>
해외 (hae wae) - international countries/places<br></br>
인기를 얻다 (in gi reul uht da) - to gain popularity<br></br>
구성하다 (guh sung ha da) - to form/establish<br></br>
도와주다 (doh wah ju da) - to help<br></br>
그들 (geuh deul) - they<br></br>
없다 (up da) - to not be there (없었으면 up sut seuh myun- if they were not there)<br></br>
유명한 (yuh myung han) - famous<br></br>
성공 (sung gong) - success<br></br>
성공을 누리다 (sung gong eul nuh ri da) - to enjoy success<br></br>
힘들다 (him deul da) - difficult<br></br>




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
        <Ep14></Ep14>
        </div>
    );
}


  const Episode14 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode14;