import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, TextField, Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Card from "assets/Payment/Card.png";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    container: {
        height: 'calc(100vh-50px)',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        display: 'flex',
        textAlign: 'center',
        fontSize: '42px',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        height: "20vh",
    },
    content: {
        marginLeft: "200px",
        marginRight: "200px",
        fontSize: "18px",
        fontWeight: "normal",
        display: "flex",
        flexDirection: "column",
    },
    typeOfCard: {
        fontSize: "15px",
        fontWeight: "bold",
        marginTop: "10px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "50% 30% 20%",
        marginTop: "10px",
    },
    numOfCard: {
        fontSize: "15px",
        fontWeight: "bold",
    },
    date: {
        fontSize: "15px",
        fontWeight: "bold",
    },
    name: {
        fontSize: "15px",
        fontWeight: "bold",
        marginTop: "10px",
    },
    button: {
        position: "absolute",
        right: "200px",
        top: "70vh"
    }
}));

export const OnlinePayment = () => {
    const styles = useStyles();
    const [date, setDate] = useState(null);
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.title}>Hình thức thanh toán trực tuyến</div>
            <div className={styles.content}>
                <div>Quý khách vui lòng chọn phương thức thanh toán:</div>
                <div style={{ marginTop: "10px" }}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="Thẻ ngân hàng"
                        >
                            <FormControlLabel
                                value="Thẻ ngân hàng"
                                control={<Radio />}
                                label="Thẻ ngân hàng"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Ví điện tử"
                                control={<Radio />}
                                label="Ví điện tử"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Internet Banking"
                                control={<Radio />}
                                label="Internet Banking"
                                labelPlacement="end"
                            />
                            <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={styles.typeOfCard}>
                    <div>Loại thẻ:</div>
                    <img src={Card} alt="card" style={{ marginTop: "10px" }}></img>
                </div>
                <div className={styles.grid}>
                    <div className={styles.numOfCard}>
                        <div>Số thẻ</div>
                        <TextField
                            fullWidth
                            size='small'
                            style={{ marginTop: "10px" }}
                        />
                    </div>
                    <div></div>
                    <div className={styles.date}>
                        <div style={{ marginBottom: "10px" }}>Có hiệu lực từ</div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField size="small" {...params} />}
                                    inputFormat="DD/MM/YYYY"
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div style={{ marginTop: "10px" }}>Tên chủ thẻ</div>
                    <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        size='small'
                    />
                </div>

            </div>
            <div className={styles.button}>
                <Button style={{
                    backgroundColor: "#2984FF",
                    textAlign: "center",
                    color: "#FFFFFF",
                    width: "250px",
                    height: "60px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "18px",
                }} onClick={() => navigate("/home")}>Xác nhận thanh toán</Button>
            </div>
        </div>
    );
}