import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [notifications, setNotifications] = useState(mockTransactions1);

  // 알림 삭제 함수
  const handleDeleteNotification = (txId) => {
    setNotifications((prev) => prev.filter((notification) => notification.txId !== txId));
  };

  const [stats, setStats] = useState([]);

  // 백엔드 데이터 호출
  useEffect(() => {
    axios.get('/exDash')
        .then(response => {
          setStats(response.data); // 응답 데이터를 상태에 저장
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

          {stats[1] && stats[1].totalcount ? (
              <StatBox // 1
                  title={stats[1].totalcount}
                  subtitle="응급실 가용 병상"
                  progress={(stats[1].totalcount / stats[1].totalavunit).toFixed(2)}
                  increase={((stats[1].totalcount / stats[1].totalavunit)*100).toFixed(2) + '%'}
                  icon={
                    <EmergencyRecordingIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
              />
          ) : <StatBox
              title="정보 제공 X"
              subtitle="응급실 가용 병상"
              progress="0"
              increase="0%"
              icon={
                <EmergencyRecordingIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
          />}

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

          {stats[0] && stats[0].totalcount ? (
              <StatBox
                  title={stats[0].totalcount}
                  subtitle="수술시 가용"
                  progress={(stats[0].totalavunit / stats[0].totalcount).toFixed(2)}
                  increase={((stats[0].totalavunit / stats[0].totalcount)*100).toFixed(2) + '%'}
                  icon={
                    <VaccinesOutlinedIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
              />
          ) : <StatBox
              title="정보 제공 X"
              subtitle="수술시 가용"
              progress="0"
              increase="0%"
              icon={
                <EmergencyRecordingIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
          />}

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

          {stats[4] && stats[4].totalcount ? (
              <StatBox // 1
                  title="12,361"
                  subtitle="중환자 가용"
                  progress={(stats[4].totalavunit / stats[4].totalcount).toFixed(2)}
                  increase={((stats[4].totalavunit / stats[4].totalcount)*100).toFixed(2) + '%'}
                  icon={
                    <MasksOutlinedIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
              />
          ) : <StatBox
              title="정보 제공 X"
              subtitle="중환자 가용"
              progress="0"
              increase="0%"
              icon={
                <EmergencyRecordingIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
          />}
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {stats[2] && stats[2].totalcount ? (
              <StatBox
                  title="12,361"
                  subtitle="입원실 가용"
                  progress={(stats[2].totalavunit / stats[2].totalcount).toFixed(2)}
                  increase={((stats[2].totalavunit / stats[2].totalcount)*100).toFixed(2) + '%'}
                  icon={
                    <HealingOutlinedIcon
                        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
              />
          ) : <StatBox
              title="정보 제공 X"
              subtitle="입원실 가용"
              progress="0"
              increase="0%"
              icon={
                <EmergencyRecordingIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
          />}
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                병상 가동률 변화 / 중환자, 일반
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              의료장비 상태
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            예측 분석(앞으로의 입원률)
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            중환자 별(신생, 신경, 흉부, 일반)
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
        >
          <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              알림 (공지사항, 채팅, 알람 등)
            </Typography>
          </Box>

          {/* 알림 목록 렌더링 */}
          {notifications.map((transaction, i) => (
              <Box
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
              >
                <Box>
                  <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  {transaction.cost}
                </Box>

                {/* x 버튼 (알림 삭제 버튼) */}
                <IconButton
                    onClick={() => handleDeleteNotification(transaction.txId)}
                    color="inherit"
                >
                  <Close style={{ color: colors.grey[100] }} />
                </IconButton>
              </Box>
          ))}
        </Box>


      </Box>
    </Box>
  );
};

// mock 데이터 예시
const mockTransactions1 = [
  { txId: "TX001", user: "김철수", date: "2024-09-01", cost: "100,000" },
  { txId: "TX002", user: "박영희", date: "2024-09-02", cost: "200,000" },
  // 추가 데이터...
];

export default Dashboard;
