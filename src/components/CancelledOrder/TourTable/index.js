import "./index.css";
import Arrow from "assets/CancelledOrder/left.png";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Link } from "react-router-dom";

const TourTable = () => {
  const navigate = useNavigate();
  const columns = [
    {
      field: "id",
      headerName: "ID Đơn",
      width: 90,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              onClick={() => navigate(`${params.row.id}`)}
              size="small"
            >
              {params.row.id}
            </Button>
          </div>
        );
      },
    },
    {
      field: "fromDate",
      headerName: "Ngày đi",
      width: 130,
    },
    {
      field: "cancelDate",
      headerName: "Ngày hủy",
      width: 130,
    },
    {
      field: "status",
      headerName: "Thanh toán",
      width: 110,
      sortable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 2,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 3,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 4,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 5,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 6,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 7,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 8,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 9,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
    {
      id: 10,
      fromDate: "06/10/2022",
      cancelDate: "06/10/2022",
      status: "Đã thanh toán",
    },
  ];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Lựa chọn",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              sx={{
                backgroundColor: "#99CB72",
                fontSize: "0.7em",
                color: "white",
              }}
              onClick={() => handleDelete(params.row.id)}
              size="small"
              variant="contained"
            >
              Châp nhận
            </Button>
            <Button
              sx={{
                backgroundColor: "#EC5050",
                fontSize: "0.7em",
                color: "white",
              }}
              onClick={() => handleDelete(params.row.id)}
              size="small"
              variant="contained"
            >
              Từ chối
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="tour-table-container">
      <div className="tour-name-header">
        <IconButton onClick={() => navigate(-1)} sx={{ padding: "0" }}>
          <img alt="go back" src={Arrow} width="20px" height="20px" />
        </IconButton>
        <strong>TOUR TO10075</strong>
      </div>
      <div className="tour-table">
        <div className="table-wrapper">
          <div className="table-name">
            <div>ĐƠN HỦY</div>
          </div>
          <DataGrid
            sx={{ backgroundColor: "white" }}
            className="datagrid"
            rows={data}
            columns={columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default TourTable;
