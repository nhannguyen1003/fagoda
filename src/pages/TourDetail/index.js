import { TourDetail } from "components/TourDetail";
import { RightTab } from 'components/Home/RightTab';
import { LeftTab } from 'components/Home/LeftTab';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    TourDetail: {
        display: "flex",
        width: "100vw",
        height: "calc(100vh - 50px)",
        justifyContent: "space-between",
    }
}))


export const TourDetails = () => {
    const styles = useStyles();
    return (
        <div className={styles.TourDetail}>
            <LeftTab />
            <TourDetail />
            <RightTab />
        </div>
    )
}