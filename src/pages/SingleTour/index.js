import StandaloneContact from "components/CancelledOrder/StandaloneContact/";
import TourTable from "components/CancelledOrder/TourTable";
import "./index.css";
const SingleTour = () => {
  return (
    <div className="single-tour-container">
      <TourTable />
      <StandaloneContact />
    </div>
  );
};

export default SingleTour;
