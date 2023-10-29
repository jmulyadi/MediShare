import React from "react";
import { useEffect, useState } from "react";
import profiles from "../assets/data.js";
import db from "./firebase.js";
import { onSnapshot, collection } from "firebase/firestore";

export default function boxes() {
  const [info, setInfo] = useState([]);
  const [names, setNames] = useState([]);

  console.log(info);

  useEffect(
    () =>
      onSnapshot(collection(db, "DoctorInfo"), (snapshot) =>
        setInfo(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (   
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-box">
            <a href="/other">
              <img
                key={index}
                className="profile-image"
                src={profile.imageUrl}
                alt={profile.name}
              />
            </a>
            <h3 className="profile-name">{info[index]?.Name || "No Name Available"}</h3>
            <p>{info[index]?.["Phone Number"] || "No Phone Number"}</p>
            <p className=".profile-description">{info[index]?.Specialty || "No Specialty"}</p>
            
          </div>
        ))}
      </div>

  );
}
