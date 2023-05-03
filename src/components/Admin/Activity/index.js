import React, { useState } from "react";
import dayjs from 'dayjs';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { saveAs } from 'file-saver';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const useStyles = makeStyles(() => ({
  container: {},
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  dateAndLog: {
    height: "40px",
    justifyContent: "center",
  },
  content: {
    marginLeft: "20px",
    border: "1px solid #00B4D8",
    borderRadius: "20px",
    width: "1200px",
    height: "600px",
    padding: "10px",
  },
}));

const Activity = () => {
  var FileSaver = require('file-saver');
  const styles = useStyles('hello');
  const date = new Date().toLocaleDateString()
  const [content, setContent] = useState(`#13634 12:00:00, 12/12/2002: Nguyễn Thanh Hải đăng bài viết ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13635 12:00:00, 13/12/2022: Nguyễn Xuân Mạnh bình chọn ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13636 12:00:00, 14/12/2022: Nguyễn Hoàng Bảo Hùng thêm vào giỏ hàng ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13637 12:00:00, 15/12/2022: Nguyễn Hoàng Bảo Hùng thanh toán ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13638 12:00:00, 16/12/2022: Nguyễn Thanh Hải đăng bài viết ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13639 12:00:00, 17/12/2022: Nguyễn Xuân Mạnh bình chọn ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13640 12:00:00, 17/12/2022: Nguyễn Hoàng Bảo Hùng thêm vào giỏ hàng ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13641 12:00:00, 17/12/2022: Nguyễn Hoàng Bảo Hùng thanh toán ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13642 12:00:00, 17/12/2022: Nguyễn Thanh Hải đăng bài viết ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13643 12:00:00, 17/12/2022: Nguyễn Xuân Mạnh bình chọn ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13644 12:00:00, 17/12/2022: Huỳnh Hoàng Khang thêm vào giỏ hàng ở bài viết Khám phá Nha Trang 3 ngày 2 đêm
#13645 12:00:00, 17/12/2022: Huỳnh Hoàng Khang thanh toán ở bài viết Khám phá Nha Trang 3 ngày 2 đêm`);
  const [value, setValue] = useState();
  const [activities, setActivities] = useState([
    {
      id: 13634,
      time: "12:00:00",
      date: "12/12/2002",
      type: "đăng bài viết",
      user: "Nguyễn Thanh Hải",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13635,
      time: "12:00:00",
      date: "13/12/2022",
      type: "bình chọn",
      user: "Nguyễn Xuân Mạnh",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13636,
      time: "12:00:00",
      date: "14/12/2022",
      type: "thêm vào giỏ hàng",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13637,
      time: "12:00:00",
      date: "15/12/2022",
      type: "thanh toán",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13638,
      time: "12:00:00",
      date: "16/12/2022",
      type: "đăng bài viết",
      user: "Nguyễn Thanh Hải",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13639,
      time: "12:00:00",
      date: "17/12/2022",
      type: "bình chọn",
      user: "Nguyễn Xuân Mạnh",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13640,
      time: "12:00:00",
      date: "17/12/2022",
      type: "thêm vào giỏ hàng",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13641,
      time: "12:00:00",
      date: "17/12/2022",
      type: "thanh toán",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13642,
      time: "12:00:00",
      date: "17/12/2022",
      type: "đăng bài viết",
      user: "Nguyễn Thanh Hải",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13643,
      time: "12:00:00",
      date: "17/12/2022",
      type: "bình chọn",
      user: "Nguyễn Xuân Mạnh",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13644,
      time: "12:00:00",
      date: "17/12/2022",
      type: "thêm vào giỏ hàng",
      user: "Huỳnh Hoàng Khang",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13645,
      time: "12:00:00",
      date: "17/12/2022",
      type: "thanh toán",
      user: "Huỳnh Hoàng Khang",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
  ]);

  const handleChangeDate = (newValue) => {
    setValue(newValue)
  }
  const handleDownloadLog = () => {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "log.txt");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>HOẠT ĐỘNG</h3>
        <div className={styles.dateAndLog}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DesktopDatePicker
              label="Ngày"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button style={{marginLeft: 5}} variant="contained" onClick={handleDownloadLog}>Log</Button>
        </div>
      </div>
      <div className={styles.content}>
        {activities.map((activity) => (
          <p style={{margin: 15}}>
            #{activity.id} {activity.time}, {activity.date}: {activity.user} {" "} 
          <b style={{ color: "#00B4D8" }}>{activity.type}</b> ở bài viết{" "}
            <i>{activity.post}</i>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Activity;
