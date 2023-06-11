import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/10/Amazon-Great-India-Festival.jpg?fit=1500%2C500&ssl=1"
          alt="bgImage"
        />

        <div className="home-row">
          <Product
            id="111"
            title="Canvaslove Rose Blue Patten Canvas Laptop Shoulder Messenger Bag"
            price={7599}
            image="https://m.media-amazon.com/images/I/91PIqE0sT3L._SX679_.jpg"
          />
          <Product
            id="222"
            title="The Intelligent Investor Rev Ed.: The Definitive Book on Value Investing"
            price={1100}
            image="https://m.media-amazon.com/images/I/919mmNCTaaL.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="000"
            title="Nike Men's Air Jordan 1 Mid Sneaker, Mystic Navy/Mint Foam-white"
            price={19354}
            image="https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-1-mid-554724-092_1.png?v=1659026423"
          />

          <Product
            id="444"
            title="Decdeal Men's Chinlon Mountain Shell Ski Windproof Winter Warm parka Jacket"
            price={3650}
            image="https://m.media-amazon.com/images/I/61MuswtIWqL._SX522_.jpg"
          />
          <Product
            id="555"
            title="Zebronics Zeb-Blitz USB Gaming Ear Headphones with Dolby Atmos, Windows Software"
            price={6790}
            image="https://m.media-amazon.com/images/I/61Wyl9B6XxL._SX522_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="666"
            title="Samsung 123.9cm Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Dual QHD resolution"
            price={59800}
            image="https://img.global.news.samsung.com/global/wp-content/uploads/2021/07/Odyssey_Neo_G9_PR_main1.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="777"
            title="Womier K87 TKL Keyboard, Hot Swappable Mechanical Keyboard"
            price={13100}
            image="https://m.media-amazon.com/images/I/41XqtarIadL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="888"
            title="ASTRIX Monza Series Gaming Chair, Leather Gaming Recliner Rocker"
            price={16785}
            image="https://m.media-amazon.com/images/I/51CBjkb1C3S._SX522_.jpg"
          />
          <Product
            id="999"
            title="Invicta Chronograph Waterproof Men's Smartwatch"
            price={8400}
            image="https://m.media-amazon.com/images/I/61DYkEttnLL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />

          <Product
            id="333"
            title="Kuro Gaming PC RGB - Intel 12th Gen i9 (Alder Lake - 16C/20T) GeForce RTX"
            price={20950}
            image="https://m.media-amazon.com/images/I/41IBDUBlb5L.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
