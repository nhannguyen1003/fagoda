import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
// import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const OrderTable = () => {
  const [list] = useState([
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Chấp nhận",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Chấp nhận",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Từ chối",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Từ chối",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Chấp nhận",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Chấp nhận",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Từ chối",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Từ chối",
    },
    {
      IDtour: "TO10075",
      IDOrder: "0001137",
      date: "04/11/2022",
      result: "Chấp nhận",
    },
  ]);
  return (
    <div className="table">
      <div className="table-title">
        <div>ĐƠN HỦY</div>
      </div>
      <div className="table-subtitle">
        <ul>
          <li>ID Tour</li>
          <li>ID Đơn</li>
          <li>Ngày xử lý</li>
          <li>Kết quả xử lý</li>
        </ul>
      </div>
      <div style={{ overflowY: "scroll", height: "85%" }}>
        {list.map((item) => (
          <div
            style={{
              backgroundColor: "white",
              padding: "5px 0",
              margin: "5px 0",
            }}
          >
            <div
              className="row-detail"
              style={{
                backgroundColor:
                  item.result === "Từ chối"
                    ? "rgba(236, 80, 80, 0.38)"
                    : "rgba(153, 203, 114, 0.44)",
              }}
            >
              <Button
                fullWidth
                style={{ justifyContent: "flex-start", padding: "6px 0" }}
              >
                {item.IDtour}
              </Button>
              <span>{item.IDOrder}</span>
              <span>{item.date}</span>
              <span>{item.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTable;
