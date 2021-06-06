import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "index";
import history from './history';
import Episodes from "./episode";
import Episode1 from "./Episodes/Episode1";
import Episode2 from "./Episodes/Episode2";
import Episode3 from "./Episodes/Episode3";
import Episode4 from "./Episodes/Episode4";
import Episode5 from "./Episodes/Episode5";
import Episode6 from "./Episodes/Episode6";
import Episode7 from "./Episodes/Episode7";
import Episode8 from "./Episodes/Episode8";
import Episode9 from "./Episodes/Episode9";
import Episode9 from "./Episodes/Episode10";
import Episode1 from "./Episodes/Episode11";
import Episode2 from "./Episodes/Episode12";
import Episode3 from "./Episodes/Episode13";
import Episode4 from "./Episodes/Episode14";
import Episode5 from "./Episodes/Episode15";
import Episode6 from "./Episodes/Episode16";
import Episode7 from "./Episodes/Episode17";
import Episode8 from "./Episodes/Episode18";
import Episode9 from "./Episodes/Episode19";
import Episode9 from "./Episodes/Episode20";
import Episode1 from "./Episodes/Episode21";
import Episode2 from "./Episodes/Episode22";
import Episode3 from "./Episodes/Episode23";
import Episode4 from "./Episodes/Episode24";
import Episode5 from "./Episodes/Episode25";
import Episode6 from "./Episodes/Episode26";
import Episode7 from "./Episodes/Episode27";
import Episode8 from "./Episodes/Episode28";
import Episode9 from "./Episodes/Episode29";
import SpecialEpisode1 from "./Episodes/SpecialEpisode1";



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/episodes" component={Episodes} />
                    <Route path="/Episode1" component={Episode1} />
                    <Route path="/Episode2" component={Episode2} />
                    <Route path='/Episode3' component={Episode3}></Route>
                    <Route path='/Episode4' component={Episode4}></Route>
                    <Route path='/Episode5' component={Episode5}></Route>
                    <Route path='/Episode6' component={Episode6}></Route>
                    <Route path='/Episode7' component={Episode7}></Route>
                    <Route path='/Episode8' component={Episode8}></Route>
                    <Route path='/Episode9' component={Episode9}></Route>
                    <Route path='/Episode10' component={Episode10}></Route>
                    <Route path='/Episode11' component={Episode11}></Route>
                    <Route path='/Episode12' component={Episode12}></Route>
                    <Route path='/Episode13' component={Episode13}></Route>
                    <Route path='/Episode14' component={Episode14}></Route>
                    <Route path='/Episode15' component={Episode15}></Route>
                    <Route path='/Episode16' component={Episode16}></Route>
                    <Route path='/Episode17' component={Episode17}></Route>
                    <Route path='/Episode18' component={Episode18}></Route>
                    <Route path='/Episode19' component={Episode19}></Route>
                    <Route path='/Episode20' component={Episode20}></Route>
                    <Route path='/Episode21' component={Episode21}></Route>
                    <Route path='/Episode22' component={Episode22}></Route>
                    <Route path='/Episode23' component={Episode23}></Route>
                    <Route path='/Episode24' component={Episode24}></Route>
                    <Route path='/Episode25' component={Episode25}></Route>
                    <Route path='/Episode26' component={Episode26}></Route>
                    <Route path='/Episode27' component={Episode27}></Route>
                    <Route path='/Episode28' component={Episode28}></Route>
                    <Route path='/Episode29' component={Episode29}></Route>
                    <Route path='/Episode30' component={Episode30}></Route>
                    <Route path='/SpecialEpisode1' component={SpecialEpisode1}></Route>
                </Switch>
            </Router>
        )
    }
}