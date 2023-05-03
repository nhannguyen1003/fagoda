import React, { useState } from "react";
import { Button } from "@mui/material";
import redflag from "assets/CancelledOrder/red-flag.png";
import greenflag from "assets/CancelledOrder/green-flag.png";
import "./index.css";
import Waiting from "./Waiting";
import Completed from "./Completed";

const TourList = () => {
  const [status, setStatus] = useState({
    chosen: "waiting",
  });
  return (
    <div className="tour-list">
      <div className="status-bar">
        <Button
          variant={status.chosen === "waiting" ? "contained" : "text"}
          onClick={() => setStatus({ chosen: "waiting" })}
          sx={{
            background: status.chosen === "waiting" && "#EDEDED",
            height: "50px",
            "&:hover": {
              backgroundColor: "#DBDBDB",
            },
          }}
          // className="status-button"
        >
          <img alt="waiting" src={redflag} className="status-image" />
          <div style={{ paddingRight: "20px", color: "black" }}>Chờ xử lý</div>
        </Button>
        <Button
          variant={status.chosen === "completed" ? "contained" : "text"}
          onClick={() => setStatus({ chosen: "completed" })}
          sx={{
            background: status.chosen === "completed" && "#EDEDED",
            height: "50px",
            "&:hover": {
              backgroundColor: "#DBDBDB",
            },
          }}
          // className="status-button"
        >
          <img alt="completed" src={greenflag} className="status-image" />
          <div style={{ paddingRight: "20px", color: "black" }}>Đã xử lý</div>
        </Button>
      </div>

      {status.chosen === "waiting" ? <Waiting /> : <Completed />}
    </div>
  );
};

export default TourList;
