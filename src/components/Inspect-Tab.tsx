import ViewComfyRoundedIcon from '@mui/icons-material/ViewComfyRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const InspectTab = () => {

    return (
        <Box sx={{ display: "flex", padding: "10px", gap: "10px" }}>
            <Link to="/" style={{ textDecoration: 'none' }}></Link>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "white", padding: "10px", boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)", borderRadius: "10px", height: "40px", width: "8rem", color: "#7451f8", fontWeight: "900", cursor: 'pointer' }}>
                <ShowChartRoundedIcon sx={{}} />
                <Typography>Inspector</Typography>
            </Box>
        </Box>
    );
};

export default InspectTab;