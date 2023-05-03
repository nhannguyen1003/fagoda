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
    button: {
        position: "absolute",
        right: "200px",
        top: "70vh",
    }
}));

export const OfflinePayment = () => {
    const navigate = useNavigate();
    const styles = useStyles();
    const [date, setDate] = useState(null);
    return (
        <div className={styles.container}>
            <div className={styles.title}>Hình thức thanh toán bằng tiền mặt</div>
            <div className={styles.content}>
                <div style={{ marginTop: "20px" }}>Quý khách đã đăng ký giữ chỗ thành công.</div>
                <div style={{ marginTop: "20px" }}>Quý khách lưu ý thanh toán tại các địa điểm dưới đây trước 00h00 ngày 18/12/2022. Trong trường hợp không thanh toán đúng hạn, chúng tôi sẽ hủy chỗ mà quý khách đã đặt.</div>
                <div style={{ marginTop: "20px" }}>Danh sách các địa điểm thanh toán: Đồng Nai, Thành phố Hồ Chí Minh, Bình Dương, Bà Rịa - Vũng Tàu.</div>
                <div style={{ marginTop: "20px" }}>Chân thành cảm ơn quý khách.</div>
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
        </div>
    );
}