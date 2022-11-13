import React, { Component, Fragment} from "react";

import Home from "./component/Home.js/Home";
import Navs from './component/Navs/Navs';
import Header from './component/Home.js/Header';

class App extends Component{
  render(){
    return(
      <Fragment>
        <Navs />
        
        <Header />
        <Home />
      </Fragment>
    );
  }
}
export default App;
