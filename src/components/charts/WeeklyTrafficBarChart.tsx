import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface WeeklyTrafficBarChartProps { }

interface WeeklyTrafficBarChartState {
    series: {
        name: string;
        data: number[];
        color: string;
    }[];
}

export class WeeklyTrafficBarChart extends React.Component<WeeklyTrafficBarChartProps, WeeklyTrafficBarChartState> {
    constructor(props: WeeklyTrafficBarChartProps) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'A',
                    data: [44, 55, 41, 67, 22, 43, 67, 22, 67, 22],
                    color: '#775FFC',
                },
                {
                    name: 'B',
                    data: [13, 23, 20, 8, 13, 27, 8, 13, 8, 13],
                    color: '#84D9FD',
                },
                {
                    name: 'C',
                    data: [11, 17, 15, 15, 21, 14, 11, 17, 21, 14],
                    color: '#E0E0E0',
                },

            ],
        };
    }

    render() {
        const options: ApexCharts.ApexOptions = {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900,
                            },
                        },
                    },
                },
            },
            xaxis: {
                type: 'numeric', // Change the type to 'numeric'
                categories: [17, 18, 19, 20, 21, 22, 23, 24, 25], // Set numeric categories
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
        };

        return (
            <div id="chart">
                <ReactApexChart options={options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}


