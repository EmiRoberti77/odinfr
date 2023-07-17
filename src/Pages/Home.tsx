import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Widget from '../components/widget';
import { DailyFlowChart } from '../components/charts/DailyFlowChart';
import './css/home.css'
import { WeeklyTrafficBarChart } from '../components/charts/WeeklyTrafficBarChart';
import { TotalPieChart } from '../components/charts/Total';
import { TopTabs } from '../components/Tabs';
import MaxOcMaxOcc from '../components/charts/MaxOcc';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  // Example data for chartData and chartOptions


  return (


    <div className='right-container'>
      <TopTabs />
      <div className='charts-Container'>
        <div className='DailyFlow'>
          <h5>Daily Flow</h5>
          <DailyFlowChart />
        </div>
        <div className='WeeklyFlow'>
          <h5>WeeklyFlow</h5>
          <WeeklyTrafficBarChart />
        </div>
        <div className='MaxOcc'>
          <h5>Maximum Occupancy</h5>
          <MaxOcMaxOcc />
        </div>
        <div className='TotalChart'>
          <h5>Total</h5>
          <TotalPieChart />
        </div>
      </div>

    </div>

  );
};

export default Home;
