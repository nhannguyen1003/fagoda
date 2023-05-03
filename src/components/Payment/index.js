import React from 'react';
import "./index.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export const Payment = () => {
    const navigate = useNavigate();
    return (
        <div className='payment-container'>
            <div className="payment-title">Chọn hình thức thanh toán</div>
            <div className='online-payment'>
                <Button style={{
                    backgroundColor: "#2984FF",
                    textAlign: "center",
                    color: "#FFFFFF",
                    width: "800px",
                    height: "90px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "25px",
                }} onClick={() => navigate("/online-payment")}>Thanh toán trực tuyến</Button>
            </div>
            <div className='offline-payment'>
                <Button style={{
                    backgroundColor: "#4EB44C",
                    textAlign: "center",
                    color: "#FFFFFF",
                    width: "800px",
                    height: "90px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "25px",
                }} onClick={() => navigate("/offline-payment")}>Thanh toán bằng tiền mặt</Button>
            </div>
        </div>
    );
}
