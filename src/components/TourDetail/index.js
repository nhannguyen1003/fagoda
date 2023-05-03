import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import img from "assets/TourDetail/TourDetail.png";
// import { Filter } from '../Home/CenterTab/Filter';
import "./index.css";
import filledStar from "assets/Home/CenterTab/filledStar.png";
import emptyStar from "assets/Home/CenterTab/emptyStar.png";
import avt from "assets/Header/user.png";
import { Avatar, Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
// import { orange } from '@mui/material/colors';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Plane from "assets/TourDetail/plane.png";
import Locate from "assets/TourDetail/pin.png";
import Room from "assets/TourDetail/room.png";

const tourData = {
    tourID: "TO1862",
    type: "Tour dài ngày",
    name: "Tour Nhật Bản: Tokyo - Yamanashi - Núi Phú Sĩ - 6N7Đ",
    rating: 4,
    numOfReview: 30,
    hostName: "Công ty ABC",
    image: img,
    descriptionTitle: "Trải nghiệm mùa đông tại xứ mặt trời mọc",
    description: "Hành trình khám phá cảnh sắc từ Tokyo đến Kyoto, kết nối Osaka với đền đài, chùa thiêng đẫm không khí thiền tịnh và các công trình xuyên biển vĩ đại tại Kobe. Nhật Bản là điểm đến nổi tiếng trên thế giới với nền văn hóa đậm bản sắc và ẩm thực độc đáo.",
    hightlight: ["Tham quan Nhật Bản trong 5 ngày 4 đêm",
        "Khám phá một trong những thành phố bận rộn nhất thế giới — Tokyo với các trung tâm mua sắm nổi tiếng như: Thành phố điện tử Akihabara, Trung tâm mua sắm Ami Premium Outlets,...",
        "Chụp hình với cảnh đẹp không thể thiếu khi đến với Nhật Bản, đó chính là Núi Phú Sĩ — ngọn núi cao nhất Nhật Bản so với mực nước biển là 3776 mét",
        "Viếng Chùa cổ Asakusa Kannon — ngôi đền linh thiêng và là một trong những ngôi đền cổ kính nhất hiện nay của Tokyo với kiến trúc truyền thống hết sức đặc trưng",
        "Trải nghiệm tắm Onsen — nét văn hóa độc đáo ở xứ sở hoa anh đào"],
    price: {
        default: "25.000.000 VND",
        adults: "30.000.000 VND",
        children: "25.000.000 VND",
    }
}

export const TourDetail = () => {
    const star = [0, 0, 0, 0, 0].fill(1, 0, Math.round(tourData.rating));
    const navigate = useNavigate();
    const [numOfAdults, setNumOfAdults] = useState(0);
    const [numOfChildren, setNumOfChildren] = useState(0);
    const [date, setDate] = useState(null);
    const [vehicle, setVehicle] = useState();
    const handleChangeVehicle = (e) => {
        setVehicle(e.target.value);
    };
    const [room, setRoom] = useState();
    const handleChangeRoom = (e) => {
        setRoom(e.target.value);
    };
    return (
        <div className="container">
            {/* < Filter /> */}
            <div className="content">
                <div className="title-container">
                    <div className="type-of-tour">{tourData.type}</div>
                    <div className="name-of-tour">{tourData.name}</div>
                    <div className="rating">
                        <div className="star">
                            {star.map((item, index) =>
                                <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="rating-star" />
                            )}
                        </div>
                        <div className="rating-number">{tourData.rating}/5</div>
                        <div className="review-number">{tourData.numOfReview} đánh giá</div>
                        <div className='host'>Đơn vị tổ chức:</div>
                        <div className="host-name">
                            <Button
                                startIcon={
                                    <Avatar alt="avatar" src={avt} sx={{ width: 20, height: 20 }} />
                                }
                                style={{
                                    fontSize: "12px",
                                    textTransform: "none",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                {tourData.hostName}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image-for-tour">
                    <img src={tourData.image} alt="imageTour" className='image'></img>
                    <div className='content-title'>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Điểm nổi bật</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Chương trình Tour</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Loại phòng</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Đánh giá</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Mã Tour: {tourData.tourID}</Button>
                    </div>
                </div>
                <div className='overview'>
                    <div className="description">
                        <div className="description-title">{tourData.descriptionTitle}</div>
                        <div className="description-content">{tourData.description}</div>
                        <div className="hightlight-title">Điểm nổi bật</div>
                        <ul>
                            {tourData.hightlight.map((item) =>
                                <li className="hightlight-content">{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className="price-box">
                        <div className="price-adv-box">
                            <div className="price-title">
                                Giá chỉ từ <span className='price-advertising'>25.000.000 VND</span>
                                <div style={{ fontStyle: "italic", fontSize: "12px" }}>1 người</div>
                            </div>
                            <div className='button'>
                                <Button style={{
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    backgroundColor: "orange",
                                    color: "white",
                                }} onClick={() => navigate("/payment")}>Đặt ngay</Button>
                                <Button style={{
                                    marginTop: "10px",
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    backgroundColor: "red",
                                    color: "white"
                                }}>Tư vấn</Button>
                            </div>
                        </div>
                        <div className="guest">Số khách</div>
                        <div className="guest-detail">
                            <div className="adults">
                                Người lớn <span style={{ fontWeight: "bold" }}>x30tr VND</span>
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    numOfAdults === 0 ? setNumOfAdults(0) : setNumOfAdults(numOfAdults - 1);

                                }}>-</Button>
                                {numOfAdults}
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    setNumOfAdults(numOfAdults + 1);
                                }}>+</Button>
                            </div>
                            <div className="children">
                                Trẻ em <span style={{ fontWeight: "bold" }}>x25tr VND</span>
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    numOfChildren === 0 ? setNumOfChildren(0) : setNumOfChildren(numOfChildren - 1);

                                }}>-</Button>
                                {numOfChildren}
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    setNumOfChildren(numOfChildren + 1);
                                }}>+</Button>
                            </div>
                        </div>
                        <div className='vehicle-and-room'>
                            <div className='vehicle-box'>
                                <div className="vehicle">
                                    Phương tiện:

                                </div>
                                <select value={vehicle} onChange={handleChangeVehicle} style={{ width: "80px" }}>
                                    <option value="Máy bay">Máy bay</option>
                                    <option value="Xe khách">Xe khách</option>
                                    <option value="Tàu hỏa">Tàu hỏa</option>
                                </select>
                            </div>
                            <div className='room-box'>
                                <div className="room">
                                    Loại phòng:

                                </div>
                                <select value={room} onChange={handleChangeRoom} style={{ width: "80px" }}>
                                    <option value="Loại 1">Loại 1</option>
                                    <option value="Loại 2">Loại 2</option>
                                    <option value="Loại 3">Loại 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="date-to-start">
                            Ngày khởi hành:
                        </div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField size="small" {...params} />}
                                inputFormat="DD/MM/YYYY"
                            />
                        </LocalizationProvider>
                        <div className="total-price">
                            Tổng tiền: <span style={{
                                textAlign: "right",
                                color: "#A71717",
                                fontSize: "18px",
                                fontWeight: "bold"
                            }}>{(numOfAdults * 30 + numOfChildren * 25 === 0) ? "0 VND" : (numOfAdults * 30 + numOfChildren * 25 + ".000.000 VND")}</span>
                        </div>
                    </div>
                </div>
                <span style={{ fontWeight: "bold", color: "black", fontSize: "15px", marginTop: "20px" }} >Chương trình tour</span>
                <div className='tour-details'>
                    <div className='detail'>
                        <span style={{ fontWeight: "bold", color: "black", fontSize: "14px", marginLeft: "10px" }} >Lịch trình</span>
                        <span style={{ fontWeight: "bold", color: "#A71717", fontSize: "13px", marginLeft: "10px", marginTop: "10px" }}>Day 1 - TP.HỒ CHÍ MINH - NARITA</span>
                        <div className="detail-in-day">Tối 20h40: Quý khách có mặt tại sân bay quốc tế Tân Sơn Nhất, Trưởng đoàn hướng dẫn Quý khách làm thủ tục đáp chuyến bay VJ822 bay chuyến 23:40 đi Narita. Đoàn nghỉ đêm trên máy bay.</div>
                        <span style={{ fontWeight: "bold", color: "#A71717", fontSize: "13px", marginLeft: "10px", marginTop: "10px" }}>Day 2 - TP.HỒ CHÍ MINH - NARITA</span>
                        <div className="detail-in-day">Tối 20h40: Quý khách có mặt tại sân bay quốc tế Tân Sơn Nhất, Trưởng đoàn hướng dẫn Quý khách làm thủ tục đáp chuyến bay VJ822 bay chuyến 23:40 đi Narita. Đoàn nghỉ đêm trên máy bay.</div>
                        <span style={{ fontWeight: "bold", color: "#A71717", fontSize: "13px", marginLeft: "10px", marginTop: "10px" }}>Day 3 - TP.HỒ CHÍ MINH - NARITA</span>
                        <div className="detail-in-day">Tối 20h40: Quý khách có mặt tại sân bay quốc tế Tân Sơn Nhất, Trưởng đoàn hướng dẫn Quý khách làm thủ tục đáp chuyến bay VJ822 bay chuyến 23:40 đi Narita. Đoàn nghỉ đêm trên máy bay.</div>
                        <span style={{ fontWeight: "bold", color: "#A71717", fontSize: "13px", marginLeft: "10px", marginTop: "10px" }}>Day 4 - TP.HỒ CHÍ MINH - NARITA</span>
                        <div className="detail-in-day">Tối 20h40: Quý khách có mặt tại sân bay quốc tế Tân Sơn Nhất, Trưởng đoàn hướng dẫn Quý khách làm thủ tục đáp chuyến bay VJ822 bay chuyến 23:40 đi Narita. Đoàn nghỉ đêm trên máy bay.</div>
                        <div className="button-more">
                            <Button style={{
                                backgroundColor: "#2984FF",
                                color: "white",
                                textTransform: "none",
                                fontSize: "12px",
                                fontWeight: "bold",
                                width: "100px",
                                marginTop: "10px"
                            }}>Xem Thêm</Button>
                        </div>
                    </div>
                    <div className="contain">
                        <div className="contain-tour">
                            <div className="contain-tour-infor">
                                <span style={{ fontWeight: "bold" }}>Xuất phát:</span> <img src={Locate} alt="plane" style={{ width: "15px", height: "15px" }}></img> Hồ Chí Minh
                            </div>
                            <div className="contain-tour-infor">
                                <span style={{ fontWeight: "bold" }}>Độ dài:</span> 6 Ngày - 7 Đêm
                            </div>
                            <div className="contain-tour-infor">
                                <span style={{ fontWeight: "bold" }}>Phương tiện:</span> <img src={Plane} alt="plane" style={{ width: "15px", height: "15px" }}></img> Máy bay
                            </div>
                        </div>
                        <div className="contain-service">
                            Dịch vụ bao gồm
                            <ul className="contain-list">
                                <li>Bảo hiểm </li>
                                <li>Bữa ăn </li>
                                <li>Hướng dẫn viên </li>
                                <li>Khách sạn 3-4* </li>
                                <li>Vé máy bay </li>
                                <li>Vé tham quan </li>
                                <li>Visa </li>
                                <li>Xe đưa đón </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <span style={{ fontWeight: "bold", color: "black", fontSize: "15px", marginTop: "20px" }} >Loại phòng ở</span>
                <div className="type-of-room">
                    <div className="room-detail">
                        <span style={{ fontWeight: "bold", color: "#A90909", fontSize: "13px", textAlign: "center" }}>LOẠI 1</span>
                        <img src={Room} alt="room" style={{ margin: "10px" }}></img>
                        <span style={{ fontWeight: "bold", color: "#333D5E", fontSize: "13px", margin: "10px", marginTop: "0" }}>President Suite Balcony</span>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Kích thước:</span> 70m2</div>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Giường:</span> 1 Giường đôi + 2 Giường đơn</div>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Số khách tối đa:</span> 4</div>
                    </div>
                    <div className="room-detail">
                        <span style={{ fontWeight: "bold", color: "#A90909", fontSize: "13px", textAlign: "center" }}>LOẠI 2</span>
                        <img src={Room} alt="room" style={{ margin: "10px" }}></img>
                        <span style={{ fontWeight: "bold", color: "#333D5E", fontSize: "13px", margin: "10px", marginTop: "0" }}>Mon Cheri Suite Balcony</span>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Kích thước:</span> 40m2</div>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Giường:</span> 1 Giường đôi</div>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Số khách tối đa:</span> 2</div>
                    </div>
                    <div className="room-detail">
                        <span style={{ fontWeight: "bold", color: "#A90909", fontSize: "13px", textAlign: "center" }}>LOẠI 3</span>
                        <img src={Room} alt="room" style={{ margin: "10px" }}></img>
                        <span style={{ fontWeight: "bold", color: "#333D5E", fontSize: "13px", margin: "10px", marginTop: "0" }}>Family Suite Connecting</span>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Kích thước:</span> 70m2</div>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Giường:</span> 2 Giường đôi</div>
                        <div style={{ marginLeft: "10px" }}><span style={{ fontWeight: "bold" }}>Số khách tối đa:</span> 4</div>
                    </div>
                </div>
                <span style={{ fontWeight: "bold", color: "black", fontSize: "15px", marginTop: "20px" }} >Đánh giá</span>
                <div className="review">
                    <div className='total-review'>
                        <div className="review-box">
                            <div style={{ fontWeight: "600", fontSize: "20px" }}>Tuyệt vời</div>
                            <span style={{ fontWeight: "bold", color: "#048E5C", fontSize: "25px" }}>4/5</span>
                            <div className='review-star'>
                                {star.map((item, index) =>
                                    <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="rating-star" />
                                )}
                            </div>
                        </div>
                        <div className="number-review">
                            <span style={{ color: "#F89E34", fontWeight: "bold" }}>30</span> lượt đánh giá
                        </div>
                    </div>
                    <div className="content-review">
                        <div className="number-review">
                            <span style={{ color: "#A71717", fontWeight: "bold" }}>25</span> bình luận
                        </div>

                        <div className='comment'>
                            <div className='review-star'>
                                {star.map((item, index) =>
                                    <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="rating-star" />
                                )}
                            </div>
                            <div className="host-name">
                                <Button
                                    startIcon={
                                        <Avatar alt="avatar" src={avt} sx={{ width: 20, height: 20 }} />
                                    }
                                    style={{
                                        fontSize: "12px",
                                        textTransform: "none",
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Bình Phương
                                </Button>
                            </div>
                            <div style={{ fontSize: "12px" }}>It is a nice tour as they will bring you to a good apot for picture that is less crowded. </div>
                        </div>
                        <div className='comment'>
                            <div className='review-star'>
                                {star.map((item, index) =>
                                    <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="rating-star" />
                                )}
                            </div>
                            <div className="host-name">
                                <Button
                                    startIcon={
                                        <Avatar alt="avatar" src={avt} sx={{ width: 20, height: 20 }} />
                                    }
                                    style={{
                                        fontSize: "12px",
                                        textTransform: "none",
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Liêm Linh
                                </Button>
                            </div>
                            <div style={{ fontSize: "12px" }}>It is a nice tour as they will bring you to a good apot for picture that is less crowded. </div>
                        </div>
                        <div className='comment'>
                            <div className='review-star'>
                                {star.map((item, index) =>
                                    <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="rating-star" />
                                )}
                            </div>
                            <div className="host-name">
                                <Button
                                    startIcon={
                                        <Avatar alt="avatar" src={avt} sx={{ width: 20, height: 20 }} />
                                    }
                                    style={{
                                        fontSize: "12px",
                                        textTransform: "none",
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Quyên Cam
                                </Button>
                            </div>
                            <div style={{ fontSize: "12px" }}>It is a nice tour as they will bring you to a good apot for picture that is less crowded. </div>
                        </div>
                        <div className="button-more">
                            <Button style={{
                                backgroundColor: "#20C19B",
                                color: "white",
                                textTransform: "none",
                                fontSize: "12px",
                                fontWeight: "bold",
                                width: "100px",
                                marginTop: "10px"
                            }}>Xem Thêm</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}