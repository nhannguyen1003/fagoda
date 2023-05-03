import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import Background from "assets/SignIn/SignIn.png";
import Logo from "assets/Header/logo.png";
import { useNavigate } from "react-router-dom";
import { signIn } from "helpers/firebase/auth";

const useStyles = makeStyles(() => ({
	container: {
		height: "100vh",
		width: "100vw",
		display: "grid",
		gridTemplateColumns: "50% 49% 1%",
		gridGap: "1rem",
		overflow: "hidden",
	},
	image: {
		position: "relative",
		height: "100%",
		width: "100%",
	},
	logo: {
		height: "100px",
		top: "150px",
	},
	signInBox: {
		padding: "1rem",
	},
	signInTitle: {
		paddingLeft: "1rem",
		padding: "2rem",
		fontSize: "30px",
		fontWeight: "800",
		alignItems: "center",
	},
	signUpPage: {
		display: "flex",
	},
	question: {
		padding: "1rem",
		fontSize: "14px",
		fontWeight: "500",
		alignItems: "center",
	},
	signUpText: {
		padding: "1rem",
		color: "#144EC7",
		fontSize: "14px",
		fontWeight: "500",
		alignItems: "center",
	},
	usernameText: {
		padding: "1rem",
		fontSize: "14px",
		fontWeight: "600",
		alignItems: "center",
	},
	passwordText: {
		padding: "1rem",
		fontSize: "14px",
		fontWeight: "600",
		alignItems: "center",
	},
	rememberMeBox: {
		display: "flex",
		gap: "10px",
	},
	rememberMeContainer: {
		display: "grid",
		gridTemplateColumns: "80% 20%",
		padding: "2rem",
	},
	rememberMeText: {
		fontSize: "14px",
		fontWeight: "400",
		alignItems: "center",
	},
	forgetPassword: {
		fontSize: "14px",
		fontWeight: "500",
		alignItems: "center",
		color: "#144EC7",
	},
	submitBox: {
		textTransform: "none",
	},
}));

export const SignIn = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const [data, setData] = useState({ email: "", password: "" });

	return (
		<div className={styles.container}>
			<img src={Background} className={styles.image} alt="" />
			<div className={styles.signInBox}>
				<img src={Logo} className={styles.logo} alt="" />
				<div className={styles.signInTitle}>Đăng nhập</div>
				<div className={styles.signUpPage}>
					<div className={styles.question}>Chưa có tài khoản?</div>
					<Button style={{
						padding: "1rem",
						color: "#144EC7",
						fontSize: "14px",
						fontWeight: "500",
						alignItems: "center",
						textTransform: "none",
						textDecorationLine: "underline",
					}} onClick={() => navigate("/signup")}>
						Đăng ký tại đây
					</Button>
				</div>
				<div className={styles.usernameText}>Tài khoản</div>
				<TextField
					fullWidth
					label="Email hoặc Số điện thoại"
					id="Email hoặc Số điện thoại"
					value={data.email}
					onChange={(event) => setData({ ...data, email: event.target.value })}
				/>
				<div className={styles.passwordText}>Mật khẩu</div>
				<TextField
					fullWidth
					label="Mật khẩu"
					id="Mật khẩu"
					type="password"
					value={data.password}
					onChange={(event) =>
						setData({ ...data, password: event.target.value })
					}
					onKeyDown={(event) => {
						if (event.keyCode === 13)
							signIn(data).then((user) => {
								if (user.email === "admin@fagoda.com") navigate("/admin");
								else navigate("/home");
							})
					}}
				/>
				<div className={styles.rememberMeContainer}>
					<div className={styles.rememberMeBox}>
						<input type="checkbox" id="rememberMe"></input>
						<label for="rememberMe" className={styles.rememberMeText}>
							Nhớ tài khoản
						</label>
					</div>
					<div className={styles.forgetPassword}>Quên mật khẩu</div>
				</div>
				<Button
					fullWidth
					variant="contained"
					style={{
						padding: "1rem",
						backgroundColor: "#2984FF",
						textTransform: "none",
					}}
					onClick={() =>
						signIn(data).then((user) => {
							if (user.email === "admin@fagoda.com") navigate("/admin");
							else navigate("/home");
						})
					}
				>
					Đăng nhập
				</Button>
			</div>
		</div>
	);
};
