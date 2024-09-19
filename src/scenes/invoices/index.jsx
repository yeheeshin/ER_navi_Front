import {Box, IconButton, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import {Close} from "@mui/icons-material";
import {useState} from "react";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [notifications, setNotifications] = useState(mockTransactions1);
    // 알림 삭제 함수
    const handleDeleteNotification = (txId) => {
        setNotifications((prev) => prev.filter((notification) => notification.txId !== txId));
    };

    const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
      <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          margin="10px"
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
                  position="relative"
              >
                  {/* 빨간 점 영역 */}
                  <Box
                      width="8px"
                      height="8px"
                      borderRadius="50%"
                      backgroundColor={transaction.isRead ? "transparent" : "red"}
                      marginRight="10px"  // 이름과 간격 확보
                  />

                  {/* 사용자 이름 영역 */}
                  <Box
                      flex="4"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                      style={{ display: "flex", alignItems: "center" }}
                  >
                      <Typography
                          color={colors.greenAccent[500]}
                          variant="h5"
                          fontWeight="600"
                          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      >
                          {transaction.user}
                      </Typography>
                  </Box>

                  {/* 날짜 영역 */}
                  <Box
                      flex="2"
                      color={colors.grey[100]}
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                      textAlign="center"
                      fontSize="18px"
                  >
                      {transaction.date}
                  </Box>

                  {/* username 영역 */}
                  <Box
                      flex="0.5"
                      backgroundColor={colors.greenAccent[500]}
                      p="5px 10px"
                      borderRadius="4px"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                  >
                      username
                  </Box>

                  {/* 중간 비워두는 영역 */}
                  <Box flex="0.5"></Box>

                  {/* 중요도 영역 */}
                  <Box
                      flex="0.5"
                      backgroundColor={colors.redAccent[400]}
                      p="5px 10px"
                      borderRadius="4px"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                  >
                      긴급일 때만 보임
                  </Box>

                  {/* 삭제 버튼 영역 */}
                  <Box flex="0.5" display="flex" justifyContent="flex-end">
                      <IconButton
                          onClick={() => handleDeleteNotification(transaction.txId)}
                          color="inherit"
                      >
                          <Close style={{ color: colors.grey[100] }} />
                      </IconButton>
                  </Box>
              </Box>
          ))}

      </Box>
  );
};

// mock 데이터 예시
const mockTransactions1 = [
    { txId: "TX001", user: "김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수김철수", date: "2024-09-01", cost: "100,000" },
    { txId: "TX002", user: "박영희", date: "2024-09-02", cost: "200,000" },
    { txId: "TX003", user: "박영희", date: "2024-09-02", cost: "200,000" },
    { txId: "TX004", user: "박영희", date: "2024-09-02", cost: "200,000" },
    { txId: "TX005", user: "박영희", date: "2024-09-02", cost: "200,000" },
    { txId: "TX006", user: "박영희", date: "2024-09-02", cost: "200,000" },
    { txId: "TX007", user: "박영희", date: "2024-09-02", cost: "200,000" },
    { txId: "TX008", user: "박영희", date: "2024-09-02", cost: "200,000" },
    // 추가 데이터...
];

export default Invoices;
