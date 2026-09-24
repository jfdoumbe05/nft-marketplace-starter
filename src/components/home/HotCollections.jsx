import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotCollections = () => {
  const [hotCollections, setHotCollections] = useState([]);
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
};

 useEffect(() => {
  fetch("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
    .then((res) => res.json())
    .then((data) => {
      console.log("HOT COLLECTIONS DATA:", data);
      setHotCollections(data);
    });
}, []);

  return (
   <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="text-center">
        <h2>Hot Collections</h2>
        <div className="small-border bg-color-2"></div>
      </div>
    </div>
  </div>

  <Slider {...settings}>
    {hotCollections.map((collection) => ( 
 
            <div key={collection.id}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={collection.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                  <img className="pp-coll" src={collection.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                  <h4>{collection.title}</h4>
                  </Link>
                  <span>ERC-{collection.code}</span>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div> 
  );
};

export default HotCollections;
