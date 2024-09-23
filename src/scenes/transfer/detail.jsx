import {Box, Button, Container, TextField, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'

const TransferDe = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header
                title="** 병원"
                subtitle="전원 요청 상세페이지"
            />

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // 세로 방향으로 변경
                    gap: '10px',
                }}
            >
                <Box display="flex" alignItems="center" gap="10px">
                    <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{
                            minWidth: '100px',
                            textAlign: 'center',
                        }}
                    >
                        필요 자원
                    </Typography>

                    <Box
                        fullWidth
                        sx={{ flexGrow: 1 }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Chip label="Chip Filled" sx={{ fontSize: '1.3rem' }} />
                            <Chip label="Chip Filled" sx={{ fontSize: '1.3rem' }} />
                            <Chip label="Chip Filled" sx={{ fontSize: '1.3rem' }} />
                            <Chip label="Chip Filled" sx={{ fontSize: '1.3rem' }} />
                            <Chip label="Chip Filled" sx={{ fontSize: '1.3rem' }} />
                        </Stack>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    marginTop="20px"
                >
                    <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{
                            minWidth: '100px',
                            textAlign: 'center',
                        }}
                    >
                        전원 이유
                    </Typography>

                    <Box
                        fullWidth
                        sx={{ flexGrow: 1 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.09)', padding: '20px' }}
                        >
                            <Box
                                sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }} // flexDirection을 column으로 설정
                            >
                                <Typography
                                    variant="h5" // 텍스트 크기 조정
                                    sx={{ fontSize: '1.15rem', whiteSpace: 'normal' }} // 줄바꿈을 위해 whiteSpace 설정
                                >
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    marginTop="20px"
                >
                    <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{
                            minWidth: '100px',
                            textAlign: 'center',
                        }}
                    >
                        추가 메모
                    </Typography>

                    <Box
                        fullWidth
                        sx={{ flexGrow: 1 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.09)', padding: '20px' }}
                        >
                            <Box
                                sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }} // flexDirection을 column으로 설정
                            >
                                <Typography
                                    variant="h5" // 텍스트 크기 조정
                                    sx={{ fontSize: '1.15rem', whiteSpace: 'normal' }} // 줄바꿈을 위해 whiteSpace 설정
                                >
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                    여기 내용 추가. 너무 긴 내용일 경우 다음 줄로 넘어가게 설정하였습니다. 계속해서 작성해 보세요.
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    marginTop="20px"
                    justifyContent="center"
                >
                    <Box
                        fullWidth
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            sx={{ fontSize: '1.2rem', padding: '5px 30px 5px 30px'
                            }} // 글씨 크기 조정
                        >
                            수락
                        </Button>
                    </Box>

                    <Box
                        fullWidth
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                fontSize: '1.2rem',
                                backgroundColor: '#FF6B6B',
                                color: 'black',
                                padding: '5px 30px 5px 30px'
                        }} // 글씨 크기 조정
                        >
                            거절
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TransferDe;
