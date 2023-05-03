import StandaloneContact from "components/CancelledOrder/StandaloneContact/";
import CustomerInfo from "components/CancelledOrder/CustomerInfo";
import "./index.css";
const OrderDetail = () => {
  return (
    <div className="order-detail-container">
      <CustomerInfo />
      <StandaloneContact />
    </div>
  );
};

export default OrderDetail;
