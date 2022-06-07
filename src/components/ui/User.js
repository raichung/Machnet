import React from "react";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { 
    avatar_url, 
    login, 
    id, 
    email, 
    location, 
    company, 
    twitter,
    website,
    bio } = user;
  return (
    <div className="user">
      <div className="image">
        <img src={avatar_url} alt={login} />
      </div>
      <div className="user-info">
        <h3>{login}</h3>
        <small>{id}</small>
        <h3>{email}</h3>
        <h3>{location}</h3>
        <h3>{company}</h3>
        <h3>{twitter}</h3>
        <h3>{website}</h3>
        <h3>{bio}</h3>
        <Link to={`/user/${login}`}>View profile</Link>
      </div>
    </div>
  );
};

export default User;
