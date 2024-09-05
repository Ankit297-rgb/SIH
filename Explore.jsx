import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <div className="container pt-5">
      <h1 className="display-4">Explore</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card text-center p-4">
            <Link to="/statedetails" className="btn btn-outline-primary">
              View State Details
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center p-4">
            <Link to="/vrexperience" className="btn btn-outline-primary">
              View VR Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
