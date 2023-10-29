import React from "react";
import { useState } from "react";
import profiles from "../assets/data.js"

export default function boxes() {
  // const [allDocs, setAllDocs] = useState([]);
  // const db = firebase.firestore();

  // function fetchAll(e) {
  //   e.preventDefault();
  //   db.collection("DoctorInfo")
  //   .get()
  //   .then((snapshot)=>{
  //     if(snapshot.docs.length > 0){
  //       snapshot.docs.forEach((doc) => {
  //         setAllDocs((prev) => {
  //           return[...prev, doc.data()];
  //         })
  //       })
  //     }
  //   })
  // }


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
