
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartProps { }

interface ApexChartState {
    series: { data: number[] }[];
    options: {
        chart: {
            type: 'bar'; // Set the type to 'bar'

        };
        plotOptions: {
            bar: {
                borderRadius: number;
                horizontal: boolean;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        xaxis: {
            categories: string[];
        };
        colors?: string[];
    };
}

class MaxOcMaxOcc extends React.Component<ApexChartProps, ApexChartState> {
    constructor(props: ApexChartProps) {
        super(props);

        this.state = {
            series: [
                {
                    data: [400, 430, 448, 470, 540, 580, 690],
                },
            ],

            options: {

                chart: {
                    type: 'bar',

                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false, // Set horizontal to false for vertical bars
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: [
                        '00',
                        '04',
                        '08',
                        '12',
                        '14',
                        '16',
                        '18',
                    ],

                },
                colors: ['#4624F5'],

            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"

                />
            </div>
        );
    }
}

export default MaxOcMaxOcc;


