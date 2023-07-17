import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import InnerContainer from './components/InnerContainer';
import Profile from './Pages/profile';
import Settings from './Pages/settings';
import { TopTabs } from './components/Tabs';
import InspectTab from './components/Inspect-Tab';
import InsightTab from './components/Insight-Tab';

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<InnerContainer />} />
                <Route path="/" element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path='/tabs' element={<Navigate replace to="Inspect" />}>
                    <Route path='Inspect' element={<InsightTab />} />
                    <Route path='Insight' element={<InspectTab />} />
                </Route>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default MainRoutes