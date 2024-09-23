import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
const Transfer = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/transferDe'); // 이동하고 싶은 경로
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "No." },
        {
            field: "name",
            headerName: "필요 자원",
            flex: 2,
            cellClassName: "name-column--cell",
            renderCell: (params) => (
                <Typography
                    variant="body2"
                    noWrap
                    style={{ overflow: "hidden", textOverflow: "ellipsis", fontSize: "16px" }}
                >
                    {params.value}
                </Typography>
            ),
        },
        {
            field: "email",
            headerName: "이유",
            flex: 2,
            renderCell: (params) => (
                <Typography
                    variant="body2"
                    noWrap
                    style={{ overflow: "hidden", textOverflow: "ellipsis" , fontSize: "16px"}}
                >
                    {params.value}
                </Typography>
            ),
        },
        {
            field: "accessLevel",
            headerName: "요청 병원",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" , fontSize: "16px"}}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="전원 요청 목록"
                subtitle="전원 요청"
            />
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                <p>Click me to go to the target page!</p>
            </div>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        fontSize: "16px",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                        fontSize: "18px",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};

export default Transfer;
