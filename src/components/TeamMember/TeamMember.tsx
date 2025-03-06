"use client";

import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, role, bio, avatar }) => {
  return (
    <div className="team-card mb-20 mr-5 mt-10">
      <div className="team-avatar-container m-2">
        <img src={avatar} alt={name} className="team-avatar" />
      </div>
      <div className="team-info">
        <h4 className="team-name">{name}</h4>
        <p className="team-role">{role}</p>
        <p className="team-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
