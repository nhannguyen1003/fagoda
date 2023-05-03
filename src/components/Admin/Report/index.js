import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
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

const Report = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deletePost, setDeletePost] = useState({});
  const [rows, setRows] = useState([
    {id: 7282, color: 'green', status: "Đã xử lý", sender: 'Nguyễn Xuân Mạnh', post: "Khám phá Nha Trang 3 ngày 2 đêm", content: "Tour đã hết hạn", handler: 'Hoàng Nhật Hà'},
    {id: 7283, color: 'yellow', status: "Đang xử lý", sender: 'Nguyễn Tuấn Anh', post: "Cắm trại 2 ngày 1 đêm Hồ Tiên - La Ngâu", content: "Tour đã hết chỗ", handler: 'Hoàng Nhật Hà'},
    {id: 7284, color: 'red', status: "Chưa xử lý", sender: 'Vũ Minh Đức', post: "Khám phá Nha Trang 3 ngày 2 đêm", content: "Tour đã hết hạn", handler: ''},
    {id: 7282, color: 'green', status: "Đã xử lý", sender: 'Nguyễn Xuân Mạnh', post: "Khám phá Nha Trang 3 ngày 2 đêm", content: "Tour đã hết hạn", handler: 'Hoàng Nhật Hà'},
    {id: 7283, color: 'yellow', status: "Đang xử lý", sender: 'Nguyễn Tuấn Anh', post: "Cắm trại 2 ngày 1 đêm Hồ Tiên - La Ngâu", content: "Tour đã hết thời hạn đăng ký", handler: 'Hoàng Nhật Hà'},
    {id: 7284, color: 'red', status: "Chưa xử lý", sender: 'Vũ Minh Đức', post: "Khám phá Nha Trang 3 ngày 2 đêm", content: "Tôi không thể đăng ký được tour cho gia đình tôi.", handler: ''},
  ]);
  const handleDelete = (row) => {
    setRows(rows.filter((_row) => _row !== row));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>
          BÁO CÁO
        </h3>
      </div>
      <div className={styles.content}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#90E0EF" }}>
              <TableRow>
                <TableCell style={{  }}>ID</TableCell>
                <TableCell align="left">Trạng thái</TableCell>
                <TableCell align="left">Người báo cáo</TableCell>
                <TableCell align="left" style={{ }}>
                  Bài viết
                </TableCell>
                <TableCell align="left" style={{ }}>
                  Nội dung
                </TableCell>
                <TableCell align="left" style={{ }}>
                  Người xử lý
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow sx={{ width: "50%" }} key={row.postName}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left" style={{ width: '5%' }}>#{row.id}</TableCell>
                  <TableCell align="left" style={{ width: '10%' }}>
                    {row.status === 'Đã xử lý' && <p style={{backgroundColor: "#2984FF", color: "white", padding: '2px'}}>{row.status}</p>}
                    {row.status === 'Đang xử lý' && <p style={{backgroundColor: "#aaa", color: "white", padding: '2px'}}>{row.status}</p>}
                    {row.status === 'Chưa xử lý' && <p style={{backgroundColor: "red", color: "white", padding: '2px'}}>{row.status}</p>}
                  </TableCell>
                  <TableCell align="left" style={{ width: '15%' }}>{row.sender}</TableCell>
                  <TableCell align="left" style={{ width: '20%' }}>
                      {row.post}
                  </TableCell>
                  <TableCell align="left" style={{ width: '25%' }}>{row.content}</TableCell>
                  <TableCell align="left" style={{ width: '15%' }}>
                    {row.handler !== '' && row.handler}
                    {row.handler === '' && <Button 
                      variant="outlined" 
                      color="error" 
                      onClick={() => navigate('/tourdetail')}
                    >
                        Xử lý
                      </Button>
                    }
                  </TableCell>
                  {/* <div className={styles.actionButtonContainer}>
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
                  </div> */}
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

export default Report;
