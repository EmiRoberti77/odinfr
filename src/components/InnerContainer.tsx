import React from 'react'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'

const InnerContainer = () => {
    return (
        <div className='Inner-container'>
            <Home />
            <Outlet />
        </div>
    )
}

export default InnerContainer