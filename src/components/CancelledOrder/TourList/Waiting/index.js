import React, { useState } from "react";
import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import cancel from "assets/CancelledOrder/remove.png";
import { Avatar } from "@mui/material";
import AVT from "assets/Header/user.png";
import filledStar from "assets/Home/CenterTab/filledStar.png";
import emptyStar from "assets/Home/CenterTab/emptyStar.png";
import { useNavigate } from "react-router-dom";
const Waiting = () => {
  const navigate = useNavigate();
  const star = [1, 1, 1, 0];

  const [listTour] = useState([
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "local",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "abroad",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "local",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "abroad",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "abroad",
    },
  ]);
  return (
    <div className="tab-view">
      <div className="detail">
        <div className="title">Các tour có yêu cầu chờ xử lý</div>
        <div className="waiting-content">
          <div className="subtitle">
            <ul>
              <li style={{ width: "120px" }}>Mã tour</li>
              <li style={{ width: "150px" }}>Số yêu cầu hủy</li>
              <li style={{ width: "180px" }}>Tour</li>
              <li style={{ width: "200px" }}>Đơn vị tổ chức</li>
              <li style={{ width: "150px" }}>Ngày khởi hành</li>
            </ul>
          </div>
          <div style={{ overflowY: "scroll", height: "64%" }}>
            {listTour.map((item) => (
              <div className="each-tour">
                <div style={{ width: "120px" }} className="tour-detail">
                  <Button onClick={() => navigate("single-tour")}>
                    {item.ID}
                  </Button>
                </div>
                <div style={{ width: "150px" }} className="tour-detail">
                  <span>{item.quantity}</span>{" "}
                  <img
                    alt="waiting"
                    src={cancel}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </div>
                <div style={{ width: "180px" }} className="tour-detail">
                  <div className="tour-location">
                    <div
                      className="location-detail"
                      style={{
                        border:
                          item.location === "abroad"
                            ? "2px solid #00B4D8"
                            : "2px solid #FFD700",
                      }}
                    >
                      {item.location === "abroad" ? "QUỐC TẾ" : "TRONG NƯỚC"}
                    </div>
                    <div style={{ color: "#7C7C7C" }}>{item.name}</div>
                  </div>
                </div>
                <div style={{ width: "200px" }} className="tour-detail">
                  <div className="company-detail">
                    <div className="company-info">
                      <Avatar
                        alt="avatar"
                        src={AVT}
                        sx={{ width: 30, height: 30 }}
                      />
                      <div>{item.company}</div>
                    </div>
                    <div className="company-star">
                      {star.map((item) => (
                        <img
                          alt="filledStar"
                          src={item ? filledStar : emptyStar}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ width: "150px" }} className="tour-detail">
                  {item.depart}
                </div>
              </div>
            ))}
          </div>

          {/* <DataGrid />*/}
        </div>
      </div>
    </div>
  );
};

export default Waiting;
