import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import Pagination from "@mui/material/Pagination";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
//icons
import { IconButton } from "@mui/material";
import ShowIcon from "../../../assets/Admin/show.png";
import EditIcon from "../../../assets/Admin/edit-text.png";
import DeleteIcon from "../../../assets/Admin/trash.png";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "../../../assets/Admin/avatar.png";

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
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  avatar: {
    width: "30px",
  },
}));

const Member = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deletePost, setDeletePost] = useState({});
  const [rows, setRows] = useState([
    { name: "Hoàng Nhật Hà", role: "Admin", latestAccessTime: "1 tuần trước" },
    {
      name: "Bùi Nguyễn Gia Huy",
      role: "Admin",
      latestAccessTime: "3 tháng trước",
    },
    {
      name: "Nguyễn Hoàng Bảo Hùng",
      role: "Business",
      latestAccessTime: "1 ngày trước",
    },
    {
      name: "Công ty TNHH MTV Traveloki",
      role: "Business",
      latestAccessTime: "1 giờ 12 phút trước",
    },
    {
      name: "Nguyễn Xuân Mạnh",
      role: "User",
      latestAccessTime: "36 phút trước",
    },
    { name: "Nguyễn Nhật Anh", role: "User", latestAccessTime: "1 giây trước" },
  ]);
  const handleDelete = (row) => {
    setRows(rows.filter((_row) => _row !== row));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>THÀNH VIÊN</h3>
      </div>
      <div className={styles.content}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#90E0EF" }}>
              <TableRow>
                <TableCell style={{ width: "50%" }}>Tên</TableCell>
                <TableCell align="left">Quyền</TableCell>
                <TableCell align="left">Truy cập gần nhất</TableCell>
                <TableCell align="left" style={{ width: "120px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow sx={{ width: "50%" }} key={row.name}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left">
                    <div className={styles.nameContainer}>
                      <img
                        alt="avatar"
                        src={Avatar}
                        className={styles.avatar}
                      />
                      {row.name}
                    </div>
                  </TableCell>
                  <TableCell align="left">{row.role}</TableCell>
                  <TableCell align="left">{row.latestAccessTime}</TableCell>
                  <div className={styles.actionButtonContainer}>
                    <IconButton onClick={() => navigate('/profile')}>
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
          <div style={{ width: "600px" }}>
            {/* <h2 className={styles.title}>[NHẬT BẢN - ĐỊA ĐIỂM ĐƯỢC YÊU THÍCH NHẤT NĂM 2069]</h2> */}
          </div>
        </Box>
      </Modal>
      <Dialog
        open={openDialog}
        keepMounted
        onClose={() => setOpenDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle fontWeight="bold" color="#db4646">
          {"Cảnh báo !!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn có chắc chắn là sẽ xoá người dùng không?
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
