import React from "react";
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const post = () => {
  return (
    <div className="post">
      <div className="post__header">
        {/* header > avatar + username  */}
      <Avatar
        className="post__avatar"
        alt="Sarirkarim"
        src="/static/images/avatar/1.jpg"
      />
      <h3>username</h3>
      </div>
      {/* image */}
      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />
      {/* username + caption  */}
      <h4 className="post__text"><strong>sarirkarim07</strong>user caption </h4>
    </div>
  );
};

export default post;
