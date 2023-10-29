import React from "react";
import profiles from "../assets/data.js";
import Navbar from "./navbar.jsx";
function Page() {
  return (
    <div>
      <Navbar />
      {profiles
        .filter((profile, index) => index === 0) // Filter the first item
        .map((profile, index) => (
          <div key={index} className="profile-box">
            <a href="/other">
              <img
                key={index}
                className="profile-image"
                src={profile.imageUrl}
                alt={profile.name}
              />
            </a>
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-description">{profile.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Page;
