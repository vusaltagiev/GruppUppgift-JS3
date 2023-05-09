import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

function searchButton() {
  const [isActive, setIsActive] = useState(false);

  function toggleSearch() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <div className={`search ${isActive ? 'active' : ''}`}>
        <CiSearch onClick={toggleSearch} className="icon"/>
            <div className="input">
                <input type='text' placeholder='Search' id="mySearch"></input>
            </div>
        </div>
    </div>
  );
}

export default searchButton