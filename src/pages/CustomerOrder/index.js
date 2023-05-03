import StandaloneContact from "components/CancelledOrder/StandaloneContact/";
import OrderHistory from "components/OrderHistory";

import "./index.css";
const CustomerOrder = () => {
  return (
    <div className="customer-order-container">
      <OrderHistory />
      <StandaloneContact />
    </div>
  );
};

export default CustomerOrder;
