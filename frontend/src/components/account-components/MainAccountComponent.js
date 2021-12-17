import React from "react";
import { BrowserRouter, Switch, Route, Redirect, withRouter, useRouteMatch } from "react-router-dom";

import ChangeInfo from "./ChangeInfo";
import HistoryPark from "./HistoryPark";
import LovePark from "./LovePark";
import OrderPark from "./OrderPark";


function MainAccountComponent(){
  let { path, url } = useRouteMatch();
  
  return (
    <div>
        <Route exact path={`${url}/info`}>
          <ChangeInfo />
        </Route>
        <Route exact path={`${url}/favorite`}>
          <LovePark />
        </Route>
        <Route exact path={`${url}/parking`}>
          <HistoryPark />
        </Route>
        <Route exact path={`${url}/pending`}>
          <OrderPark/>
        </Route>
        
    </div>
  );
};

export default MainAccountComponent;
