import { Avatar, Button, Dialog, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import daisenMountain from "assets/Home/CenterTab/daisenMountain.jpg"
import AVT from "assets/Home/CenterTab/user.png";
import More from "assets/Home/CenterTab/moreTour.png";
import filledStar from "assets/Home/CenterTab/filledStar.png";
import emptyStar from "assets/Home/CenterTab/emptyStar.png";
import upVote from "assets/Home/CenterTab/upvote.png";
import downVote from "assets/Home/CenterTab/downvote.png";
import Vote from "assets/Home/CenterTab/vote.png";
import Comment from "assets/Home/CenterTab/comment.png";
import Share from "assets/Home/CenterTab/share.png";
import Report from "assets/Home/CenterTab/report.png";
import Liked from "assets/Home/CenterTab/liked.png";
import Like from "assets/Home/CenterTab/like.png";
import editPost from "assets/Home/CenterTab/editPost.png";
import deletePost from "assets/Home/CenterTab/deletePost.png";
import { getUserData } from "helpers/firebase/db";
import { useNavigate } from "react-router-dom";

export const Post = ({ post, userData }) => {
  const [data, setData] = useState();
  const buttonMenu = [
    { content: "Bình chọn", url: Vote },
    { content: "Đánh giá", url: Comment },
    { content: "Chia sẻ", url: Share },
    { content: "Báo cáo", url: Report }
  ];

  const [openDialog, setOpenDialog] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setData({
        ...post,
        ...await getUserData(post.uid),
        timeStamp: new Date(post.timeStamp.seconds * 1000).getDate() + " Tháng " + (new Date(post.timeStamp.seconds * 1000).getMonth() + 1),
        star: [0, 0, 0, 0, 0].fill(1, 0, Math.round(post.star)),
        comments: await Promise.all(post.comments
          .map(async (item) => ({ ...item, ...await getUserData(item.uid) }))),
      })
    };

    fetchData();
  }, [post])

  return (
    <>{data &&
      <div className="postNF">
        {userData && userData.role === "business" &&
          <div className="menuPostNew">
            {[{ content: "Chỉnh sửa bài viết", url: editPost }, { content: "Xóa bài viết", url: deletePost }].map((item) =>
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
        }
        <img
          alt="img"
          src={data.photoUrl || daisenMountain}
          className="imagePostNF"
          style={{ borderRadius: userData && post.uid === userData.uid ? 0 : "10px 10px 0 0" }}
        />
        <div className="contentNF">
          <span className="titlePostNF">[{data.title}]</span> <br />
          <span className="contentPostNF">{data.content}</span><br />
          <span className="hashtagPostNF">{data.hashtags && data.hashtags.map((item) => `#${item} `)}</span>
          <div className="tourPostNF">
            <div className="infoTourPostNF">
              {data.tours && data.tours.map((item, index) =>
                <Button
                  key={index}
                  variant="contained"
                  style={{
                    textTransform: "none",
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}
                >
                  <div>
                    Tour {item.day} ngày {item.night} đêm - Khởi hành: {item.start} - Phương tiện: {item.vehicle}
                  </div>
                  <div>
                    Giá: {item.price}
                  </div>
                </Button>
              )}
            </div>
            <img alt="more" src={More} className="imageFilter" />
          </div>

          <div className="companyPostNF">
            <div className="infoCompanyPostNF">
              <Avatar alt={data.fullName} src={data.photoUrl || AVT} sx={{ width: 40, height: 40 }} />
              <div>
                <span className="titlePostNF">{data.fullName}</span><br />
                <span className="timePostNF">{data.timeStamp}</span>
              </div>
            </div>
            <div className="starPostNF">
              {data.star && data.star.map((item, index) =>
                <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="imageKeyword" />
              )}
            </div>
          </div>

          <div className="reactPostNF">
            <div className="voteFramePostNF">
              <span className="contentPostNF">{data.upvote.length}&nbsp;</span>
              <img alt="filledStar" src={upVote} className="votePostNF" />
              <span className="contentPostNF">{data.downvote.length}&nbsp;</span>
              <img alt="emptyStar" src={downVote} className="votePostNF" />
            </div>
            <span className="contentPostNF">{data.comments.length} đánh giá</span>
          </div>

          <div className="buttonMenuPostNF">
            {buttonMenu.map((item) =>
              <Button
                key={item.content}
                startIcon={<img alt={item.content} src={item.url} className="imageKeyword" />}
                style={{
                  textTransform: "none",
                  fontSize: "12px",
                  color: "black",
                  fontWeight: "bold",
                }}
                fullWidth
                onClick={() => {
                  if (!userData) setOpenDialog(true);
                }}
              >
                {item.content}
              </Button>
            )}
          </div>

          <Dialog open={openDialog} PaperProps={{ style: { borderRadius: "25px" } }}>
            <div style={{ margin: "25px" }}>
              Bạn vui lòng đăng nhập để sử dụng tính năng này.
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "25px" }}>
              <Button variant="contained" onClick={() => navigate("/signin")}>
                Đăng nhập
              </Button>
              <Button variant="contained" color="error" onClick={() => setOpenDialog(false)}>
                Hủy
              </Button>
            </div>
          </Dialog>

          {data.comments.map((item) =>
            <div key={item.uid} className="commentPostNF">
              <div className="contentCommentPostNF">
                <Avatar alt={item.fullName} src={item.photoUrl || AVT} sx={{ marginRight: "10px", width: 25, height: 25 }} />
                <div>
                  <span className="titlePostNF">{item.fullName}</span> <br />
                  <span className="infoContentCommentPostNF">{item.content}</span>
                </div>
              </div>
              <div className="reactCommentPostNF">
                <div className="childReactCommentPostNF">
                  {item.star}&nbsp;<img alt="filledStar" src={filledStar} className="votePostNF" />
                </div>
                <div className="childReactCommentPostNF"  >
                  {item.like && item.like.length}
                  <IconButton>
                    <img alt="filledStar" src={item.isLiked ? Liked : Like} className="votePostNF" />
                  </IconButton>
                </div>
              </div>
            </div>)}

          <div className="moreCommentPostNF">
            <div>
              Xem thêm đánh giá
            </div>
            <div>
              2/{data.comments.length}
            </div>
          </div>
        </div>
      </div >
    }</>
  );
};