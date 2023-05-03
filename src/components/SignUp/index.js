import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import Background from "assets/SignUp/SignUp.png";
import Logo from "assets/Header/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { signUp } from "../../helpers/firebase/auth";
// import { SignUpCompany } from "./SignUpCompany";
// import { SignUpPerson } from "./SignUpPerson";

const useStyles = makeStyles(() => ({
	container: {
		height: '100vh',
		width: '100vw',
		display: "grid",
		gridTemplateColumns: "30% 69% 1%",
		gridGap: "1rem",
		overflow: "hidden",
	},
	image: {
		position: "relative",
		height: "100%",
		width: "100%",

	},
	logoContainer: {
		display: "grid",
		gridTemplateColumns: "80% 20%",
	},
	logo: {
		height: "100px",
	},
	userType: {
		padding: "1rem",
		paddingTop: "3rem",
		color: "#144EC7",
		fontSize: "14px",
		fontWeight: "500",
		alignItems: "center",
		textDecorationLine: "underline",
	},
	signUpBox: {
		padding: "1rem",
	},
	signUpTitle: {
		paddingLeft: "1rem",
		padding: "1rem",
		fontSize: "25px",
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
	signInText: {
		padding: "1rem",
		color: "#144EC7",
		fontSize: "14px",
		fontWeight: "500",
		alignItems: "center",
	},
	privacyContainer: {
		display: "flex",
		gap: "10px",
		padding: "2rem",
		alignItems: "center",
		justifyContent: "center",
	},
	formContainer: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gridTemplateRows: "1fr 1fr 1fr",
		gridGap: "1rem",
	},
	formBox: {
	},
	formText: {
		padding: "10px",
		fontSize: "14px",
		fontWeight: "600",
		alignItems: "center",
	}
}));

export const SignUp = () => {
	const styles = useStyles();
	const [user, setUser] = useState("cá nhân");
	const [data, setData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
		address: "",
		phone: ""
	})
	const navigate = useNavigate();

	return (

		<div className={styles.container}>
			<img src={Background} className={styles.image} alt="" />
			<div className={styles.signUpBox}>
				<div className={styles.logoContainer}>
					<img src={Logo} className={styles.logo} />
					<Button style={{
						padding: "1rem",
						paddingTop: "3rem",
						color: "#144EC7",
						fontSize: "14px",
						fontWeight: "500",
						alignItems: "center",
						textDecorationLine: "underline",
						textTransform: "none",
					}} onClick={() => user === "cá nhân" ? setUser("doanh nghiệp") : setUser("cá nhân")}>Bạn là {user === "cá nhân" ? "doanh nghiệp" : "cá nhân"}?</Button>
				</div>
				<div className={styles.signUpTitle}>Đăng ký {user}</div>
				<div className={styles.signUpPage}>
					<div className={styles.question}>Đã có tài khoản?</div>
					<Button style={{
						padding: "1rem",
						color: "#144EC7",
						fontSize: "14px",
						fontWeight: "500",
						alignItems: "center",
						textTransform: "none",
						textDecorationLine: "underline",
					}} onClick={() => navigate("/signin")}>Đăng nhập</Button>
				</div>
				<div className={styles.formContainer}>
					<div className={styles.formBox}>
						{user === "cá nhân" ? <div className={styles.formText}>Họ và tên</div> : <div className={styles.formText}>Tên doanh nghiệp</div>}
						<TextField
							fullWidth
							value={data.fullName}
							onChange={(event) => setData({ ...data, fullName: event.target.value })}
						/>
					</div>
					<div className={styles.formBox}>
						<div className={styles.formText}>Địa chỉ</div>
						<TextField
							fullWidth
							value={data.address}
							onChange={(event) => setData({ ...data, address: event.target.value })}
						/>
					</div>
					<div className={styles.formBox}>
						<div className={styles.formText}>Số điện thoại</div>
						<TextField
							fullWidth
							value={data.phone}
							onChange={(event) => setData({ ...data, phone: event.target.value })}
						/>
					</div>
					<div className={styles.formBox}>
						<div className={styles.formText}>Email</div>
						<TextField
							fullWidth
							value={data.email}
							onChange={(event) => setData({ ...data, email: event.target.value })}
						/>
					</div>
					<div className={styles.formBox}>
						<div className={styles.formText}>Mật khẩu</div>
						<TextField
							fullWidth
							type="password"
							value={data.password}
							onChange={(event) => setData({ ...data, password: event.target.value })}
						/>
					</div>
					<div className={styles.formBox}>
						<div className={styles.formText}>Xác nhận mật khẩu</div>
						<TextField
							fullWidth
							type="password"
							value={data.confirmPassword}
							onChange={(event) => setData({ ...data, confirmPassword: event.target.value })}
							onKeyDown={(event) => {
								if (event.keyCode === 13)
									signUp(data, user).then((user) => { if (user) navigate("/home") })
							}}
						/>
					</div>
				</div>
				<div className={styles.privacyContainer}>
					<input type="checkbox" id="privacy"></input>
					<label for="privacy" className={styles.rememberMeText}>Tôi đồng ý với các <span style={{ color: "#144EC7" }}>Điều khoản</span> và <span style={{ color: "#144EC7" }}>Chính sách</span></label>
				</div>
				<Button
					fullWidth
					variant="contained"
					style={{
						padding: "1rem",
						backgroundColor: "#2984FF",
						textTransform: "none",
					}}
					onClick={() => signUp(data, user).then((user) => { if (user) navigate("/home") })}
				>
					Đăng ký
				</Button>
			</div>
		</div>
	);
};
