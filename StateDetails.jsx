// StateDetails.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
    
];

const StateDetails = () => {
  const [search, setSearch] = useState('');
  const [filteredStates, setFilteredStates] = useState(states);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setFilteredStates(
      states.filter(state => state.toLowerCase().includes(query))
    );
  };

  return (
    <div className="container pt-5">
      <h1 className="display-4">Indian States</h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search states..."
          className="form-control"
        />
      </div>
      <div className="row">
        {filteredStates.map((state, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <Link to={`/state/${state}`} className="btn btn-outline-primary btn-block">
              {state}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateDetails;
