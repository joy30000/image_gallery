import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

//----------to fetch image from api----------
function FetchImages() {
  const [photo, setMyPhoto] = useState([]);

  axios.get("https://api.slingacademy.com/v1/sample-data/photos");
  async function add() {
    axios
      .get("https://api.slingacademy.com/v1/sample-data/photos?limit=20")
      .then((response) => {
        setMyPhoto(response.data.photos);
      });
  }

  //--------to load image on first load------------
  useEffect(() => {
    add();
  }, []);

  return (
    <>
 {/*------------ image cards -----------------------   */}
      <div className="container">
        <div className="row">
          {photo.map((value, index) => {
            return (
              <div className="col-4">
                <Link to={`/home/${value.id}`}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={value.url}
                      key={value.id}
                      className="card-img-top"
                      alt="photo"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchImages;
