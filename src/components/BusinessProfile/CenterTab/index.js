import React, { useEffect, useState } from "react";
import "./index.css";
import { Post } from "./Post";
import { getNewfeed } from "helpers/firebase/db";
import { Avatar, Button, TextField } from "@mui/material";
import AVT from "assets/Home/CenterTab/user.png";
import addMedia from "assets/Home/CenterTab/addMedia.png";
import addTour from "assets/Home/CenterTab/addTour.png";
import Popup from "reactjs-popup";
import { NewPost } from "./NewPost";
import TourInfo from "../../TourInfo";
import danang from "assets/TourInfo/danang.jpg"; // import Button from "@mui/material";
import Chart from "../Chart";
import Featured from "../Featured";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import background from "assets/Home/CenterTab/daisenMountain.jpg";
import filledStar from "assets/Home/CenterTab/filledStar.png";
import emptyStar from "assets/Home/CenterTab/emptyStar.png";
import calendar from "assets/CancelledOrder/calendar.png";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from 'react-router-dom';

const CenterTab = ({ userData }) => {
  const star = [1, 1, 1, 0];

  const hotTour = {
    imgSrc: danang,
    TourName:
      "Trải nghiệm trọn vẹn Ninh Binh (Hang Múa, Tam Cốc, Tràng An,...) - Tour 2N1D",
    vehicle: ["airplane"],
    maxPeople: 10,
    fromDate: "01/01/2023",
    toDate: "",
    num: 1,
    price: "5.000.000 VND",
    orderID: 2,
  };
  const tours = [1, 1, 1, 1, 1];
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // const [data, setData] = useState(rows);

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getNewfeed());
    };

    fetchData();
  }, []);
  const [tab, setTab] = useState(0);
  return (
    <div className="centerTab">
      <div className="newsfeedProfile">
        <div className="profile-content">
          <div className="top-part">
            <img className="background" src={background} />
            <div className="business-info">
              {/* <div className="left-part"> */}
              <img className="avatar" src={AVT} />
              <div className="date-name">
                <p
                  style={{
                    color: "brown",
                    fontWeight: "700",
                    margin: "0 0 10px 0",
                    fontSize: "19px",
                  }}
                >
                  Công ty ABC
                </p>
                <div className="review__profile">
                  <div className="company-star">
                    {star.map((item) => (
                      <img
                        alt="filledStar"
                        src={item ? filledStar : emptyStar}
                      />
                    ))}
                  </div>
                  738 reviews
                </div>
                <div className="calendar">
                  <img src={calendar} />
                  Tham gia từ 27/10/2022
                </div>
                <div className="follow">
                  <div>78 Following</div> <div>78 Followers</div>
                </div>
              </div>
              {/* </div> */}
              <div className="right-part">
                <Button variant="contained">Theo dõi</Button>
                <p>
                  Bảo Hùng hiện là công ty cung cấp dịch vụ du lịch lữ hành hàng
                  đầu tại Việt Nam.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-part">
            <p
              style={{
                color: "brown",
                fontWeight: "600",
                margin: "0 0 10px 0",
                fontSize: "17px",
              }}
            >
              Thông tin doanh nghiệp
            </p>
            <div className="business-contact">
              <div>
                <div>
                  <strong>Địa chỉ</strong>Tầng 1, số 504 Nguyễn Tất Thành,
                  Phường 18, Quận 4, Thành phố Hồ Chí Minh
                </div>
                <div>
                  <strong>Mã số thuế</strong> 0317541015
                </div>
              </div>
              <div>
                <div>
                  <strong>Hotline</strong>03148842245
                </div>
                <div>
                  <strong>Email</strong> baohungltd@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        {userData && userData.role === "business" && (
          <div className="postNew">
            <div className="contentPostNew">
              <Avatar
                alt={userData.fullName}
                src={userData.photoUrl || AVT}
                sx={{ width: 30, height: 30 }}
              />
              <Popup
                closeOnDocumentClick={false}
                modal
                overlayStyle={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                }}
                trigger={
                  <TextField
                    fullWidth
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    placeholder="Bạn ơi, đăng bài đi nào..."
                    style={{
                      backgroundColor: "#f0f2f5",
                      borderRadius: "20px",
                      paddingLeft: "10px",
                      marginLeft: "10px",
                    }}
                  />
                }
              >
                {(close) => <NewPost userData={userData} close={close} />}
              </Popup>
            </div>
            <div className="menuPostNew">
              {[
                { content: "Thêm Ảnh/Video", url: addMedia },
                { content: "Thêm Tour", url: addTour },
              ].map((item) => (
                <Button
                  startIcon={
                    <img
                      alt={item.content}
                      src={item.url}
                      className="imageKeyword"
                    />
                  }
                  style={{
                    textTransform: "none",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  fullWidth
                >
                  {item.content}
                </Button>
              ))}
            </div>
          </div>
        )}
        <div className="tab-bar">
          <Button
            style={{
              textTransform: "none",
              fontSize: "13px",
              color: "black",
              fontWeight: "bold",
            }}
            variant={tab == 0 ? "contained" : "text"}
            fullWidth
            onClick={() => setTab(0)}
          >
            Bài viết/Quảng cáo
          </Button>
          <Button
            style={{
              textTransform: "none",
              fontSize: "13px",
              color: "black",
              fontWeight: "bold",
            }}
            fullWidth
            variant={tab == 1 ? "contained" : "text"}
            onClick={() => setTab(1)}
          >
            Tour
          </Button>
          <Button
            style={{
              textTransform: "none",
              fontSize: "13px",
              color: "black",
              fontWeight: "bold",
            }}
            fullWidth
            onClick={() => setTab(2)}
            variant={tab == 2 ? "contained" : "text"}
          >
            Thống kê
          </Button>
        </div>
        {tab == 0 &&
          posts.map((item) => (
            <Post key={item.pid} post={item} userData={userData} />
          ))}
        {tab == 1 && (
          <div className="tour-tab">
            <p
              style={{
                color: "brown",
                fontWeight: "600",
                margin: "0 0 10px 10px",
                fontSize: "20px",
              }}
            >
              Các tour đã đăng
            </p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Chọn thời gian"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {tours.map(() => (
              <div>
                <Button
                  variant="contained"
                  style={{
                    textTransform: "none",
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  fullWidth
                  onClick={() => navigate("/tourdetail")}
                >
                  <div>
                    Tour 6 ngày 7 đêm - Khởi hành: Thứ 2 hàng tuần - Phương
                    tiện: Máy bay
                  </div>
                  <div>Giá: 96.000.000đ</div>
                </Button>
              </div>
            ))}
          </div>
          // </div>
        )}
        {tab == 2 && (
          <div className="statistic-tab">
            <div className="field hot-tour">
              <div className="field-title">Top 3 Tour hot tháng</div>
              <div className="hot-tour-content">
                <div>
                  <p
                    style={{
                      color: "brown",
                      fontWeight: "600",
                      margin: "0 0 10px 15px",
                      fontSize: "20px",
                    }}
                  >
                    Hạng 1
                  </p>
                  <TourInfo data={hotTour} />
                </div>

                <div>
                  <p
                    style={{
                      color: "brown",
                      fontWeight: "600",
                      margin: "0 0 10px 15px",
                      fontSize: "20px",
                    }}
                  >
                    Hạng 2
                  </p>
                  <TourInfo data={hotTour} />
                </div>
                <div>
                  <p
                    style={{
                      color: "brown",
                      fontWeight: "600",
                      margin: "0 0 10px 15px",
                      fontSize: "20px",
                    }}
                  >
                    Hạng 3
                  </p>
                  <TourInfo data={hotTour} />
                </div>
              </div>
            </div>
            <div className="field statistic">
              <div className="field-title">Số liệu thống kê</div>
              <div className="statistic-content">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Chọn ngày thống kê"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <div className="box-info">
                  <p
                    style={{
                      color: "brown",
                      fontWeight: "600",
                      margin: "0 0 10px 15px",
                      fontSize: "20px",
                    }}
                  >
                    Tháng 10/2022
                  </p>
                  <div className="box-info-content">
                    <div>
                      <strong>Khách hàng mới</strong>
                      <strong>Số tour tổ chức</strong>
                      <strong>Tổng khách</strong>
                      <strong>Tổng doanh thu</strong>
                    </div>
                    <div>
                      <div>54</div>
                      <div>10</div>
                      <div>60</div>
                      <div>125.000.000 VND</div>
                    </div>
                  </div>
                </div>
                <Featured />
                <Chart title="Doanh thu 6 tháng gần đây" aspect={2 / 1} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterTab;
