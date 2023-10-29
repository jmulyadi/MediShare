import React from "react";
import { useEffect, useState } from "react";
import profiles from "../assets/data.js";
import db from "./firebase.js";
import { onSnapshot, collection } from "firebase/firestore";
import Page from "./page"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "../App.jsx"

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
    <Router>
      <div className="profile-grid">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-box">
          <img className="profile-image" src={profile.imageUrl} alt={info[index]?.Name || "No Image"} />
          <h3 className="profile-name">{info[index]?.Name || "Loading Name"}</h3>
          <h4 className="profile-name">{info[index]?.["Phone Number"] || "No Phone Number"}</h4>
          <p className="profile-description">{info[index]?.Specialty || "No Specialty"}</p>
          <Link to = "/page">
            <img 
              key = {index}
              className="profile-image"
              src={profile.imageUrl}
              alt={profile.name}
            />
          </Link>
          <h3 className="profile-name">{profile.name}</h3>
          <p className=".profile-description">{profile.description}</p>
        <Route path = "/page" component = {Page}/>
        <Route path="/"  component={Home} />
        </div>
      ))}
    </div>
    </Router>
  );
}
