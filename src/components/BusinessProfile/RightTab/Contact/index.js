import React, { useEffect, useState } from "react";
import AVT from "assets/Home/RightTab/avatar.png";
import { Avatar, Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { getUserData } from "helpers/firebase/db";
import newMessage from "assets/Home/RightTab/newMessage.png";
import Call from "assets/Home/RightTab/call.png";
import Close from "assets/Home/RightTab/close.png";
import Emoji from "assets/Home/RightTab/emoji.png";
import Send from "assets/Home/RightTab/send.png";

export const Contact = ({ userData }) => {
  const [data, setData] = useState([]);
  const [currentChat, setCurrentChat] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setData(await Promise.all(userData.listFriends
        .map(async (item) => await getUserData(item))));
    };

    fetchData();
  }, [])

  return (
    <>
      <div className="mainTitleRightTab">Người liên hệ</div>
      {data && data.map((item) => (
        <Button
          key={item.uid}
          fullWidth
          startIcon={
            <Avatar
              alt={item.fullName}
              src={item.photoUrl || AVT}
              sx={{ width: 30, height: 30 }}
            />
          }
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "13px",
            textTransform: "none",
            color: "black",
          }}
          onClick={() => setCurrentChat(item.fullName)}
        >
          {item.fullName}
        </Button>
      ))}
      <IconButton
        style={{
          position: "fixed",
          right: "30px",
          bottom: "10px",
          boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
          backgroundColor: "white"
        }}>
        <img alt="newMessage" src={newMessage} style={{ width: "30px" }} />
      </IconButton>
      {currentChat &&
        <div className="chatFrame">
          <div className="titleChatFrame">
            <Button
              fullWidth
              startIcon={
                <Avatar
                  alt={currentChat}
                  src={AVT}
                  sx={{ width: 30, height: 30 }}
                />
              }
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "13px",
                textTransform: "none",
                color: "black",
              }}
            >
              {currentChat}
            </Button>
            <IconButton>
              <img alt="call" src={Call} style={{ width: "20px" }} />
            </IconButton>
            <IconButton onClick={() => setCurrentChat(null)}>
              <img alt="close" src={Close} style={{ width: "20px" }} />
            </IconButton>
          </div>
          <div className="listMessage">
          </div>
          <div className="sendMessage">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton style={{ width: "40px" }}>
                      <img
                        alt="emoji"
                        src={Emoji}
                        style={{ width: "20px" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              placeholder="Nhập tin nhắn..."
              multiline
              maxRows={5}
              style={{
                backgroundColor: "#f0f2f5",
                borderRadius: "20px",
                paddingLeft: "10px",
                marginLeft: "10px"
              }}
            />
            <IconButton>
              <img alt="send" src={Send} style={{ width: "20px" }} />
            </IconButton>
          </div>
        </div>
      }
    </>
  );
};
