import { Avatar, Backdrop, Button, CircularProgress, IconButton, Switch, TextField } from "@mui/material";
import Close from "assets/Home/CenterTab/close.png";
import AVT from "assets/Home/CenterTab/user.png";
import addMedia from "assets/Home/CenterTab/addMedia.png";
import addTour from "assets/Home/CenterTab/addTour.png";
import switchIcon from "assets/Home/CenterTab/switch.png";
import React, { useState } from "react";

export const NewPost = ({ userData, close }) => {
	const [posting, setPosting] = useState(false);

	return (
		<div className="newPost">
			<IconButton
				style={{ position: "absolute", right: "20px", top: "10px" }}
				onClick={close}
			>
				<img alt="close" src={Close} style={{ width: "20px" }} />
			</IconButton>
			<div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
				<h2>Tạo bài viết</h2>
			</div>
			<div className="contentNewPost">
				<div className="userNewPost">
					<Avatar alt={userData.fullName} src={userData.photoUrl || AVT} sx={{ width: 30, height: 30 }} />&nbsp;
					<h4>{userData.fullName}</h4>
				</div>
				<TextField
					fullWidth
					variant="standard"
					InputProps={{
						disableUnderline: true,
					}}
					placeholder="Bạn ơi, đăng bài đi nào..."
					style={{
						backgroundColor: "#f0f2f5",
						borderRadius: "20px",
						padding: "10px",
						margin: "20px 0"
					}}
					multiline
					rows={5}
				/>
				<div className="menuNewPost">
					Đính kèm trong bài:&nbsp;
					<div style={{ display: "flex", flexGrow: 1, justifyContent: "space-evenly" }}>
						{[{ content: "Ảnh/Video", url: addMedia }, { content: "Tour liên quan", url: addTour }].map((item) =>
							<Button
								startIcon={<img alt={item.content} src={item.url} className="imageKeyword" />}
								style={{
									textTransform: "none",
									fontSize: "13px",
									color: "black",
									fontWeight: "bold",
								}}
							>
								{item.content}
							</Button>
						)}
						<div style={{ fontSize: "13px", fontWeight: "bold" }}><Switch checkedIcon={<img src={switchIcon} style={{width:"20px"}}/>}/>Quảng cáo</div>
					</div>
				</div>
			</div>
			<div style={{ display: "flex", padding: "0 20px 20px 20px" }}>
				<Button
					fullWidth
					variant="contained"
					style={{ marginRight: "10px" }}
					onClick={() => {
						setPosting(true);
						setTimeout(() => {
							close();
							setPosting(false);
						}, 3000);
					}}
				>
					Đăng bài
				</Button>
				<Button fullWidth variant="contained" color="warning" onClick={() => setPosting(true)}>
					Xem trước
				</Button>
			</div>
			<Backdrop open={posting}><CircularProgress /></Backdrop>
		</div>
	);
}