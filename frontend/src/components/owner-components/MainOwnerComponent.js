import { useRouteMatch, Switch, Route } from "react-router";
import OwnerParks from "./ParkListComponent";
import NewParkInfo from "./NewParkInfo";
import EditParkInfo from "./EditParkInfo";
import ShowParkInfo from "./ShowParkInfo";
import OwnerParkStatus from "./StatusManage";

function MainOwner() {
    let { path, url } = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route exact path={`${url}/myparks`}><OwnerParks /></Route>
                <Route exact path={`${url}/edit/:id`}><EditParkInfo /></Route>
                <Route exact path={`${url}/status/:id`}><OwnerParkStatus/></Route>
                <Route exact path={`${url}/info/:id`}><ShowParkInfo /></Route>
                <Route exact path={`${url}/newpark`}><NewParkInfo /></Route>
            </Switch>
        </div>
    );
}

export default MainOwner;