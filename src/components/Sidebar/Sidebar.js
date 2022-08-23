import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar({ avatar }) {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="../img/backgroundImage.jpg" alt="backgroundImage" />
        <Avatar className="sidebar_avatar" src={avatar} />
        <h2>Augusto Cesar</h2>
        <h4>augustocesarrezende64@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2,400</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Developer")}
        {recentItem("ReactJs")}
        {recentItem("Software")}
        {recentItem("Front-End")}
      </div>
    </div>
  );
}

export default Sidebar;
