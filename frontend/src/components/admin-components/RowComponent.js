import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Button } from '@mui/material';

function convertTime(time) {
    var date = new Date(Date.parse(time));
    return(date.getHours() + ':' + date.getMinutes() + '  ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
}

function Row(props) {
    const { row, isItemSelected, handleClick, labelId, typeTable, postVerify, setIsListChange } = props;
    const [open, setOpen] = React.useState(false);

    const handleVerify = async (event) => {
        await postVerify(row.id);
        setIsListChange(true)
    }

    return (
        <React.Fragment>
            <TableRow
                hover
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        onClick={(event) => handleClick(event, row.id)}
                        checked={isItemSelected}
                        inputProps={{
                            'aria-labelledby': labelId,
                        }}
                    />
                </TableCell>
                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                >
                    {row.id}
                </TableCell>
                {typeTable != "Bãi đỗ" && <TableCell align="left">{row.username}</TableCell>}
                {typeTable != "Bãi đỗ" && <TableCell align="center">{row.isActivated}</TableCell>}
                {typeTable != "Bãi đỗ" && <TableCell align="left">{row.name}</TableCell>}
                {typeTable != "Bãi đỗ" && <TableCell align="right">{row.phone}</TableCell>}
                {typeTable != "Bãi đỗ" && <TableCell align="left">{row.email}</TableCell>}
                {typeTable != "Bãi đỗ" && <TableCell align="left">{row.address}</TableCell>}
                {typeTable == "Người dùng" && <TableCell align="center">{row.penalty}</TableCell>}
                {typeTable == "Bãi đỗ" && <TableCell align="left">{row.name}</TableCell>}
                {typeTable == "Bãi đỗ" && <TableCell align="center">{row.isActivated}</TableCell>}
                {typeTable == "Bãi đỗ" && <TableCell align="right">{row.price}</TableCell>}
                {typeTable == "Bãi đỗ" && <TableCell align="left">{row.location}</TableCell>}
                {typeTable == "Bãi đỗ" && <TableCell align="left">ID: {row.owner_id}<br></br>Tên: {row.owner}</TableCell>}
                {typeTable == "Bãi đỗ" &&
                    <TableCell align="center">
                        {row.isActivated == false &&
                            <Button variant="contained" color="success" size="small" onClick={handleVerify}>Xác minh</Button>}
                        {row.isActivated == true &&
                            <Button variant="contained" size="small" disableElevation>Đã xác minh</Button>}
                    </TableCell>}
                {typeTable != "Người dùng" &&
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            {open ? <i class="fas fa-angle-double-up"></i> : <i class="fas fa-angle-double-down"></i>}
                        </IconButton>
                    </TableCell>}
            </TableRow>
            {typeTable == "Bãi đỗ" &&
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Chi tiết
                                </Typography>
                                <div>
                                    <div style={{ paddingTop: "15px", display: "inline-flex" }}>
                                        {row.hasCamera == 1 && <div style={{ marginRight: "10px" }}><i class="fas fa-video"></i> CCTV</div>}
                                        {row.hasRoof == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="bx:bxs-car-garage"></span> Mái che</div>}
                                        {row.allowBooking == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="cib:hatena-bookmark"></span> Đặt trước</div>}
                                        {row.allowOvernight == 1 && <div><i class="fas fa-moon"></i> Gửi qua đêm</div>}
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <p>Mô tả: {row.description}</p>
                                    </div>
                                </div>
                                <Typography variant="h6" gutterBottome component="div">
                                    Report
                                </Typography>
                                {row.reportNum > 0 ? (<Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">ID</TableCell>
                                            <TableCell align="left">Thời gian</TableCell>
                                            <TableCell align="left">Nội dung báo cáo</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.reports.map((report) => (
                                            <TableRow key={report.id}>
                                                <TableCell component="th" scope='row' align='center'>
                                                    {report.id}
                                                </TableCell>
                                                <TableCell align='left'>
                                                    {convertTime(report.time)}
                                                </TableCell>
                                                <TableCell align='left'>
                                                    {report.content}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>) : (<p>Bãi đỗ không có reports nào</p>)}
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            }
            {typeTable == "Chủ bãi đỗ" &&
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Bãi đỗ
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Tên bãi đỗ</TableCell>
                                            <TableCell align="right">Vị trí</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.parks.map((park) => (
                                            <TableRow key={park.id}>
                                                <TableCell component="th" scope="row">
                                                    {park.id}
                                                </TableCell>
                                                <TableCell>{park.name}</TableCell>
                                                <TableCell align="right">{park.location}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            }
        </React.Fragment>
    );
}

export default Row;