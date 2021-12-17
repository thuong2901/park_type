import { useRouteMatch, Switch, Route, Redirect } from "react-router";
import DashBoard from "./DashBoardComponent";
import UserList from "./UserListComponent";
import OwnerList from "./OwnerListComponent";
import ParkList from "./ParkListComponent";

function MainAdmin() {

    let { path, url } = useRouteMatch()
    return (
        <div>
            <Route exact path={`${url}/dashboard`}><DashBoard /></Route>
            <Route exact path={`${url}/users`}><UserList /> </Route>
            <Route exact path={`${url}/owners`}><OwnerList /> </Route>
            <Route exact path={`${url}/parks`}><ParkList /> </Route>
        </div>
    );

}

export default MainAdmin;