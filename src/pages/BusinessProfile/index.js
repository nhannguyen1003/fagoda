import React from "react";
import "./index.css";
import { RightTab } from "components/BusinessProfile/RightTab";
import { LeftTab } from "components/BusinessProfile/LeftTab";
import CenterTab from "components/BusinessProfile/CenterTab";

const BusinessProfile = ({ userData }) => {
  return (
    <div className="BusinessProfile">
      <LeftTab />
      <CenterTab userData={userData} />
      <RightTab userData={userData} />
    </div>
  );
};

export default BusinessProfile;
