import { List, ListItem, ListItemIcon, ListItemText, Box, Divider } from "@mui/material";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Logout } from "../../redux/AuthenActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    Logout: () => dispatch(Logout())
});

function SideBar(props) {
    let { path, url } = useRouteMatch()
    const history = useHistory();
    function handleOnClickLogout(e) {
        props.Logout();
        history.push("/");
    }
    return (
        <>
            <Box sx={{ width: 200 }} role="presentation">
                <List>
                    <ListItem button onClick={()=> history.push("/admin/dashboard")}>
                        <ListItemIcon>
                            <i class="fas fa-home"></i>
                        </ListItemIcon>
                        <ListItemText primary="DashBoard" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={()=> history.push("/admin/users")}>
                        <ListItemIcon>
                            <i class="fas fa-users"></i>
                        </ListItemIcon>
                        <ListItemText primary="Người dùng" />
                    </ListItem>
                    <ListItem button onClick={()=> history.push("/admin/owners")}>
                        <ListItemIcon>
                            <i class="fas fa-id-card"></i>
                        </ListItemIcon>
                        <ListItemText primary="Chủ bãi đỗ" />
                    </ListItem>
                    <ListItem button onClick={()=> history.push("/admin/parks")}>
                        <ListItemIcon>
                            <i class="fas fa-parking"></i>
                        </ListItemIcon>
                        <ListItemText primary="Bãi đỗ" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={handleOnClickLogout}>
                        <ListItemIcon>
                            <i class="fas fa-cogs"></i>
                        </ListItemIcon>
                        <ListItemText primary="Đăng xuất" />
                    </ListItem>
                </List>
            </Box>
        </>
    );
}

export default connect(null, mapDispatchToProps)(SideBar);