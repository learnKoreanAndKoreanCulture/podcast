import React from 'react';
import ReactDOM from 'react-dom';
import './episodes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


/* ---------------------RESOURCES--------------------- */
class Ep12 extends React.Component{
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
                        <h1 className="title">Episode 12: Korean Names</h1>
                        <h5 className="korean-title">에피소드 12: 이름</h5>
                    </div>
                </div>

                {/*VOCABULARY*/}
                <div class="vocabList">


이름 (eeh reum) - Name (full name or first name)<br></br>
성 (sung) - last name<br></br>
<br></br>
예를 들면 (yae rul deul myeon) - for example<br></br>
김씨 (gim ssi) - Kim (한자: 金)<br></br>
인구 (in guh)  - population<br></br>
이씨 (eeh ssi) - Lee (한자: 李)<br></br>
박씨 (park ssi) - Park (한자: 朴)<br></br>
거의 (guh eeh) - almost<br></br>
반 (ban) - half<br></br>
<br></br>
역사 (yeok sah) - history<br></br>
혈통 (hyeol tong) - heritage, lineage<br></br>
알려주다 (al ryeo ju da) - to tell, to let know<br></br>
호칭 (ho ching) - name<br></br>
본관 (bon gwan) - clan<br></br>
<br></br>
이제는 (eeh jae neun) - now<br></br>
따다 (dda da) - to pick (in this context, to take the last name of dad)<br></br>
바꾸다 (ba kku da) - to change<br></br>
<br></br>
족보 (jok bo) - Korean genealogy book<br></br>
맏아들 (mahd ah deul) - oldest son<br></br>
*note that 아들 (ah deul) means son<br></br>
물려받다 (mul ryeo bad da) - to inherit<br></br>
<br></br>
*한자 (hanja)- chinese characters<br></br>
나연 (nayeon) - beautiful, 한자 (hanja): 娜娟<br></br>
많은 (man eun) - a lot<br></br>
영리함 (young ri ham) - intelligence, cleverness<br></br>
미아 (mi ah) - beautifully clear, 한자 (hanja): 媄雅<br></br>
미향 (mi hyang) - beautiful scent, 한자 (hanja): 媄香<br></br>
미화 (mi hwa) - beautifully shining ,한자 (hanja): 媄華<br></br>
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
        <Ep12></Ep12>
        </div>
    );
}


  const Episode12 = () => (
    <div className='app'>
        <App />
    </div>
  );


export default Episode12;