import ViewComfyRoundedIcon from '@mui/icons-material/ViewComfyRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import { Box, Typography } from "@mui/material";

const Widget = () => {

    return (
        <Box sx={{ display: "flex", padding: "10px", gap: "10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#7451f8", padding: "10px", boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)", borderRadius: "10px", height: "100px", width: "12rem", color: "white", fontWeight: "900" }}>
                <ViewComfyRoundedIcon sx={{}} />
                <Typography>Insights</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "white", padding: "10px", boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)", borderRadius: "10px", height: "100px", width: "12rem", color: "#7451f8", fontWeight: "900" }}>
                <ShowChartRoundedIcon sx={{}} />
                <Typography>Inspector</Typography>
            </Box>
        </Box>
    );
};

export default Widget;