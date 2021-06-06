import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Episodes from './episode';
import Episode1 from "./Episodes/Episode1";
import Episode2 from "./Episodes/Episode2";
import Episode3 from "./Episodes/Episode3";
import Episode4 from "./Episodes/Episode4";
import Episode5 from "./Episodes/Episode5";
import Episode6 from "./Episodes/Episode6";
import Episode7 from "./Episodes/Episode7";
import Episode8 from "./Episodes/Episode8";
import Episode9 from "./Episodes/Episode9";
import Episode10 from "./Episodes/Episode10";
import Episode11 from "./Episodes/Episode11";
import Episode12 from "./Episodes/Episode12";
import Episode13 from "./Episodes/Episode13";
import Episode14 from "./Episodes/Episode14";
import Episode15 from "./Episodes/Episode15";
import Episode16 from "./Episodes/Episode16";
import Episode17 from "./Episodes/Episode17";
import Episode18 from "./Episodes/Episode18";
import Episode19 from "./Episodes/Episode19";
import Episode20 from "./Episodes/Episode20";
import Episode21 from "./Episodes/Episode21";
import Episode22 from "./Episodes/Episode22";
import Episode23 from "./Episodes/Episode23";
import Episode24 from "./Episodes/Episode24";
import Episode25 from "./Episodes/Episode25";
import Episode26 from "./Episodes/Episode26";
import Episode27 from "./Episodes/Episode27";
import Episode28 from "./Episodes/Episode28";
import Episode29 from "./Episodes/Episode29";
import Episode30 from "./Episodes/Episode30";
import SpecialEpisode1 from "./Episodes/SpecialEpisode1";


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/episodes' component={Episodes}></Route>
      <Route exact path='/Episode1' component={Episode1}></Route>
      <Route exact path='/Episode2' component={Episode2}></Route>
      <Route exact path='/Episode3' component={Episode3}></Route>
      <Route exact path='/Episode4' component={Episode4}></Route>
      <Route exact path='/Episode5' component={Episode5}></Route>
      <Route exact path='/Episode6' component={Episode6}></Route>
      <Route exact path='/Episode7' component={Episode7}></Route>
      <Route exact path='/Episode8' component={Episode8}></Route>
      <Route exact path='/Episode9' component={Episode9}></Route>
      <Route exact path='/Episode10' component={Episode10}></Route>
      <Route exact path='/Episode11' component={Episode11}></Route>
      <Route exact path='/Episode12' component={Episode12}></Route>
      <Route exact path='/Episode13' component={Episode13}></Route>
      <Route exact path='/Episode14' component={Episode14}></Route>
      <Route exact path='/Episode15' component={Episode15}></Route>
      <Route exact path='/Episode16' component={Episode16}></Route>
      <Route exact path='/Episode17' component={Episode17}></Route>
      <Route exact path='/Episode18' component={Episode18}></Route>
      <Route exact path='/Episode19' component={Episode19}></Route>
      <Route exact path='/Episode20' component={Episode20}></Route>
      <Route exact path='/Episode21' component={Episode21}></Route>
      <Route exact path='/Episode22' component={Episode22}></Route>
      <Route exact path='/Episode23' component={Episode23}></Route>
      <Route exact path='/Episode24' component={Episode24}></Route>
      <Route exact path='/Episode25' component={Episode25}></Route>
      <Route exact path='/Episode26' component={Episode26}></Route>
      <Route exact path='/Episode27' component={Episode27}></Route>
      <Route exact path='/Episode28' component={Episode28}></Route>
      <Route exact path='/Episode29' component={Episode29}></Route>
      <Route exact path='/Episode30' component={Episode30}></Route>
      <Route exact path='/SpecialEpisode1' component={SpecialEpisode1}></Route>
    </Switch>
  );
}

export default Main;