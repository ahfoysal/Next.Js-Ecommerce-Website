import Image from 'next/image'
import { Laptop, Headset, Phone, Tv, Display, Hdd, UpcScan, Tools } from 'react-bootstrap-icons';
import { data } from "../data";
import React from "react";
import Link from 'next/link';
import Support from "../components/Support";
import Banner from "../components/carousel/Banner";
import Carousel from "../components/carousel/Carousel";
import CardIcon from "../components/card/CardIcon";
import CardLogin from "../components/card/CardLogin";
import CardImage from "../components/card/CardImage";
import CardDealsOfTheDay from "../components/card/CardDealsOfTheDay";
import { useEffect } from 'react';
import axios from 'axios';
import { parseCookies, setCookie  } from 'nookies';
import { useContextS } from '@/store/context/AllContext';
import CardProductGrid from '@/components/card/CardProductGrid';

export default function Home() {
// console.log(data)
const iconProducts = data.iconProducts;
let {  allProducts  } =  useContextS();




  const rows = [...Array(Math.ceil(iconProducts.length / 4))];
  // chunk the products into the array of rows
  const productRows = rows.map((row, idx) =>
    iconProducts.slice(idx * 4, idx * 4 + 4)
  );
  // map the rows as div.row
  const carouselContent = productRows.map((row, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <div className="row g-3">
        {row.map((product, idx) => {
        
          return (
            <div key={idx} className="col-md-3">
              <CardIcon
                title={product.title}
                text={product.text}
                tips={product.tips}
                href={product.to}
              >
                <Laptop className={product.cssClass} width={80} height={80} />
              </CardIcon>
            </div>
          );
        })}
      </div>
    </div>
  ));

  

  return (
    <>
     <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
      <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-9">
              {/* <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel> */}
              {/* <Support /> */}
            </div>
            <div className="col-md-3">
              {/* <CardLogin className="mb-3" /> */}
              {/* <CardImage src="/images/banner/Watches.webp" href="promo" /> */}
            </div>
          </div>
        </div>
        {/* <div className="container-fluid bg-light mb-3">
          <div className="row">
            <div className="col-md-12">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Deals of the Day"
                href="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div> */}

        <div className="bg-info bg-gradient p-3 text-left mb-3">
          <h5 className="m-0">Recent Products</h5 > 
        </div>
        <div className="container-fluid">
          <div className="row g-3">
         
           {allProducts?.map((product, index) => {
        return (
          <div key={index} className="col-md-2">
            <CardProductGrid data={product} />
          </div>
        );
      })}
          
          </div>
        </div>
      
     
    </>
  )
}

