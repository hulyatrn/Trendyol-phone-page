import React from "react";
// import { useState, useEffect } from 'react';
import products from "../data/db.json";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiTrendingDown } from "react-icons/bi";

function Product() {
  // const [posts, setPosts] = useState();

  // useEffect(() => {
  // axios.get("http://localhost:7000/phone").then((data) => {
  //   console.log(data);
  //   setPosts(data);
  // });
  //   fetch("http://localhost:7000/phone")
  //   .then(res=>{
  //       return res.json();
  //   })
  //   .then(data=>{
  //       console.log((data))
  //       setPosts(data)
  //   })
  // }, []);

  return (
    <div className="product-cntr-wpr">
      {products.map((product) => (
        <div key={product.id} className="product-card-border">
          <div className="image-overlay">
            <div className="image-overlay-header">
              <div className="upper-left">
                <img src="https://cdn.dsmcdn.com/indexing-sticker-stamp/moon/e68c3d96-a877-4e49-923b-ca420419ab40.png" />
                <div className="fvr-btn-wrp">
                  <MdFavoriteBorder className="fvr-icon" />
                </div>
              </div>
            </div>
            <div className="image-overlay-body">
              <img src={product.image} alt="" />
            </div>
            <div className="product-title">
              <span className="product-name">{product.name}</span>
              <span className="product-text">{product.text}</span>
            </div>
            <div className="rating-container">
              <div className="ratings">
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
                <AiFillStar className="star-icon" />
              </div>
              <img src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png" />
            </div>
            <div className="low-price">
              <BiTrendingDown className="trending-down-icon" />
              <span>Son 14 günün en düşük fiyatı!</span>
            </div>
            <div className="prc-cntr-price">
              <div className="prc-box">{product.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
