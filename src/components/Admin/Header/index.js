import React, {} from "react";
import { makeStyles } from "@mui/styles";

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles(() => ({
  container: {
    position: "sticky",
    width: "100%",
    height: "50px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  iconContainer: {
    float: "right",
    margin: "10px",
    height: "100%",
  },
}));

const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img className={styles.logo}  alt='Fagoda'/>
      <div className={styles.iconContainer}>
        <SettingsIcon className={styles.icon}/>
        <LogoutIcon className={styles.icon}/>
      </div>
    </div>
  );
};

export default Header;