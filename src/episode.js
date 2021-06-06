import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import p1 from "./epPhotos/ep1.jpeg"
import p2 from "./epPhotos/ep2.jpeg"
import p3 from "./epPhotos/ep3.jpeg"
import p4 from "./epPhotos/ep4.jpeg"
import p5 from "./epPhotos/ep5.jpeg"
import p6 from "./epPhotos/ep6.png"
import p7 from "./epPhotos/ep7.jpeg"
import p8 from "./epPhotos/ep8.jpeg"
import p9 from "./epPhotos/ep9.jpeg"
import p10 from "./epPhotos/ep10.jpeg"
import p11 from "./epPhotos/ep11.jpeg"
import p12 from "./epPhotos/ep12.jpeg"
import p13 from "./epPhotos/ep13.jpeg"
import p14 from "./epPhotos/ep14.jpeg"
import p15 from "./epPhotos/ep15.jpeg"
import p16 from "./epPhotos/ep16.jpeg"
import p17 from "./epPhotos/ep17.jpeg"
import p18 from "./epPhotos/ep18.jpeg"
import p19 from "./epPhotos/ep19.jpeg"
import p20 from "./epPhotos/ep20.jpeg"
import p21 from "./epPhotos/ep21.jpeg"
import p22 from "./epPhotos/ep22.jpeg"
import p23 from "./epPhotos/ep23.jpeg"
import p24 from "./epPhotos/ep24.jpeg"
import p25 from "./epPhotos/ep25.jpg"
import p26 from "./epPhotos/ep26.jpeg"
import p27 from "./epPhotos/ep27.png"
import p28 from "./epPhotos/ep28.jpeg"
import p29 from "./epPhotos/ep29.jpeg"
import p30 from "./epPhotos/ep30.jpeg"
import pSp1 from "./epPhotos/sp1.jpeg"



