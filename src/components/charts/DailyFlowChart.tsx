

// import React, { Component } from "react";
// import ReactApexChart from "react-apexcharts";
// import './css/DailyFlowChart.css'


// export interface LineChartProps {
//     chartData: any[];
//     chartOptions: any;
// }

// export class DailyFlowChart extends Component<LineChartProps> {
//     componentDidMount() {
//         this.setState({
//             chartData: this.props.chartData,
//             chartOptions: this.props.chartOptions,
//         });
//     }

//     render() {
//         const { chartData, chartOptions } = this.props;

//         return (
//             <ReactApexChart
//                 options={chartOptions}
//                 series={chartData}
//                 type="line"
//                 width="100%"
//                 height="100%"
//             />
//         );
//     }
// }

// const chartOptions: any = {}; // Replace with your chart options
//   const chartData = [
//     { day: 'Monday', flow: 100 },
//     { day: 'Tuesday', flow: 200 },
//     { day: 'Wednesday', flow: 150 },
//     // Add more data as needed
//   ];

//chartData={chartData} chartOptions={chartOptions} add this to parent component



import React from "react";
import ReactApexChart from "react-apexcharts";
import './css/DailyFlowChart.css'

interface ApexChartProps { }

export const DailyFlowChart: React.FC<ApexChartProps> = () => {
    const series = [
        {
            name: 'Current Period',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'Previous Period',
            data: [11, 32, 45, 32, 34, 52, 41],

        },

    ];

    const options: ApexCharts.ApexOptions = { // Specify the type explicitly
        chart: {
            type: 'area',
            width: '100%',
            height: '100%',
        },
        dataLabels: {
            enabled: false

        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            labels: {
                style: {
                    colors: ['#ffffff'] // Set the text fill color of x-axis labels to white
                }
            },
            axisBorder: {
                color: '#ffffff' // Set the x-axis border color to white
            },
            axisTicks: {
                color: '#ffffff' // Set the x-axis tick color to white
            },

            type: 'datetime',
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z"
            ]

        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#ffffff'] // Set the text fill color of y-axis labels to white
                }
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },

        },
        legend: {
            show: false, // Set show to false to hide the legend
        },
        colors: ['#3E1BF5', '#85D0FA'],
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="area"



            />
        </div>
    );
};



