import React from 'react';

const Checkout = () => {
  return (
    <div>
      <div>
        <p>Checkout</p>
      </div>
      <div className='flex justify-center items-center'>
        <div>
          <button>log into your account</button>
        </div>
        <div>
          <button>Enter your Code</button>
        </div>
      </div>
      <div>
        <h4>Billing Details</h4>
      </div>
      <div>
        <h4>Order Summary</h4>
      </div>
      
    </div>
  );
};

export default Checkout;