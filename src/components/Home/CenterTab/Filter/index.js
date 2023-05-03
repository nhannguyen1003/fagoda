import React, { useState } from "react";
import filter from "assets/Home/CenterTab/filter.png";
import Add from "assets/Home/CenterTab/add.png";
import Delete from "assets/Home/CenterTab/delete.png";
import { IconButton, TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export const Filter = () => {
  const [keyword, setKeyword] = useState(["Nhật Bản", "Ngẫu Nhiên"]);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  return (
    <div className="filter">
      <div className="filterRow">
        <img alt="filter" src={filter} className="imageFilter" />
        <div className="titleFilter">Bộ lọc:</div>
        <div className="allFilter">
          {keyword.map((item) => (
            <div className="keyword">
              {item}
              <IconButton
                size="small"
                onClick={() =>
                  setKeyword(keyword.filter((item_) => item_ != item))
                }
              >
                <img alt="delete" src={Delete} className="imageKeyword" />
              </IconButton>
            </div>
          ))}
        </div>
        <IconButton>
          <img alt="add" src={Add} className="imageKeyword" />
        </IconButton>
      </div>
      <div className="filterRow" style={{ height: "60px", justifyContent: "space-evenly" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Từ ngày"
            value={fromDate}
            onChange={(newValue) => {
              setFromDate(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
            inputFormat="DD/MM/YYYY"
          />
          <DatePicker
            label="Đến ngày"
            value={toDate}
            onChange={(newValue) => {
              setToDate(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
            inputFormat="DD/MM/YYYY"
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};