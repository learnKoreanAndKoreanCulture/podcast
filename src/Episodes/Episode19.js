import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep19 extends React.Component{
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
                        <h1 className="title">Episode 19: Korean Street Food</h1>
                        <h5 className="korean-title">에피소드 19: 길거리 음식</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">

길거리 (gil guh ri) - street<br></br>
음식 (eum shik) - food<br></br>
<br></br>
떡볶이 (tteokbokki) - Korean spicy rice cake dish (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://cdnweb01.wikitree.co.kr/webdata/editor/202007/07/img_20200707090644_7ebc248e.webp"></img><br></br>
<br></br>
해외 (hae wae) - overseas, international places<br></br>
인기 (in ki) - popularity<br></br>
많다 (man da) - to be a lot<br></br>
떡 (tteok) - rice cakes<br></br>
볶다 (bok da) - to fry, cook<br></br>
오댕 (oh dang) - fish cakes (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://i.pinimg.com/originals/c2/c6/0a/c2c60a962b91db5962f3c63421cbb23f.jpg"></img><br></br>
<br></br>
야채 (ya chae) - vegetables<br></br>
매운 소스 (mae un soh suh) - spicy sauce<br></br>
엄청 (uhm chung) - very, really<br></br>
<br></br>
순대 (suhn dae) - Korean blood sausage (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://t1.daumcdn.net/liveboard/dailylife/946d34355aab4a4a922de5215f8dc3ce.jpg"></img><br></br>
<br></br>
만두 (man do) - dumpling (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://pds.joins.com//news/component/htmlphoto_mmdata/201802/07/12621b47-8458-4025-9c77-e6930ac4c3ab.jpg"></img><br></br>
<br></br>
찌다 (jji da) - to steam, poach<br></br>
자주 (jah juh) - often<br></br>
먹다 (muk da) - to eat<br></br>
군만두 (goon man do) - roasted dumplings (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://mblogthumb-phinf.pstatic.net/MjAxNzA5MjZfMjQ1/MDAxNTA2NDMzMzE0MzA3.u3dNsERi4RP0gEqEA3uFCiA0w-efWlrXiQB7saYlIfgg.RgQSjcZCNuTF8lVimop6P8v6LOH3s0XnQzeQtaXaZjEg.JPEG.snowblue34/17.JPG?type=w800"></img><br></br>
<br></br>
바삭바삭 (bah sak bah sak) - to be crunchy<br></br>
국물 (guk mul) - soup<br></br>
찍다 (jjik da) - to dip in<br></br>
맛있다 (mat it da) - to be tasty<br></br>
튀김 (twi gim) - fries (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://post-phinf.pstatic.net/MjAxNzA3MjdfMjc2/MDAxNTAxMTMyMTY4NjUw.DLKzARqgDoYViRCZ9dQou9h_XglaQfWYLoP9PeF7z80g.fep33fRnidetl2RQGQox4k8hQhZWQJJEwNFtQolVlUwg.JPEG/%EB%AA%A8%EB%93%AC%ED%8A%80%EA%B9%80_%EB%85%B8%EB%9E%80%ED%8A%80%EA%B9%80%EB%B0%98%EC%A3%BD_%EB%B9%84%EB%B2%95_%EC%99%95%EA%B9%80%EB%A7%90%EC%9D%B4_%EB%A0%88%EC%8B%9C%ED%94%BC_%ED%8A%80%EA%B9%80%EA%B8%B0%EC%88%A0%EC%A0%84%EC%88%98_80-%3D.JPG?type=w1200"></img><br></br>
<br></br>
어묵 (uh muk) - fish cake (pictured below)<br></br>
<br></br>
<img className="epPic-m" src="https://lh3.googleusercontent.com/proxy/3wA80NIHZpoNvShmojf6RHEmvcmCi4xPVqR49ruhHkJQjVt_llfbBzLel3V9QuK8GCkOjB1A4N3Ij4qfKIsixNpj95xM5c2qTIpyg8nVkTTEXQL5RCmD56-luCDivFg"></img><br></br>
<br></br>
추운 날 (chu un nal) - cold day<br></br>
따뜻한 (dda ddeut han) - warm<br></br>
덜 추어지다 (dul chu wuh ji da) - less cold<br></br>
<br></br>
한국 (han gook) - korea<br></br>
음식점 (eum shik jum) - restaurant<br></br>
보통 (bo tong) - usually<br></br>
팔다 (pal da) - to sell<br></br>
하지만 (ha ji man) - but<br></br>
분식점 (bun shik jum) - Korean restaurants that sell inexpensive food<br></br>
가면 (gah myun) - if you go to<br></br>
다 (dah) - all<br></br>
먹어볼 수 있다 (muk uh bol suh it da) - can eat<br></br>
<br></br>
추천 (chu cheon) - recommend<br></br>
궁금한면 (gung guhm ha myeon) - if curious<br></br>
다른 (da reun) - different<br></br>
<br></br>
My recommendations on where to get Korean street food if you're in Korea:<br></br>
남대문 시장 (nam dae moon shi jang)<br></br>
명동 (myeong dong)<br></br>
홍대입구 (hong dae ip guh)<br></br>



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
        <Ep19></Ep19>
        </div>
    );
}


  const Episode19 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode19;