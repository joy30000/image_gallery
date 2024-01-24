import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./downloadImage.css";

//--------to fetch image and it details on clik on image thumbnail-------------------
function Home() {
  const [image, setImage] = useState([]);
  const { id } = useParams();
  console.log(id);
  async function load() {
    axios
      .get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
      .then((response) => {
        setImage(response.data.photo);
      });
  }
  useEffect(() => {
    load();
  }, []);

  return (
    <>
    {/*---------------- card of larger view of image-------------------- */}
      <Link to={"/"}>Home</Link>

      <div className="card-large-view">
        <img src={image.url} className="image-large-view" alt="photo" />
        <div className="right-section">
          <h2>{image.title}</h2>
          <h4>{image.description}</h4>
        </div>
      </div>
    </>
  );
}

export default Home;
