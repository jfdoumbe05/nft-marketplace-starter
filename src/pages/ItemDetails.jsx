import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
  fetch(
    `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`
  )
    .then((res) => res.json())
    .then((data) => {
      setItem(data);
    });
}, [id]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
               {item ? (
  <img
    src={item.nftImage}
    className="img-fluid img-rounded mb-sm-30 nft-image"
    alt=""
  />
) : (
  <Skeleton
    width="100%"
    height="500px"
    borderRadius="8px"
  />
)}
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
  {item?.title || "Rainbow Style"} #{item?.tag || "194"}
</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {item?.views ?? 100}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {item?.likes ?? 74}
                    </div>
                  </div>
                  
                  <p>
  {item?.description ||
    "doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
</p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img className="lazy" src={AuthorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
             <Link to="/author">
  {item?.ownerName || "Lori Hart"}
</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img className="lazy" src={item?.creatorImage || AuthorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">
  {item?.creatorName || "Monica Lucas"}
</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{item?.price ?? 1.85}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
