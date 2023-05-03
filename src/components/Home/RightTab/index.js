import React, { useState } from "react";
import "./index.css";
import { ItemList } from "./ItemList";
import { Contact } from "./Contact";
import BaNaHill from "assets/Home/RightTab/BaNaHill.jpg";
import TrangAn from "assets/Home/RightTab/TrangAn.jpg";

export const RightTab = ({ userData }) => {
  const [advertisement, setAdvertisement] = useState({
    title: "Được tài trợ",
    itemList: [
      {
        url: BaNaHill,
        title: "Bà nà Hill - Đường lên tiên cảnh",
        company: "Công ty Du lịch Phú Thịnh",
      },
      {
        url: BaNaHill,
        title: "Bà nà Hill - Đường lên tiên cảnh",
        company: "Công ty Du lịch Phú Thịnh",
      },
      {
        url: BaNaHill,
        title: "Bà nà Hill - Đường lên tiên cảnh",
        company: "Công ty Du lịch Phú Thịnh",
      },
    ],
  });

  const [promotion, setPromotion] = useState({
    title: "Ưu đãi đặc biệt",
    itemList: [
      {
        url: TrangAn,
        title: "Lạc vào tiên cảnh Tràng An",
        company: "Giá chỉ từ 12.600.000đ",
      },
      {
        url: TrangAn,
        title: "Lạc vào tiên cảnh Tràng An",
        company: "Giá chỉ từ 12.600.000đ",
      },
      {
        url: TrangAn,
        title: "Lạc vào tiên cảnh Tràng An",
        company: "Giá chỉ từ 12.600.000đ",
      },
    ],
  });

  return (
    <div className="rightTab">
      <ItemList key={advertisement.title} content={advertisement} />
      <div className="seperator" />
      <ItemList key={promotion.title} content={promotion} />
      {userData && <>
        <div className="seperator" />
        <Contact userData={userData} />
      </>}
    </div>
  );
};
