import "./index.css";
import Airplane from "assets/TourInfo/plane.png";
import Bus from "assets/TourInfo/bus.png";
import { Button } from "@mui/material";

function renderSwitch(param) {
  switch (param) {
    case "airplane":
      return <img src={Airplane} className="vehicle-img" />;
    default:
      return <img src={Bus} className="vehicle-img" />;
  }
}

const TourInfo = ({ data }) => {
  return (
    <div>
      <div className="first-part">
        <div className="photo-name">
          <img src={data.imgSrc} style={{ borderRadius: "7px" }} />
          {/* <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}></div> */}
          <div className="tour-name">
            <p>{data.TourName}</p>

            <Button
              variant="outlined"
              sx={{
                fontSize: "0.7em",
                width: "fit-content",
                padding: "3px",
              }}
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className="vehicle-max">
          <div className="vehicle">
            <span>Phương tiện:</span>
            {data.vehicle.map((type) => renderSwitch(type))}
          </div>
          <div>Tối đa Tour: {data.maxPeople} người</div>
        </div>
      </div>
      <div className="date">
        <div>
          <span>Ngày khởi hành</span>
          <span>{data.fromDate}</span>
        </div>
        {data.toDate != "" && (
          <div>
            <span>Ngày hủy đơn</span>
            <span>{data.toDate}</span>
          </div>
        )}
      </div>
      <div className="num-price">
        <p>Số lượng khách: {data.num}</p>
        <div className="tour-price">
          <p>Tổng đơn giá:</p>
          <p style={{ color: "red" }}>{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;
