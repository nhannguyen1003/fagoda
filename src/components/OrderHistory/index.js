import "./index.css";
import { TextField } from "@mui/material";
import danang from "assets/TourInfo/danang.jpg";
import TourInfo from "../TourInfo";
import { Button } from "@mui/material";

const OrderHistory = () => {
  const completed = [
    {
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
    },
  ];
  const cancelled = [
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
      orderID: 2,
      result: "Thành công",
    },
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
      orderID: 2,
      result: "Thất bại",
    },
  ];
  const paid = [
    {
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
    },
  ];
  return (
    <div className="history-container">
      <div className="history-header">
        <div className="bold-text">Danh sách đơn</div>
        <div style={{ width: "150px" }}>
          <TextField variant="standard" label="Tìm kiếm Đơn" fullWidth />
        </div>
      </div>
      <div className="history-content">
        <div className="history-wrapper">
          <div className="flex-item">
            <div className="box-title">
              <span>Đã hoàn thành</span>
              <span>{completed.length}</span>
            </div>
            <div className="tours">
              {completed.map((tour) => (
                <div className="a-tour">
                  <TourInfo data={tour} />
                  <div className="tour-footer">
                    <div>
                      Mã Tour:
                      <Button
                        sx={{
                          justifyContent: "flex-start",
                          width: "fit-content",
                          height: "fit-content",
                          padding: "3px",
                        }}
                      >
                        {tour.orderID}
                      </Button>
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "0.8em",
                        width: "fit-content",
                        height: "fit-content",
                        padding: "3px",
                      }}
                    >
                      Nhận xét
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-item">
            <div className="box-title">
              <span>Đã hủy</span>
              <span>{cancelled.length}</span>
            </div>
            <div className="tours">
              {cancelled.map((tour) => (
                <div className="a-tour">
                  <TourInfo data={tour} />
                  <div className="tour-footer">
                    <div>
                      Mã Tour:
                      <Button
                        sx={{
                          justifyContent: "flex-start",
                          width: "fit-content",
                          height: "fit-content",
                          padding: "3px",
                        }}
                      >
                        {tour.orderID}
                      </Button>
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "0.8em",
                        width: "fit-content",
                        height: "fit-content",
                        padding: "3px",
                        backgroundColor:
                          tour.result === "Thành công" ? "#5D9C7E" : "#E56464",
                      }}
                    >
                      {tour.result}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-item">
            <div className="box-title">
              <span>Đã thanh toán</span>
              <span>{paid.length}</span>
            </div>
            <div className="tours">
              {paid.map((tour) => (
                <div className="a-tour">
                  <TourInfo data={tour} />
                  <div className="tour-footer">
                    <div>
                      Mã Tour:
                      <Button
                        sx={{
                          justifyContent: "flex-start",
                          width: "fit-content",
                          height: "fit-content",
                          padding: "3px",
                        }}
                      >
                        {tour.orderID}
                      </Button>
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "0.8em",
                        width: "fit-content",
                        height: "fit-content",
                        padding: "3px",
                        backgroundColor: "#F89E34",
                      }}
                    >
                      Hủy đơn
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
