import React, { useEffect } from "react"
import ListTable from "./ListTableComponent";
import { connect } from "react-redux";
import { fetchUserList, deleteUsers } from "../../redux/AdminActionCreators";
import SideBar from "./SideBarComponent";
import SearchToolbar from "./SearchToolBar";


const headCells = [
    {
        id: 'ID',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'username',
        numeric: false,
        disablePadding: false,
        label: 'Tài Khoản',
    },
    {
        id: 'isActived',
        numeric: false,
        disablePadding: false,
        label: 'Trạng thái',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Tên',
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: false,
        label: 'Điện thoại',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Địa chỉ',
    },
    {
        id: 'Penalty',
        numeric: false,
        disablePadding: false,
        label: 'Cảnh cáo',
    },
];

const mapStateToProps = state => {
    return {
        user_list: state.user_list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUserList: () => dispatch(fetchUserList()),
    deleteUsers: (users_delete) => dispatch(deleteUsers(users_delete)),
});

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function UserList(props) {

    const [isUsersChange, setIsUsersChange] = React.useState(false)
    const [searched, setSearched] = React.useState("");
    const users_rows = props.user_list.user_list;
    const [rows, setRows] = React.useState(users_rows);

    const requestSearch = (searchValue) => {
        setSearched(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = users_rows.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field]);
            });
        });
        setRows(filteredRows);
    };

    React.useEffect(() => {
        setRows(users_rows)
    }, [users_rows])

    useEffect(
        () => {
            props.fetchUserList()
        }, []
    )

    useEffect(() => {
        if (isUsersChange == true) {
            props.fetchUserList();
            setIsUsersChange(false);
        }
    }, [isUsersChange])

    return (
        <div className="row">
            <div className="col-2"><SideBar /></div>
            <div className="col-10">
                <div align="right">
                    <SearchToolbar
                        value={searched}
                        onChange={(event) => requestSearch(event.target.value)}
                        clearSearch={() => requestSearch('')} />
                </div>
                <ListTable
                    rows={rows}
                    headCells={headCells}
                    typeTable="Người dùng"
                    deleteSelected={props.deleteUsers}
                    setIsListChange={setIsUsersChange} />
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);