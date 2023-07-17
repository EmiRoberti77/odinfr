import ViewComfyRoundedIcon from '@mui/icons-material/ViewComfyRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const InsightTab = () => {



    return (
        <Box sx={{ display: "flex", padding: "10px", gap: "10px" }}>
            <Link to="/" style={{ textDecoration: 'none' }}></Link>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#7451f8", padding: "10px", boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)", borderRadius: "10px", height: "40px", width: "8rem", color: "white", fontWeight: "900", cursor: 'pointer' }}
            >
                <ViewComfyRoundedIcon sx={{}} />
                <Typography>Insights</Typography>
            </Box>
        </Box>
    );
};

export default InsightTab;