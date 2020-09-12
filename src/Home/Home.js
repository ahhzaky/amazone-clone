import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* produck id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="34568765"
          title="Think and Grow Rich Deluxe Edition: The Complete Classic Text (Think and Grow Rich Series)"
          price={15.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41ELSxHSgUL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="49538094"
          title="Acer Predator Helios 300 Gaming Laptop"
          price={1199.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UY218_.jpg"
        />
        <Product
          id="76512341"
          title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
          price={283.55}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
        />
        <Product
          id="16654331"
          title="Samsung 860 QVO 1TB Solid State Drive (MZ-76Q1T0) V-NAND, SATA 6Gb/s, Quality and Value Optimized SSD"
          price={109.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31naAKlnBZL._AC_US160_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="98234551"
          title="Samsung 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
          price={379.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/91g-Y1B09EL._AC_UY218_.jpg"
        />
      </div>

      {/* product */}
    </div>
  );
}

export default Home;
