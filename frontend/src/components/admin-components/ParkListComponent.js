import React, { useEffect } from "react"
import ListTable from "./ListTableComponent";
import { connect } from "react-redux";
import { deleteParks, fetchParkList, postVerify } from "../../redux/AdminActionCreators";
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
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Tên',
    },
    {
        id: 'isActived',
        numeric: false,
        disablePadding: false,
        label: 'Trạng thái',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Giá',
    },
    {
        id: 'location',
        numeric: false,
        disablePadding: false,
        label: 'Vị trí',
    },
    {
        id: 'owner',
        numeric: false,
        disablePadding: false,
        label: 'Chủ sở hữu',
    },
];

const mapStateToProps = state => {
    return {
        park_list: state.park_list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchParkList: () => dispatch(fetchParkList()),
    deleteParks: (parks_delete) => dispatch(deleteParks(parks_delete)),
    postVerify: (park_id) => dispatch(postVerify(park_id))
});

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function ParkList(props) {

    const [isParksChange, setIsParksChange] = React.useState(false);
    const [searched, setSearched] = React.useState("");
    const parks_rows = props.park_list.park_list;
    const [rows, setRows] = React.useState(parks_rows);

    const requestSearch = (searchValue) => {
        setSearched(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = parks_rows.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field]);
            });
        });
        setRows(filteredRows);
    };

    React.useEffect(() => {
        setRows(parks_rows)
    }, [parks_rows])

    useEffect(
        () => {
            props.fetchParkList()
        }, []
    )

    useEffect(() => {
        if (isParksChange == true) {
            props.fetchParkList();
            setIsParksChange(false);
        }
    }, [isParksChange])

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
                    typeTable="Bãi đỗ"
                    deleteSelected={props.deleteParks}
                    postVerify={props.postVerify}
                    setIsListChange={setIsParksChange} />
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkList);