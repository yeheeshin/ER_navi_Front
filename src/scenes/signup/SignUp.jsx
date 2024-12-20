import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import getSignUpTheme from './getSignUpTheme';
import { SitemarkIcon } from './CustomIcons';
import {MenuItem, Modal, Select} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";


const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
        backgroundImage:
            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
}));

export default function SignUp() {
    const [mode, setMode] = React.useState('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const defaultTheme = createTheme({ palette: { mode } });
    const SignUpTheme = createTheme(getSignUpTheme(mode));
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

    // useNavigate는 함수 컴포넌트 내에서 사용해야 합니다.
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signIn');
    };

/*    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');

        let isValid = true;

/!*        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }*!/

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Name is required.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        return isValid;
    };*/

/*    const handleSubmit = (event) => {
        if (nameError || emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };*/

    // 병원 , 포지션 선택 확인
    const [positionError, setPositionError] = useState(false);
    const [hospitalError, setHospitalError] = useState(false);
    const [positionErrorMessage, setPositionErrorMessage] = useState('');
    const [hospitalErrorMessage, setHospitalErrorMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries()); // 폼 데이터를 json 형식으로 변환

        // 초기화
        setPositionError(false);
        setHospitalError(false);

        let isValid = true;

        // Position 값 검증
        if (!data.position || data.position.trim() === '') {
            setPositionError(true);
            setPositionErrorMessage('Please select a position.');
            isValid = false;
        }

        // Hospital 값 검증
        if (!data.hospital_name || data.hospital_name.trim() === '선택한_병원') {
            setHospitalError(true);
            setHospitalErrorMessage('Please select a hospital.');
            isValid = false;
        }

        if (!isValid) {
            return; // 유효성 검사 실패 시 종료
        }

        try {
            const response = await axios.post('/signUp', data);

            if (response.status === 200) {
                alert('회원가입 성공');
                navigate('/signIn');
            } else {
                alert('회원가입 실패: 이메일이 이미 존재합니다.');
            }
        } catch (error) {
            console.log("회원가입 중 오류 발생: " + error);
            alert('회원가입 중 오류 발생!');
            navigate('/signUp');
        }
    }

    // modal 함수, 변수 등
    const [hosOpen, setHosOpen] = useState(false);
    const handleOpen = () => setHosOpen(true);
    const handleClose = () => setHosOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [hospitalList, setHospitalList] = useState([]);

    useEffect(() => {
        // 병원 이름 리스트를 가져오는 API 호출
        axios.get('/all_hosName') // 병원 이름만 포함된 리스트 예: ["병원1", "병원2", ...]
            .then((response) => {
                setHospitalList(response.data); // 병원 이름 배열을 그대로 설정
            })
            .catch((error) => {
                console.error('Error fetching hospital list:', error);
            });
    }, []);

    const [selectedHospital, setSelectedHospital] = useState('선택한_병원'); // 선택된 병원 이름 상태


    return (
        <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
            <CssBaseline />
            <SignUpContainer>
                <Card variant="outlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="name">Full name</FormLabel>
                            <TextField
                                autoComplete="name"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                placeholder="Jon Snow"
                                error={nameError}
                                helperText={nameErrorMessage}
                                color={nameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="your@email.com"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                error={emailError}
                                helperText={emailErrorMessage}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                variant="outlined"
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="phone">Phone Number</FormLabel>
                            <TextField
                                autoComplete="phone"
                                name="phone"
                                required
                                fullWidth
                                id="phone"
                                placeholder="010-1234-5678"
                                error={nameError}
                                helperText={nameErrorMessage}
                                color={nameError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="position">Position</FormLabel>
                            <Select
                                fullWidth
                                id="position"
                                name="position"
                            >
                                <MenuItem value="인턴">인턴</MenuItem>
                                <MenuItem value="레지던트">레지던트</MenuItem>
                                <MenuItem value="전문의">전문의</MenuItem>
                                <MenuItem value="펠로우">펠로우</MenuItem>
                                <MenuItem value="교수">교수</MenuItem>
                                <MenuItem value="과장">과장</MenuItem>
                                <MenuItem value="병원장">병원장</MenuItem>
                            </Select>
                            {positionError && (
                                <Typography color="error" variant="body2">
                                    {positionErrorMessage}
                                </Typography>
                            )}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="hospital">Hospital</FormLabel>
                            <Box display="flex" alignItems="center">
                                <FormLabel htmlFor="hospital" id="hospital" sx={{ width: '50%' }}>
                                    {selectedHospital || '병원을 선택해주세요.'}
                                </FormLabel>
                                <Button
                                    variant="outlined"
                                    onClick={handleOpen}
                                    sx={{
                                        width: '50%'
                                    }}
                                >
                                    병원 검색
                                </Button>
                                <Modal
                                    open={hosOpen}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    >
                                    <Box sx={style}>
                                        <FormLabel>병원 검색</FormLabel>
                                        <Autocomplete
                                            disablePortal
                                            options={hospitalList}
                                            sx={{ width: 300 }}
                                            onChange={(event, newValue) => {
                                                setSelectedHospital(newValue); // 선택된 병원 이름 설정
                                                handleClose(); // 선택 후 모달 닫기
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Hospital" />}
                                        />

                                    </Box>
                                </Modal>
                            </Box>
                            <input type="hidden" id="hospital_name" name="hospital_name" value={selectedHospital} />
                            {hospitalError && (
                                <Typography color="error" variant="body2">
                                    {hospitalErrorMessage}
                                </Typography>
                            )}
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive updates via email."
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // onClick={validateInputs}
                        >
                            Sign up
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Already have an account?{' '}
                            <span>
                                <Link
                                    href="/material-ui/getting-started/templates/sign-in/"
                                    variant="body2"
                                    sx={{ alignSelf: 'center' }}
                                >
                                    Sign in
                                </Link>
                            </span>
                        </Typography>
                    </Box>
                </Card>
            </SignUpContainer>
        </ThemeProvider>
    );
}
