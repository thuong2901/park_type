import React, { useEffect } from "react"
import ListTable from "./ListTableComponent";
import { connect } from "react-redux";
import { deleteOwners, fetchOwnerList } from "../../redux/AdminActionCreators";
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
    }
];

const mapStateToProps = state => {
    return {
        owner_list: state.owner_list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOwnerList: () => dispatch(fetchOwnerList()),
    deleteOwners: (owners_delete) => dispatch(deleteOwners(owners_delete))
});

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function OwnerList(props) {

    const [isOwnersChange, setIsOwnersChange] = React.useState(false)
    const [searched, setSearched] = React.useState("");
    const owners_rows = props.owner_list.owner_list;
    const [rows, setRows] = React.useState(owners_rows);

    const requestSearch = (searchValue) => {
        setSearched(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = owners_rows.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field]);
            });
        });
        setRows(filteredRows);
    };

    React.useEffect(() => {
        setRows(owners_rows)
    }, [owners_rows])

    useEffect(
        () => {
            props.fetchOwnerList()
        }, []
    )

    useEffect(() => {
        if (isOwnersChange == true) {
            props.fetchOwnerList();
            setIsOwnersChange(false);
        }
    }, [isOwnersChange])

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
                    typeTable="Chủ bãi đỗ"
                    deleteSelected={props.deleteOwners}
                    setIsListChange={setIsOwnersChange} />
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerList);