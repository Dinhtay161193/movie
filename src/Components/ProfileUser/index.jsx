import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import avatar from "../../assets/avatar.jpg";
import "./style.scss";
export default function ProfileUser() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: 224,
    },
    tabs: {
      textAlign: "left",
      borderRight: `1px solid ${theme.palette.divider}`,
      marginTop: "20px",
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = localStorage.getItem("userLogin");
  const user1 = JSON.parse(user);

  return (
    <div className="infomation">
      <div className="courses__title">
        <div className="courses__title__content">
          <h3> Thông Tin Cá Nhân</h3>
          <span>Trang Chủ/ Thông Tin Cá Nhân</span>
        </div>
      </div>
      <div className="infomation__content">
        <div className="infomation__content__right">
          <div className="infomation__content__right--img">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="infomation__content__right--name">
            <h6>{user1.hoTen}</h6>
            <p>Front-end Developer</p>
          </div>
          <div className="infomation__content__right--title">
            <span
              style={{
                border: "1px solid none",
                borderRadius: " 19px",
                padding: "5px 11px",
                color: "white",
                fontSize: "18px",
                background: "#0f7c90",
                boxShadow: "0px 1px 5px",
              }}
            >
              Thông Tin
            </span>
          </div>

          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              style={{
                outline: "none",
                textTransform: "capitalize",
              }}
              label="Khóa Học"
              {...a11yProps(0)}
            />
            <Tab
              style={{ outline: "none", textTransform: "capitalize" }}
              label="Sửa Tài Khoản"
              {...a11yProps(1)}
            />
            <Tab
              style={{
                outline: "none",
                textTransform: "capitalize",
              }}
              label="Tài Khoản"
              {...a11yProps(2)}
            />
          </Tabs>
        </div>
        <div className="infomation__content__left">
          <TabPanel value={value} index={0}>
            <h3> Khóa Học Đăng Kí</h3>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3>Thông Tin Cá Nhân</h3>
            <p>Email: {user1.email}</p>
            <p>Số Điện Thoại: {user1.soDT}</p>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
