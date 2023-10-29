import React from "react";
import { useState } from "react";
import profiles from "../assets/data.js"

export default function boxes() {
  return (
    <div className="profile-grid">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-box">
          <img className = "profile-image" src={profile.imageUrl} alt={profile.name} />
          <h3 className = "profile-name">{profile.name}</h3>
          <p className =".profile-description">{profile.description}</p>
        </div>
      ))}
    </div>
  );
}
