import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, FormGroup, Input, Label, Form, Row, Col } from 'reactstrap';
import Layout from './LayOut';
import { Rating } from '@mui/material';
import { fetchOrderParks, postDeleteOrderpark } from "../../redux/AccountActionCreators";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';


const mapStateToProps = state => {
	return {
		order_parks: state.order_parks,
	}
}

const mapDispatchToProps = dispatch => ({
	fetchOrderParks: () => dispatch(fetchOrderParks()),
  postDeleteOrderpark: (parks) => dispatch(postDeleteOrderpark(parks))
}); 

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Bãi đỗ',
  },
  {
    id: 'time_start',
    numeric: false,
    disablePadding: false,
    label: 'Thời gian vào',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Giá',
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Liên hệ',
  },
  {
    id: 'rating',
    numeric: true,
    disablePadding: false,
    label: 'Đánh giá',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Trạng thái',
  },
];

function EnhancedTableHead(props) {
  const {order, orderBy,onRequestSort} =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow style={{backgroundColor:'#CEE5D0'}}>
        <TableCell >
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <p style={{fontWeight: 'bold'}}>{headCell.label}</p>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, selected, setSelected} = props;
  const handleDelete = async () => {
      var response = await props.postDeleteOrderpark(selected);
      if (response) {
        props.fetchOrderParks();
        setSelected([]);
      }
  }
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        > {numSelected} đã chọn
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Button style={{backgroundColor: '#F8F9FB', color: 'green',border: '1px solid green'}} type="submit" onClick={handleDelete}  >
              Hủy đặt trước
            </Button>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
};

function OrderPark(props) {
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('time_start');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const history = useHistory();

  React.useEffect(() => {
		props.fetchOrderParks();
	}, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, id, status) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1 ) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const handleRowClick = (event, id) => {
    if (event.target.tagName != "INPUT") history.push("/user/park?id=" + id + "&back=pending");
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.order_parks.parks.length) : 0;
  
  function convertTime(time) {
      var date = new Date(Date.parse(time));
      return(date.getHours() + ':' + date.getMinutes() + '  ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
  }
    
  return (
    <Row>
        <Col className="col-3">
            <Layout></Layout>
        </Col>
        <Col className="col-9">
            <div className="row row-content" style={{backgroundColor: '#F8F9FB', borderRadius: '20px', paddingLeft:"10px"}}>
            <div className="col-12 col-md-8 offset-2">
                <h3 style={{color:'green', fontWeight:'bold'}}>Danh sách đặt trước</h3>
            </div>
            <Box sx={{ width: '100%' }}>
              <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} postDeleteOrderpark={props.postDeleteOrderpark} selected={selected} setSelected={setSelected} fetchOrderParks={props.fetchOrderParks}/>
                <TableContainer>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onRequestSort={handleRequestSort}
                      rowCount={props.order_parks.parks.length}
                      parks={props.order_parks.parks}
                    />
                    <TableBody>
                      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                        rows.slice().sort(getComparator(order, orderBy)) */}
                      {stableSort(props.order_parks.parks, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.pending_id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleRowClick(event, row.park_id)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.pending_id}
                              selected={isItemSelected}
                            >
                              <TableCell >
                              {row.status === "Đang đặt trước" ?
                                (<Checkbox
                                  onClick={(event) => handleClick(event, row.pending_id)}
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    'aria-labelledby': labelId,
                                  }}
                                />) : (<div></div>)
                                }
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.name}
                                <br></br>
                                <p style={{color: 'grey',fontSize:'15px'}}>{row.location}</p>
                              </TableCell>
                              <TableCell align="left">{convertTime(row.time_start)}</TableCell>
                              <TableCell align="left">
                                {row.price}
                                <br></br>
                                <p style={{color: 'grey',fontSize:'15px'}}>/1h</p>
                              </TableCell>
                              <TableCell align="left">{row.phone}
                                <br></br>
                                <p style={{color: 'grey',fontSize:'15px'}}>{row.email}</p>
                              </TableCell>
                              <TableCell align="left"> <Rating name="read-only" value={row.rating} readOnly precision={0.1}/> </TableCell>
                              <TableCell align="left">
                                {row.status}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows,
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={props.order_parks.parks.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
              <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
              />
            </Box>
            </div>
          </Col>
        </Row>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderPark);