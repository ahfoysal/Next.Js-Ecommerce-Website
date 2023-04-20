import React from "react";

import { LifePreserverFill,ArrowCounterclockwiseFill, TruckFill  } from 'react-bootstrap-icons';

const CardServices = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
         Service
      </div>
      <div className="card-body">
        
       
        <div className="row pt-3">
          <div className="col-2">
            {/* <TruckFill  /> */}
            
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">7 Day Return</span>
              <p className="text-muted small m-0">Change of mind applicable</p>
            </div>
          </div>
        </div>
        <div className="row border-bottom py-3">
          <div className="col-2">
            {/* <IconLifePreserverFill width={40} height={40} /> */}
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Warranty not available</span>
             
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardServices;
