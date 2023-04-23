
import { data } from "../data";
import React from "react";
import { useContextS } from '@/store/context/AllContext';
import CardProductGrid from '@/components/card/CardProductGrid';
import HeroCarousel from "@/components/heroCarousel/heroCarousel";

export default function Home() {
let {  allProducts  } =  useContextS();
  return (
    <>
     <HeroCarousel data={data.banner}/>
        <div className=" p-3 text-left mb-3 mt-3">
          <h5 className="m-0 fw-bold">Recent Products</h5 > 
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

