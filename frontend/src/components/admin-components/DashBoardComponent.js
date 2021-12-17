import { useEffect } from "react"
import SideBar from "./SideBarComponent";
import { Paper } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { fetchTransChart, fetchUserChart, fetchRatingChart } from '../../redux/AdminActionCreators';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const mapStateToProps = state => {
    return {
        user_chart: state.user_chart,
        rating_chart: state.rating_chart,
        trans_chart: state.trans_chart,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUserChart: () => dispatch(fetchUserChart()),
    fetchRatingChart: () => dispatch(fetchRatingChart()),
    fetchTransChart: () => dispatch(fetchTransChart()),
});

function DashBoard(props) {

    useEffect(
        () => {
            props.fetchUserChart();
            props.fetchRatingChart();
            props.fetchTransChart();
        }, []
    )

    return (
        <div className="row">
            <div className="col-2"><SideBar /></div>
            <div className="col-10" style={{marginTop: "50px"}}>
                <h3>Về phần mềm</h3>
                <div className="row" style={{marginTop: "30px"}}>
                    <div className="col-8">
                        <Bar
                            data={{
                                labels: props.user_chart.user_chart.map(obj => "Tháng " + obj.month),
                                datasets: [
                                    {
                                        label: "Số lượng người dùng",
                                        backgroundColor: [
                                            "#3e95cd"
                                        ],
                                        data: props.user_chart.user_chart.map(obj => obj.userNumber)
                                    }
                                ]
                            }}
                            options = {{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Lượng người dùng 6 tháng gần đây'
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <Doughnut
                            data={{
                                labels: props.rating_chart.rating_chart.map(obj => obj.rating + " sao"),
                                datasets: [
                                    {
                                        label: "Lượng đánh giá",
                                        backgroundColor: [
                                            "#3e95cd",
                                            "#8e5ea2",
                                            "#3cba9f",
                                            "#e8c3b9",
                                            "#c45850"
                                        ],
                                        data: props.rating_chart.rating_chart.map(obj => obj.num),
                                    }
                                ]
                            }}
                            options = {{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Đánh giá các bãi đỗ'
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="row" style={{marginTop: "50px"}}>
                    <Bar
                        data={{
                            labels: props.trans_chart.trans_chart.map(obj => "Tháng " + obj.month),
                            datasets: [
                                {
                                    label: 'Số lượng đặt trước',
                                    data: props.trans_chart.trans_chart.map(obj => obj.numOfBook),
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                },
                                {
                                    label: 'Số lượng tìm kiếm',
                                    data: props.trans_chart.trans_chart.map(obj => obj.numOfSearch),
                                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                },
                            ],
                        }}
                        options = {{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Số lượng tìm kiếm và đặt trước 6 tháng gần đây'
                                }
                            }
                        }}  />
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);