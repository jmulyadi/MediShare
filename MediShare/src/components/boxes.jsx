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
          <img className="profile-image" src={profile.imageUrl} alt={info[index]?.Name || profile.name} />
          <h3 className="profile-name">{info[index]?.Name || profile.name}</h3>
          <h4 className="profile-name">{info[index]?.["Phone Number"] || "No Phone Number"}</h4>
          <p className="profile-description">{info[index]?.Specialty || "No Specialty"}</p>
        </div>
      ))}
    </div>
  );
}
