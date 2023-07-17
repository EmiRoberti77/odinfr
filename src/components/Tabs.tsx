import React from 'react'
import InsightTab from './Insight-Tab'
import InspectTab from './Inspect-Tab'
import { Box, Typography } from "@mui/material";

export const TopTabs = () => {
    return (


        <Box sx={{ display: "flex", padding: "10px", gap: "10px" }}>
            <InsightTab />
            <InspectTab />
        </Box>



    )
}