/* ---------------------RESOURCES--------------------- */
class Episodes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="longerPageEpisodes container-fluid">
                <button className="home-button"><Link to="/">Home</Link></button>
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">Episodes</h1>
                        <h5 className="korean-title">에피소드 목록</h5>
                        <h6 className="eps-par">click on the episode title to see the vocab list</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={pSp1}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/SpecialEpisode1">Special Episode 1: Korean Swear Words (욕설)</Link></h5>
                                <p class="card-text">{this.props.sp1}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p30}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode30">EP 30: 미신 (Korean Superstitions)</Link></h5>
                                <p class="card-text">{this.props.ep30}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p29}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode29">Episode 29: Korean Societal Issues (사회적인 문제)</Link></h5>
                                <p class="card-text">{this.props.ep29}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p28}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode28">Episode 28: Korean Legend Stories (한국의 전설)</Link></h5>
                                <p class="card-text">{this.props.ep28}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p27}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode27">Episode 27: EP 26: Korean Slang PT. 2 (속어)</Link></h5>
                                <p class="card-text">{this.props.ep27}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p26}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode26">EP 26: Korean Slang PT. 1 (속어)</Link></h5>
                                <p class="card-text">{this.props.ep26}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p25}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode25">Episode 25: Korean Independence Day (3.1절)</Link></h5>
                                <p class="card-text">{this.props.ep25}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p24}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode24">Episode 24: Cultural Differences of Korea and US (한국과 미국의 문화적인 차이)</Link></h5>
                                <p class="card-text">{this.props.ep24}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p23}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode23">Episode 23: Korean Sokdam, aka Sayings and Proverbs (속담)</Link></h5>
                                <p class="card-text">{this.props.ep23}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p22}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode22">Episode 22: Korean Lunar New Year (설)</Link></h5>
                                <p class="card-text">{this.props.ep22}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p21}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode21">Episode 21: Traveling in Seoul PT. 2 (서울 여행지)</Link></h5>
                                <p class="card-text">{this.props.ep21}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p20}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode20">Episode 20: Traveling in Seoul (서울 여행지) PT.1</Link></h5>
                                <p class="card-text">{this.props.ep20}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p19}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode19">Episode 19: Korean Street Food (길거리 음식)</Link></h5>
                                <p class="card-text">{this.props.ep19}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p18}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode18">Episode 18: Korean Folk Music (한국음악)</Link></h5>
                                <p class="card-text">{this.props.ep18}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p17}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode17">Episode 17: The 12 Animal Zodiacs (십이간지)</Link></h5>
                                <p class="card-text">{this.props.ep17}</p>
                            </div>
                        </div>
                        
                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p16}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode16">Episode 16: New Year’s (새해)</Link></h5>
                                <p class="card-text">{this.props.ep16}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p15}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode15">Episode 15: K-pop PT.2 (케이팝)</Link></h5>
                                <p class="card-text">{this.props.ep15}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p14}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode14">Episode 14: K-pop PT.1 (케이팝)</Link></h5>
                                <p class="card-text">{this.props.ep14}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p13}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode13">Episode 13: Schools in Korea (한국의 학교)</Link></h5>
                                <p class="card-text">{this.props.ep13}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p12}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode12">Episode 12: Korean Names (이름)</Link></h5>
                                <p class="card-text">{this.props.ep12}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p11}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode11">Episode 11: Korean Variety Shows (한국 예능)</Link></h5>
                                <p class="card-text">{this.props.ep11}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p10}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode10">Episode 10: Korean UNESCO World Heritage Sites PT.2 (한국 유네스코 세계문화유산)</Link></h5>
                                <p class="card-text">{this.props.ep10}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p9}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode9">Episode 9: Korean UNESCO World Heritage Sites PT. 1 (한국 유네스코 세계문화유산)</Link></h5>
                                <p class="card-text">{this.props.ep9}</p>
                            </div>
                        </div>
                        
                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p8}></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode8">Episode 8: Honorifics and Formalities (존댓말)</Link></h5>
                                <p class="card-text">{this.props.ep8}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p7} alt="Picture of taekwondo kids"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode7">Episode 7: Korean Traditional Food (한식)</Link></h5>
                                <p class="card-text">{this.props.ep7}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p6} alt="Picture of taekwondo kids"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode6">Episode 6: Taekwondo (태권도)</Link></h5>
                                <p class="card-text">{this.props.ep6}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p5} alt="Picture of chuseok table"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode5">Episode 5: Chuseok (추석)</Link></h5>
                                <p class="card-text">{this.props.ep5}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p4} alt="Picture of seoul"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode4">Episode 4: Hallyu Wave (한류)</Link></h5>
                                <p class="card-text">{this.props.ep4}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p3} alt="alcohol"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode3">Episode 3: Alcohol (술)</Link></h5>
                                <p class="card-text">{this.props.ep3}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p2} alt="kimchi"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode2">Episode 2: Kimchi (김치)</Link></h5>
                                <p class="card-text">{this.props.ep2}</p>
                            </div>
                        </div>

                        {/*Card*/}
                        <div class="card epCard">
                            <img class="card-img-top" src={p1} alt="hanbok"></img>
                            <div class="card-body">
                                <h5 class="card-title"><Link className="card-title-link" to="/Episode1">Episode 1: Hanbok (한복)</Link></h5>
                                <p class="card-text">{this.props.ep1}</p>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className="col-1"></div>
                </div>

                <div className="row"><div className="col-12 spacer5"></div></div>
            </div>


        )
    }
}


