import { Avatar, Button } from "@mui/material";
import React from "react";
import AVT from "assets/Home/RightTab/avatar.png";

export const Messages = () => {
	const data = [
		{
			user: "Nguyễn Nhật Anh",
			sender: "Nguyễn Nhật Anh",
			photoUrl: null,
			content: "Chào Hùng"
		},
		{
			user: "Nguyễn Xuân Mạnh",
			sender: "Nguyễn Hoàng Bảo Hùng",
			photoUrl: null,
			content: "Chào Mạnh"
		},
		{
			user: "Bùi Nguyễn Gia Huy",
			sender: "Bùi Nguyễn Gia Huy",
			photoUrl: null,
			content: "Chào đồng chí nhá"
		}
	]

	return (
		<div className="notifications">
			<h3>Tin nhắn</h3>
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
							<span style={{ fontWeight: "bold", }}>{item.user}</span><br />
							{item.sender !== item.user ? "Bạn: " : ""}{item.content}
						</div>
					</Button>)}
			</div>
		</div>
	);
}