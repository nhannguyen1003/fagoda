import {React} from 'react';
import './Profile.css';
import { RightTab } from '../../components/Home/RightTab';
import { LeftTab } from '../../components/Home/LeftTab';
import CoverKhachHang from 'assets/Profile/AnhBiaKhachHang.jpg';
import AVT from "assets/Header/user.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TourIcon from '@mui/icons-material/Tour';
import MovingIcon from '@mui/icons-material/Moving';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useNavigate } from "react-router-dom";

function listposts(userData) {
  // console.log(userData.role)
    if (userData && userData.role === "customer") {

        return (
          <div id='listposts'>
            <span style={{
              padding: "9px",
              marginLeft: "15px",
              position: "flex",
              fontSize: "18px",
              fontWeight: "bold",
            }}>Hoạt động gần đây
            </span>
            <span style={{
                position: 'flex',
                fontSize: '15px',
                fontStyle: 'italic',
                padding: '9px',
                paddingTop: '40px',
                marginLeft: '-160px'
                
                // margin: 'auto',
            }}>
              Bạn không có hoạt động gì gần đây
            </span>
        </div>
        );
    }
    else {
      return (
        <div id='listposts'>
            <span style={{
              padding: "9px",
              marginLeft: "15px",
              position: "flex",
              fontSize: "18px",
              fontWeight: "bold",
            }}>Hoạt động gần đây
            </span>
            <span style={{
                position: 'flex',
                fontSize: '15px',
                fontStyle: 'italic',
                padding: '9px',
                paddingTop: '40px',
                marginLeft: '-160px'
                
                // margin: 'auto',
            }}>
              Bạn không có hoạt động gì gần đây
            </span>
        </div>

      );
    }

    
}

export default function Profile({userData}) {
  const navigate = useNavigate();
  if(userData) {
      return (
        <div className='profile'>
            <LeftTab />
            <div id="profile-upper">
                <div id="profile-banner-image">
                  <img src={CoverKhachHang} alt='Cover'></img>
                </div>
                <div id="profile-d">
                  <div id="profile-pic">
                    <img src={userData.photoUrl || AVT} alt='Avatar'></img>
                  </div>
                  <div id='u-name'>{userData.fullName || null}</div>
                  
                  <div className='short-info'>
                    <CalendarMonthIcon style={{
                      fill: "#20ECBB",
                      marginRight: "7px",
                    }}/>
                    Tham gia từ 27/10/2022
                    </div>
                  <div className='short-info'>
                    <TourIcon style={{
                      color: '20ECBB',
                      marginRight: "7px",
                    }}/>
                    Đã tham gia 10 chuyến đi
                    </div>
                  <div className='short-info'>
                    <MovingIcon style={{
                      color: '20ECBB',
                      marginRight: "7px",
                    }}/>
                    Các địa điểm đã đến
                    </div>
                  <div className='short-info'>
                      <span id='abroad'>
                        QUỐC TẾ
                      </span>
                      <span style={{
                        fontSize: "15px",
                      }}>
                        Nhật Bản, Hàn Quốc
                        </span>
                    
                  </div>
                  <div className='short-info'>
                  <span id='not-abroad'>
                      TRONG NƯỚC
                      </span>
                      <span style={{
                        fontSize: "15px",
                      }}>
                        Ninh Bình, Hạ Long, Hà Nội, Hồ Chí Minh
    
                      </span>
                  </div>
                </div>
                <div id='ContactInfo'>
                    
                  <span style={{
                      padding: "9px",
                      marginLeft: "15px",
                      position: "absolute",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}>Thông tin liên hệ
                    </span>
                  <div className='u-location'>
                    <span style={{
                      marginTop: '10px',
                      paddingBottom: '30px'
                    }}>
                      <PlaceOutlinedIcon sx={{
                        fontSize: 'medium',
                        marginLeft: '10%',
                        
                        color: '#7E7E7E'
                      }} /> Thủ Đức, Hồ Chí Minh
                      <span style={{
                        marginLeft: '10%'
                      }}>
                        <FacebookIcon sx={{
                          fontSize: 'medium',
                          marginRight: '5px',
                          color: '#7E7E7E'
                        }} /> <a style={{
                          textDecoration: 'none',
                          
                        }} href="#">{userData.email.split("@")[0]}</a>
                      </span>
                      <span style={{
                        marginLeft: '8%',
                        
                      }}>
                        <LinkedInIcon sx={{
                          fontSize: 'medium',
                          marginRight: '5px',
                          color: '#7E7E7E'
                        }} /><a style={{
                          textDecoration: 'none',
                          position: 'absolute'
                        }} href="#">{userData.email.split("@")[0]}</a>
                      </span>
                      <span style={{
                          marginLeft: '50px',
                          
                        }}>
                          <SmartphoneIcon sx={{
                            fontSize: 'medium',
                            marginRight: '5px',
                            color: '#7E7E7E'
                          }} /> 0123456789
                      </span>
    
                      <span style={{
                          position: 'absolute',
                          marginLeft: '14%'
                        }}>
                          <MailOutlinedIcon sx={{
                            fontSize: 'medium',
                            marginRight: '5px',
                            color: '#7E7E7E'
                          }} /> {userData.email}
                      </span>
                    </span>
                  </div>
              {listposts(userData)}
                </div>
            </div>
            <RightTab userData={userData}/>
        </div>
      )

  }
  else {
    navigate("/signin");
  }
}
