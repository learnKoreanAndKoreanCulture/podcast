import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep7 extends React.Component{
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
                        <h1 className="title">Episode 7: Korean Traditional Food</h1>
                        <h5 className="korean-title">에피소드 7: 한식</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

한식 (han shik) - Korean food<br></br>
밥 (bap) - rice, meal<br></br>
필요하다 (pil yo ha da) - to need<br></br>
보통은 (bo tong eun) - normally<br></br>
<a target="_blank"  href="https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTBfMTkz/MDAxNDg2NjY4OTgwMDEw.Gx18aRwIwDc1wdpwyFgPhWj8l6ai0oaJL3u8T0mKHxEg.bZG3HNq3be0SNkLemlrESaleRgU0izNDvd0t-nUeqjMg.JPEG.doong2ne_/cats16.jpg?type=w800">국 (guk)</a> - soup<br></br>
<a target="_blank"  href="https://upload.wikimedia.org/wikipedia/commons/1/10/Banchan_2.jpg">반찬 (ban chan)</a> - side dishes (pictured below)<br></br>
<br></br>
<img className="epPic" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Banchan_2.jpg"></img><br></br>
<br></br>

김치 (kimchi) - fermented, salted vegetables<br></br>
확인하다 (hwak in ha da) - to check out<br></br>
<br></br>
그리고 (gu ri go) - and also<br></br>
<a target="_blank"  href="https://s23209.pcdn.co/wp-content/uploads/2019/04/Korean-Beef-BulgogiIMG_9246.jpg">불고기 (bul go gi)</a> - marinated beef dish (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg"></img><br></br>
<br></br>
<a target="_blank"  href="https://lh3.googleusercontent.com/EQvzf5F4NVzUAry6lsbzSUpDvgArJh5eUstyZzcowynTjdHUOIbvya4h0oigU1vN1agYfs-lsff1iadPDg-D4Aguh1fB2xAzFbphQw=w600-rj-l68-e365">갈비 (gal bi)</a> - korean bbq rib<br></br>
상 (sang) - grill tray<br></br>
바로 (ba ro) - immediately<br></br>
굽다 (gup da) - to grill<br></br>
<br></br>
<a target="_blank"  href="https://www.koreanbapsang.com/wp-content/uploads/2010/01/DSC_1060-1.jpg">잡채 (jap chae)</a> - stir fried noodles with vegetables<br></br>
쫄깃쫄깃하다 (jjoul git jjoul git ha da) - to be chewy<br></br>
<br></br>
<a target="_blank"  href="https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bibimbap.jpg">비빔밥 (bi bim bap)</a> - mixed rice bowl (pictured below)<br></br>
<br></br>
<img className="epPic" src="https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg"></img><br></br>
<br></br>
야채 (ya chae) - vegetables<br></br>
고기 (go gi) - meat<br></br>
소스 (sou su) - sauce<br></br>
비비다 (bi bi da) - to mix<br></br>
간단하다 (gan dan ha da) - to be simple<br></br>
맛있다 (mat shid da) - to be tasty<br></br>
<br></br>
<a target="_blank"  href="https://www.koreanbapsang.com/wp-content/uploads/2019/12/DSC3273.jpg">해물파전 (hae mul pa jeon)</a> - seafood pancakes<br></br>
전 (jeon) - korean pancakes<br></br>
해물 (hae mul) - seafood<br></br>
파 (pa) - scallion<br></br>
<br></br>
<a target="_blank"  href="https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg">김밥 (kimbap)</a> - rice roll (pictured below)<br></br>
<br></br>
<img className="epPic" src="http://www.chungjungone.com/knowhow/images/blog/recipe/1084/1.jpg"></img><br></br>
<br></br>
말다 (mal da) - to roll<br></br>
김 (kim) - seaweed<br></br>
싸다 (ssa da) - to wrap <br></br>
<br></br>
전통 (jun tong) - traditional<br></br>
인기 (in ki) - popular<br></br>
<a target="_blank"  href="https://craftlog.com/m/i/1127775=s1280=h960">양념치킨 (yang yeum chi kin)</a> - marinated/seasoned chicken<br></br>
고구마 (go gu ma) - sweet potato<br></br>
배달 (bae dal) - delivery<br></br>
문화 (mun hwa) - culture<br></br>
편하다 (pyeon ha da) - to be comfortable/easy <br></br>



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
        <Ep7></Ep7>
        </div>
    );
}


  const Episode7 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode7;