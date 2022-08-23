import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "../InputOptions/InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscritionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Posts/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a Post" />
            <button type="submit"></button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOptions Icon={SubscritionIcon} title="Video" color="#e7a33e" />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* Posts */}
      <Post
        photoUrl="../img/fotoMinha.jpg"
        name="Augusto Cesar"
        description="This is a text"
      />
    </div>
  );
}

export default Feed;
