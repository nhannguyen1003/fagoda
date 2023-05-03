import React from "react";

import StandaloneContact from "components/CancelledOrder/StandaloneContact/";
import "./index.css";
import TourList from "components/CancelledOrder/TourList/";

const CancelledOrder = () => {
  return (
    <div className="two-column">
      <TourList />
      <StandaloneContact />
    </div>
  );
};

export default CancelledOrder;
