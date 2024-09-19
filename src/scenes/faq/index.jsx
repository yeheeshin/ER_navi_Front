import {Box, Button, FormHelperText, MenuItem, Select, TextField, useTheme, FormControl, InputLabel, Chip, OutlinedInput} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Formik} from "formik";
import * as yup from "yup";
import {useState} from "react";

const FAQ = () => {
    // 선택한 값들을 관리할 상태
    const [selectedContacts, setSelectedContacts] = useState([]);
    const handleSelectChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedContacts(typeof value === 'string' ? value.split(',') : value); // 배열로 상태 업데이트
    };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
      <Box m="20px">
        <Header title="환자 전원" subtitle="환자 전원 신청" />

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
          {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="필요한 자원"
                        value={selectedContacts.join(", ")}  // 선택한 값을 콤마로 구분하여 표시
                        sx={{ gridColumn: "span 3" }}
                        InputProps={{
                            readOnly: true, // 읽기 전용으로 설정 (사용자가 직접 수정하지 못하게)
                        }}
                    />

                    <FormControl
                        fullWidth
                    >
                        <InputLabel>Contact</InputLabel>
                        <Select
                            fullWidth
                            multiple
                            value={selectedContacts}
                            onChange={handleSelectChange}
                            input={<OutlinedInput label="Contact" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            <MenuItem value="인공호흡기">인공호흡기</MenuItem>
                            <MenuItem value="CT">CT</MenuItem>
                            <MenuItem value="중환자실">중환자실</MenuItem>
                            <MenuItem value="신경중환자">신경중환자</MenuItem>
                            <MenuItem value="입원실">입원실</MenuItem>
                        </Select>
                    </FormControl>

                  <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="reason"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.reason}
                      name="reason"
                      error={!!touched.reason && !!errors.reason}
                      helperText={touched.reason && errors.reason}
                      sx={{ gridColumn: "span 4" }}
                      multiline
                      rows={4}  // 기본적으로 4줄의 높이로 설정
                  />


                  <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="memo"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.memo}
                      name="memo"
                      error={!!touched.memo && !!errors.memo}
                      helperText={touched.memo && errors.memo}
                      sx={{ gridColumn: "span 4" }}
                      multiline
                      rows={4}  // 기본적으로 4줄의 높이로 설정
                  />


                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                      환자 전원 신청
                  </Button>
                </Box>
              </form>
          )}
        </Formik>
      </Box>
  );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default FAQ;
