import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import "./index.css"
import { Post } from "./Post";
import { getNewfeed } from "helpers/firebase/db";
import { Avatar, Button, TextField } from "@mui/material";
import AVT from "assets/Home/CenterTab/user.png";
import addMedia from "assets/Home/CenterTab/addMedia.png";
import addTour from "assets/Home/CenterTab/addTour.png";
import Popup from "reactjs-popup";
import { NewPost } from "./NewPost";

export const CenterTab = ({ userData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPosts(await getNewfeed());
    };

    fetchData();
  }, [])

  return (
    <div className="centerTab">
      <Filter />
      <div className="newsfeed">
        {userData && userData.role === "business" &&
          <div className="postNew">
            <div className="contentPostNew">
              <Avatar alt={userData.fullName} src={userData.photoUrl || AVT} sx={{ width: 30, height: 30 }} />
              <Popup
                closeOnDocumentClick={false}
                modal
                overlayStyle={{
                  backgroundColor: "rgba(0, 0, 0, .5)",
                }}
                trigger={<TextField
                  fullWidth
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Bạn ơi, đăng bài đi nào..."
                  style={{
                    backgroundColor: "#f0f2f5",
                    borderRadius: "20px",
                    paddingLeft: "10px",
                    marginLeft: "10px"
                  }}
                />}>
                {close => <NewPost userData={userData} close={close} />}
              </Popup>
            </div>
            <div className="menuPostNew">
              {[{ content: "Thêm Ảnh/Video", url: addMedia }, { content: "Thêm Tour", url: addTour }].map((item) =>
                <Button
                  startIcon={<img alt={item.content} src={item.url} className="imageKeyword" />}
                  style={{
                    textTransform: "none",
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  fullWidth
                >
                  {item.content}
                </Button>
              )}
            </div>
          </div>}
        {posts.map((item) => <Post key={item.pid} post={item} userData={userData} />)}
      </div>
    </div>
  );
}