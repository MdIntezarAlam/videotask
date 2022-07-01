import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_PATHS } from "../utils/constants";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import user from "../styles/user.css";
import video_1 from "../video/video_1.mp4";
import video_2 from "../video/video_2.mp4";
import b from "../video/b.mp4";
import c from "../video/c.mp4";

const styles = makeStyles((theme) => ({
  heading: {
    marginRight: "auto",
  },
  appbar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function Appbars() {
  const classes = styles();
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!loggedInUser) {
      navigate(PAGE_PATHS.login);
    }
  }, []);

  if (!loggedInUser) {
    return <p></p>;
  }

  return (
    <div className="reg_container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.heading}>
            Dashboard
          </Typography>
          <Link to={"/register"}>
            <Button
              style={{
                color: "#fff ",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              Register
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button
              style={{
                color: "#fff",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>


      <div className="containers">
        <p className="reg_success">Welcome {loggedInUser.name}</p>
        <div className="div1">
          <div className="div_1">
            <video
              src={video_1}
              className="div_1_video"
              controls
              muted
            />
          </div>
          <div className="div_2">
            <video src={b} className="div_1_video" controls muted />
          </div>
          <div className="div_3">
            <video src={video_1} className="div_1_video" controls muted />
          </div>
          <div className="div_4">
            <video src={c} className="div_1_video" controls muted />
          </div>
          <div className="div_5">
            <video src={video_1} className="div_1_video" controls muted />
          </div>
        </div>
        <div className="div1">
          <div className="div_2">
            <video src={video_2} className="div_1_video" controls muted />
          </div>
          <div className="div_3">
            <video src={video_1} className="div_1_video" controls muted />
          </div>
          <div className="div_4">
            <video src={b} className="div_1_video" controls muted />
          </div>
          <div className="div_5">
            <video src={video_1} className="div_1_video" controls muted />
          </div>
          <div className="div_5">
            <video src={c} className="div_1_video" controls muted />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Appbars;
