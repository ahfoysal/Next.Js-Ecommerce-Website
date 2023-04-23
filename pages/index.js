
import { data } from "../data";
import React from "react";
import { useContextS } from '@/store/context/AllContext';
import CardProductGrid from '@/components/card/CardProductGrid';
import HeroCarousel from "@/components/heroCarousel/heroCarousel";
import CardProductGridPlaceHolder from "@/components/card/CardProductGridPlaceHolder";

export default function Home() {
let {  allProducts  } =  useContextS();
  return (
    <>
     <HeroCarousel data={data.banner}/>
        <div className=" p-3 text-left mb-3 mt-3">
          <h5 className="m-0 fw-bold">Recent Products</h5 > 
        </div>
        <div className="container-fluid">

       {allProducts?.length > 0 ?    <div className="row">
        
           {allProducts?.map((product, index) => {
        return (
          <div key={index} className="col-md-3 col-sm-6 col-xs-6 col-lg-2">
          <CardProductGrid data={product} />
          </div>
        );
      })}
          
          </div> : 
            <div  className="row g-3">
            {Array(12).fill().map((_, index) => (
            <div  key={index} className="col-md-3 col-sm-6 col-xs-6 col-lg-2">
            <CardProductGridPlaceHolder />
              </div>
              ))}
            </div>
          }
        </div>
      
     
    </>
  )
}