/* -------------------------Variables------------------------- */
var ep1="For our first episode, we discuss 한복 (hanbok), a type of traditional wear in Korea! We’ll talk about the meaning of different colors, patterns, and types of hanbok, so come along to learn more about this beautiful traditional clothing!"
var ep2="Koreans joke that all a Korean needs to survive is Kimchi and rice—that’s how popular and important kimchi is in Korea! Come along to learn more about how to make kimchi, the types of kimchi, and more!"
var ep3="Korea has quite the drinking culture when it comes to 술, or alcohol. We'll be discussing this culture, types of popular drinks in Korea, and more!"
var ep4="The Hallyu (한류) movement is what brought international attention to Korea through K-Pop, K-Dramas, K-skincare, and so much more! Come along to learn more about how Korea became so much more well-known and popular over the past 20 years."
var ep5="Happy 추석 (chuseok)! Chuseok is one of the most important holidays in Korea. Come along to learn about what we do during chuseok, the origins of chuseok, and more!"
var ep6="태권도 (Taekwondo) is a form of martial arts in Korea. This sport has become incredibly popular—not just in Korea, but abroad as well. It’s an official Olympic sport now, so come along to learn more about the techniques and popularity behind Taekwondo!"
var ep7="In Korea, we refer to Korean food as 한식 (han-sik)! Come learn about our most popular dishes, ranging from Korean bbq ribs to seafood pancakes."
var ep8="Korean is quite a difficult to language to learn because there is formal and informal language. Come along to learn about the differences between the two, and how you should address and talk to someone formally!"
var ep9="Korea is a small country, but it’s full of beautiful nature and sites. Come learn about three of the UNESCO World Heritage Sites in Korea and why they’re so treasured!"
var ep10="Welcome back to part two of the episode, where we continue discussing UNESCO world heritage sites in Korea!"
var ep11="Korean variety shows include a LOT of different categories—from talent shows to comedy talk shows, they’re so versatile and various. Come along to learn more about the types of variety TV shows we have and some of my own recommendations!"
var ep12="Have you ever wondered what the origins of Korean names are, and how they came to be? Come along to learn more about Korean names and their history!"
var ep13="Have you ever wondered what going to school in Korea is like? How different or similar is it to your culture? Come along to learn more about schools and education in Korea!"
var ep14="K-Pop has grown to become one of the most popular genres in international music today. Come learn about the history and rise of K-pop, and why it’s so popular!"
var ep15="We learn more about K-pop in part two of this series! Come along to learn more about modern k-pop and its influences on Korea!"
var ep16="You've probably heard of Chinese New Year, but how much do you know about Korean New Year’s! Come along to learn about Korean New Year traditions, including the special stew you must eat in order to a year older!"
var ep17="Have you heard of the 12 Animal Zodiacs before? The 12 zodiacs are very frequently referenced in Korean culture, and their legends have been retold countless times throughout Korea’s history. Come along to learn more about the zodiacs, and even find out what zodiac you are!"
var ep18="Let's dive into the world of Korean folk music! Korean folk music isn’t so widely known today as much as kpop, but Korean folk music is traditional Korean music that has been passed down for generations. Come along to learn more about popular genres of Korean folk music and even hear what they sound like!"
var ep19="길거리 음식, or street food, is super delicious! We’ll talk about some of the best food you can find in the streets/street markets, and some of my recommendations!"
var ep20="Seoul, or 서울, is the current capital of Korea! This beautiful city is full of places to eat and visit, so here are some of my recommendations on where you can go!"
var ep21="In this part 2 episode, we continue learning about 서울, the capital of Korea! This beautiful city is full of places to eat and visit, so here are some more recommendations on where you can go!"
var ep22="Happy Lunar New Year!! Today, we learn about the importance of Lunar New Year in Korea and how it differs from New Year’s on January 1st!"
var ep23="The Korean language is FULL of fun, traditional sayings and proverbs—come along to learn about some of the most popular sayings and how to use them!"
var ep24="Ever wondered how different Korea is from Western countries like the US? This topic was actually suggested by a listener—so come along to learn more about how the two countries’ cultures differ!"
var ep25="Happy Korean Independence Day! March 1st is a very important day for Koreans—it marks the anniversary of 3.1절, the movement towards independence from imperialist Japan. This is a very special and important day for Korea, so tune in to learn more about what exactly Korean Independence Day is about!"
var ep26="Ever wonder what the Korean equivalent of words like ‘LOL’ or ‘OMG’ are? If so, come along to learn more about Korean slang, what they mean, and how to use them!"
var ep27="In this part 2 episode, we continue learning more Korean slang words!"
var ep28="Today, we learn about Korean legends! We’ll be discussing two in particular: the story of the rabbit and turtle, as well as the story of how a bear became human. Come along to learn more about these famous Korean stories!"
var ep29="Korea faces a variety of societal issues today, ranging from the education system to the elderly. Come along to learn more about some important problems we’re dealing with in Korea today!"
var ep30="Curious to learn more about superstitions in Korea? Why we don’t write people’s name in red ink or why the number 4 is considered unlucky? If so, listen on!"
var sp1="This episode is explicit! We will be learning common Korean swear words."


function App() {
    return (
        <div>
            <Episodes ep1={ep1} ep2={ep2} ep3={ep3} ep4={ep4} ep5={ep5} ep6={ep6} ep7={ep7} ep8={ep8} ep9={ep9} ep10={ep10}
            ep11={ep11} ep12={ep12} ep13={ep13} ep14={ep14} ep15={ep15} ep16={ep16} ep17={ep17} ep18={ep18} ep19={ep19} ep20={ep20}
            ep21={ep21} ep22={ep22} ep23={ep23} ep24={ep24} ep25={ep25} ep26={ep26} ep27={ep27} ep28={ep28} ep29={ep29} ep30={ep30}
            sp1={sp1}
            ></Episodes>
        </div>
    );
}



  const Episode = () => (
    <div className='app'>
       <App />
    </div>
  );


export default Episode;