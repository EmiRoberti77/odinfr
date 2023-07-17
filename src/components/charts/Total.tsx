import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export const TotalPieChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const options = {
                series: [60, 25, 15],
                chart: {

                    type: 'pie',
                    sparkline: true,
                },
                labels: ['Team A', 'Team B', 'Team C'],
                colors: ['#3E1BF5', '#85D0FA', '#F0F4FA'],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: 'bottom',

                            },
                        },
                    },
                ],
                legend: {
                    position: 'bottom',
                },
            };

            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return <div id="chart" ref={chartRef}></div>;
};


