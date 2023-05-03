import React, { useEffect, useState } from "react";
import "./index.css";
import { ItemList } from "./ItemList";
import { getTrendings } from "helpers/firebase/db";

export const LeftTab = () => {
  const [status, setStatus] = useState({ isShow: [true, true, true], chosen: "Nhật Bản" });
  const [trendings, setTrendings] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setTrendings(await getTrendings())
    }

    fetchData();
  }, [])

  return (
    <>{trendings &&
      <div className="leftTab">
        <ItemList
          content={trendings.international}
          title={"Quốc Tế"}
          index={0}
          status={status}
          setStatus={setStatus}
        />
        <div className="seperator" />
        <ItemList
          content={trendings.domestic}
          title={"Trong Nước"}
          index={1}
          status={status}
          setStatus={setStatus}
        />
        <div className="seperator" />
        <ItemList
          content={trendings.business}
          title={"Doanh Nghiệp"}
          index={2}
          status={status}
          setStatus={setStatus}
        />
      </div>
    }</>
  );
};
