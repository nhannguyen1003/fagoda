import "./index.css";
import Arrow from "assets/CancelledOrder/left.png";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import TourInfo from "../../TourInfo";
import { useParams } from "react-router-dom";
import danang from "assets/TourInfo/danang.jpg";
import mars from "assets/TourInfo/mars.jpg";
import calendar from "assets/CancelledOrder/calendar.png";
import edit from "assets/CancelledOrder/edit.png";
import Person from "./Person";

const CustomerInfo = () => {
  const params = useParams();
  const orderID = params.orderID;

  const i = 2;

  const tours = [
    {
      imgSrc: danang,
      TourName:
        "Trải nghiệm trọn vẹn Ninh Binh (Hang Múa, Tam Cốc, Tràng An,...) - Tour 2N1D",
      vehicle: ["airplane"],
      maxPeople: 10,
      fromDate: "01/01/2023",
      toDate: "30/12/2022",
      num: 1,
      price: "5.000.000 VND",
    },

    {
      imgSrc: mars,
      TourName: 'Tour "Du hành sao Hỏa" ngay tại Trái Đất - Đột phá 45 ngày',
      vehicle: ["airplane", "bus"],
      maxPeople: 1,
      fromDate: "01/04/2098",
      toDate: "30/12/2099",
      num: 1,
      price: "1.000.000 VND",
    },
  ];

  const reasons = ["Thời tiết không phù hợp.", "Đổi ý vì lý do cá nhân."];

  const replies = [
    "Phí Tour được hoàn lại 75%.",
    "Bạn đã quá thời hạn cho phép hủy Tour.",
  ];

  const contacts = [
    {
      name: "Hoàng Nhật Hà",
      phone: "xxxxxx8171",
      email: "ha123@gmail.com",
    },
    {
      name: "Nguyễn Văn A",
      phone: "xxxxxx9542",
      email: "A123@gmail.com",
    },
  ];

  const people = [
    [
      {
        id: 1,
        name: "Hoàng Nhật Hà",
        phone: "xxxxxx8171",
        email: "ha123@gmail.com",
        type: "Người lớn",
      },
    ],
    [
      {
        id: 1,
        name: "Hoàng Nhật Hà",
        phone: "xxxxxx8171",
        email: "ha123@gmail.com",
        type: "Người lớn",
      },
      {
        id: 2,
        name: "Nguyễn Nhật Anh",
        phone: "xxxxxx5693",
        email: "anh123@gmail.com",
        type: "Trẻ em",
      },
    ],
  ];

  const navigate = useNavigate();

  return (
    <div className="info-container">
      <div className="info-header">
        <div className="header-action">
          <IconButton onClick={() => navigate(-1)} sx={{ padding: "0" }}>
            <img alt="go back" src={Arrow} width="20px" height="20px" />
          </IconButton>
          <strong>ĐƠN {orderID}</strong>
        </div>
        <div className="header-action">
          <Button
            sx={{
              backgroundColor: "#99CB72",
              color: "white",
            }}
            size="small"
            variant="contained"
          >
            Chấp nhận
          </Button>
          <Button
            sx={{
              backgroundColor: "#EC5050",
              color: "white",
            }}
            size="small"
            variant="contained"
          >
            Từ chối
          </Button>
        </div>
      </div>
      <div className="info-content">
        <div className="info-wrapper">
          <div className="cancel-info">
            <div className="tour">
              <div className="summary-text">
                <img src={calendar} width="30px" height="30px" />
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2em",
                    margin: "15px",
                  }}
                >
                  Tóm tắt đặt Tour
                </p>
              </div>
              <TourInfo data={tours[orderID % i]} />
            </div>
            <div className="box">
              <p>Lý do hủy đơn</p>
              <div className="textfield">{reasons[orderID % i]}</div>
            </div>
            <div className="box">
              <p style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <span>Phản hồi</span>
                <img src={edit} width="20px" height="20px" />
              </p>

              <div className="textfield">
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  defaultValue={replies[orderID % i]}
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="customer-info">
            <div className="box">
              <p>Thông tin liên hệ</p>
              <Person data={contacts[orderID % i]} type="contact" />
            </div>

            {people[orderID % i].map((person) => (
              <div className="box">
                <p>Thông tin khách {person.id}</p>
                <Person data={person} type="people" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
