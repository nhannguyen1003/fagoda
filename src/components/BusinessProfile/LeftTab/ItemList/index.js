import React from "react";
import DropDown from "assets/Home/LeftTab/DropDown.png";
import International from "assets/Home/LeftTab/International.png";
import Domestic from "assets/Home/LeftTab/domestic.png";
import Business from "assets/Home/LeftTab/business.png";
import { Button } from "@mui/material";

export const ItemList = ({ content, title, index, status, setStatus }) => {
  return (
    <>
      <Button
        startIcon={
          <img
            src={DropDown}
            className="imageLeft"
            style={{
              transform:
                status.isShow[index] ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          />
        }
        onClick={() => {
          let temp = { ...status.isShow };
          temp[index] = !temp[index];
          setStatus({ ...status, isShow: temp })
        }}
        fullWidth
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
        size="large"
      >
        <div className="titleLeft">{title}</div>
      </Button>
      <div className="itemListLeftTab">
        {status.isShow[index] && content &&
          <>
            {content.map((item) => (
              <Button
                startIcon={
                  <img
                    src={item.PhotoUrl || (title === "Quốc Tế" ? International : title === "Trong Nước" ? Domestic : Business)}
                    style={{ width: "20px", height: "20px" }}
                  />
                }
                fullWidth
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                size="large"
                variant={
                  item.name === status.chosen
                    ? "contained"
                    : "text"
                }
                onClick={() => setStatus({ ...status, chosen: item.name })}
              >
                <div
                  className="contentLeft"
                  style={{
                    color:
                      item.name === status.chosen
                        ? "white"
                        : "black",
                  }}
                >
                  {item.name}
                </div>
              </Button>
            ))}
            <div className="moreLeftTab">
              <Button
                style={{
                  textTransform: "none",
                  fontSize: "10px",
                }}
                variant="contained"
                size="small"
              >
                Xem thêm
              </Button>
            </div>
          </>}
      </div>
    </>
  );
};
