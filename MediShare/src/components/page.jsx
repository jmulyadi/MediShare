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
          <div key={index} className="guy-box">
              <img
                key={index}
                className="guy-pic"
                src={profile.imageUrl}
                alt={profile.name}
              />
            <h3 className="guy">{profile.name}</h3>
            <p className="guy">{profile.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Page;
