import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//icons
import { IconButton } from "@mui/material";
import ShowIcon from "../../../assets/Admin/show.png";
import EditIcon from "../../../assets/Admin/edit-text.png";
import DeleteIcon from "../../../assets/Admin/trash.png";

//table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getNewfeed } from "helpers/firebase/db";
import { Post } from "./posts";


const useStyles = makeStyles(() => ({
  container: {},
  titleContainer: {
    height: "100px",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  content: {
    width: "1200px",
    height: "600px",
    marginLeft: "20px",
    padding: "10px",
    border: "1px solid #00B4D8",
    borderRadius: "20px",
  },
  pagination: {
    position: "absolute",
    bottom: "10px",
    left: "45%",
  },
  actionButtonContainer: {
    padding: "8px 0 0 2px",
    height: "100%",
    margin: "0",
  },
  actionButton: {
    width: "20x",
    height: "20px",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-40%, -50%)",
    width: "1000px",
    height: "700px",
    background: "linear-gradient(180deg, #90E0EF 0%, #E4E5E6 100%)",
    border: "2px solid #ddd",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Member = () => {
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deletePost, setDeletePost] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getNewfeed());
    };

    fetchData();
  }, [])
  const [rows, setRows] = useState([
    {
      postName: "Chuyến phiêu lưu vào lòng đất",
      author: "Nguyễn Hoàng Bảo Hùng",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "Đường lên tiên cảnh",
      author: "Nguyễn Xuân Mạnh",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "4 ngày 3 đêm tại Vịnh Hạ Long",
      author: "Bùi Nguyễn Gia Huy",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "Làng hoa Sa Đéc - Vườn quýt Hồng Lai",
      author: "Hoàng Nhật Hà",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "Tour du lịch Hà Nội - Hạ Long - Sa Pa",
      author: "Nguyễn Nhật Anh",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "Khám phá Nha Trang 3 ngày 2 đêm",
      author: "Nguyễn Hoàng Bảo Hùng",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "Cắm trại 2 ngày 1 đêm Hồ Tiên - La Ngâu",
      author: "Nguyễn Xuân Mạnh",
      latestEditTime: "1 giây trước",
    },
    {
      postName: "Tour du lịch khám phá Tây Nguyên 3 ngày 2 đêm",
      author: "Bùi Nguyễn Gia Huy",
      latestEditTime: "1 giây trước",
    },
  ]);
  const handleDelete = (row) => {
    setRows(rows.filter((_row) => _row !== row));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>BÀI VIẾT</h3>
      </div>
      <div className={styles.content}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#90E0EF" }}>
              <TableRow>
                <TableCell style={{ width: "40%" }}>Tên</TableCell>
                <TableCell align="left">Tác giả</TableCell>
                <TableCell align="left">Chỉnh sửa gần nhất</TableCell>
                <TableCell align="left" style={{ width: "120px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow sx={{ width: "50%" }} key={row.postName}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left">{row.postName}</TableCell>
                  <TableCell align="left">{row.author}</TableCell>
                  <TableCell align="left">{row.latestEditTime}</TableCell>
                  <div className={styles.actionButtonContainer}>
                    <IconButton onClick={() => setOpenModal(true)}>
                      <img
                        className={styles.actionButton}
                        src={ShowIcon}
                        alt="ShowIcon"
                      />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setOpenDialog(true);
                        setDeletePost(row);
                      }}
                    >
                      <img
                        className={styles.actionButton}
                        src={DeleteIcon}
                        alt="DeleteIcon"
                      />
                    </IconButton>
                    <IconButton>
                      <img
                        className={styles.actionButton}
                        src={EditIcon}
                        alt="EditIcon"
                      />
                    </IconButton>
                  </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={styles.pagination}>
          <Pagination count={10} color="tertiary" />
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <div style={{ width: "600px", margin: '0 auto'}}>
            {posts.map((item) => <Post key={item.pid} post={item} userData={null}/>)}
          </div>
        </Box>
      </Modal>
      <Dialog
        open={openDialog}
        keepMounted
        onClose={() => setOpenDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle fontWeight='bold' color='#db4646'>{"Cảnh báo !!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn có chắc chắn là sẽ xoá bài viết không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Huỷ</Button>
          <Button
            onClick={() => {
              setOpenDialog(false);
              handleDelete(deletePost);
            }}
          >
            Chắc chắn
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Member;
