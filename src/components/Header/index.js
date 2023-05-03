import React, { useEffect, useState } from "react";
import "./index.css";
import Logo from "assets/Header/logo.png";
import AVT from "assets/Header/user.png";
import Search from "assets/Header/search.png";
import Notification from "assets/Header/notification.png";
import Message from "assets/Header/messages.png";
import Cart from "assets/Header/cart.png";
import Setting from "assets/Header/setting.png";
import Logout from "assets/Header/logout.png";
import Login from "assets/Header/login.png";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut } from "helpers/firebase/auth";
import Popup from 'reactjs-popup';
import { Notifications } from "./Notifications";
import { Messages } from "./Messages";
import BaNaHill from "assets/Home/RightTab/BaNaHill.jpg";

export const Header = ({ userData }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [enable, setEnable] = useState([true, true, true, true, true, true, true]);
  const [searchResult, setSearchResult] = useState(false);

  useEffect(() => {
    if (pathname === "/home" || pathname === "/profile" || pathname === "/cancelled-order")
      setEnable([true, true, true, true, true, true, true]);
    else if (pathname === "/signin" || pathname === "/signup")
      setEnable([false, false, false, false, false, false, false]);
    else if (pathname === "/admin")
      setEnable([false, false, false, false, false, true, true]);
  }, [pathname])

  return (
    <div className="header">
      <IconButton
        style={{
          position: "fixed",
          left: "0",
          backgroundColor: "transparent",
        }}
      >
        <img
          alt="logo"
          src={Logo}
          className="logoHeader"
          onClick={() => navigate("/home")}
        />
      </IconButton>

      {enable[0] && userData && <Button
        startIcon={
          <Avatar alt="avatar" src={userData.photoUrl || AVT} sx={{ width: 30, height: 30 }} />
        }
        style={{
          fontSize: "13px",
          textTransform: "none",
          color: "black",
          position: "fixed",
          left: "150px",
        }}
        onClick={() => navigate(userData && userData.role === "business" ? "/profile/business" : "/profile")}
      >
        {userData.fullName}
      </Button>}

      {enable[1] && <div className="searchFagoda">
        <TextField
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <img
                  alt="search"
                  src={Search}
                  className="imageHeader"
                  style={{ margin: "0 10px" }}
                />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          placeholder="Tìm kiếm trên Fagoda"
          onChange={(event) => setSearchResult(event.target.value === "" ? false : true)}
          onBlur={() => setSearchResult(false)}
          onFocus={(event) => setSearchResult(event.target.value === "" ? false : true)}
        />
        {searchResult &&
          <div className="searchResult">
            <Button
              fullwidth
              startIcon={
                <Avatar
                  alt={""}
                  src={AVT}
                  sx={{ width: 30, height: 30 }}
                />
              }
              style={{
                textTransform: "none",
                color: "black",
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left"
              }}
            >
              <div>
                <span style={{ fontWeight: "bold", }}>Nguyễn Nhật Anh</span>
              </div>
            </Button>
            <Button
              fullwidth
              startIcon={
                <Avatar
                  alt={""}
                  src={BaNaHill}
                  sx={{ width: 30, height: 30 }}
                />
              }
              style={{
                textTransform: "none",
                color: "black",
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left"
              }}
            >
              <div>
                <span style={{ fontWeight: "bold", }}>Bà Nà Hill - Đường lên tiên cảnh</span>
              </div>
            </Button>
          </div>}
      </div>}

      {enable[2] &&
        <Popup
          trigger={<IconButton style={{ position: "fixed", right: "220px" }}>
            <img alt="notification" src={Notification} className="imageHeader" />
          </IconButton>}
        >
          <Notifications />
        </Popup>}

      {enable[3] &&
        <Popup
          trigger={<IconButton style={{ position: "fixed", right: "170px" }}>
            <img alt="message" src={Message} className="imageHeader" />
          </IconButton>}
        >
          <Messages />
        </Popup>}

      {enable[4] && <IconButton
        style={{ position: "fixed", right: "120px" }}
        onClick={() => navigate(userData && userData.role === "business" ? "/cancelled-order" : "/order")}
      >
        <img alt="cart" src={Cart} className="imageHeader" />
      </IconButton>}

      {enable[5] &&
        <Popup
          trigger={<IconButton style={{ position: "fixed", right: "70px" }}>
            <img alt="setting" src={Setting} className="imageHeader" />
          </IconButton>}
        >
          <div className="settingHeader">
            {["Chung", "Bảo mật", "Quyền riêng tư"].map((item) =>
              <Button
                style={{
                  textTransform: "none",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                {item}
              </Button>
            )}
          </div>
        </Popup>}

      {enable[6] &&
        <IconButton
          style={{ position: "fixed", right: "20px" }}
          onClick={() => {
            if (userData) {
              logOut();
            }
            else {
              navigate("/signin")
            }
          }}
        >
          <img alt="logout" src={userData ? Logout : Login} className="imageHeader" />
        </IconButton>}
    </div>
  );
};