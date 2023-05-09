import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";



function cartModal() {
  const [isActive, setIsActive] = useState(false);

  function toggleCartModal() {
    setIsActive(!isActive);
  }

  return (
    <div className='modalWrapper'>
      <div className={`modal ${isActive ? 'active' : ''}`}>
        <FaShoppingCart onClick={toggleCartModal} className='cart'/>
        <div className='modalContent'></div>
      </div>
    </div>
  );
}

export default cartModal