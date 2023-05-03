import { Avatar, Button } from "@mui/material";
import React from "react";
import AVT from "assets/Home/RightTab/avatar.png";

export const Notifications = () => {
	const data = [
		{
			user: "Nguyễn Nhật Anh",
			photoUrl: null,
			action: "thích",
			type: "bài viết",
			post: "Hello everybody"
		},
		{
			user: "Nguyễn Nhật Anh",
			photoUrl: null,
			action: "thích",
			type: "bài viết",
			post: "Hello everybody"
		},
		{
			user: "Nguyễn Nhật Anh",
			photoUrl: null,
			action: "thích",
			type: "bài viết",
			post: "Hello everybody"
		}
	]

	return (
		<div className="notifications">
			<h3>Thông báo</h3>
			<div className="popupHeader">
				{data.map((item) =>
					<Button
						startIcon={
							<Avatar
								alt={item.user}
								src={item.photoUrl || AVT}
								sx={{ width: 30, height: 30 }}
							/>
						}
						style={{
							textTransform: "none",
							color: "black",
							display: "flex",
							justifyContent: "flex-start",
							textAlign: "left"
						}}
					>
						<div>
							<span style={{ fontWeight: "bold", }}>{item.user} </span>
							đã {item.action} {item.type}
							<span style={{ fontWeight: "bold" }}> "{item.post}" </span>
							của bạn
						</div>
					</Button>)}
			</div>
		</div>
	);
}