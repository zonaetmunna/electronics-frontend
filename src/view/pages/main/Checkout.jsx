import React, { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

const Checkout = () => {

  const { handleSubmit, register, reset, control } = useForm();
  const email = useWatch({ control, name: "email" });
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      email !== undefined &&
      email !== ""
      
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className='px-3'>
      <div className='px-5 py-3'>
        <p className='font-bold text-lg text-center'>Checkout</p>
      </div>
      <div className='px-2 py-2'>
        <hr />
      </div>
      
      <div className='flex justify-between items-center'>
        <div>
          <div>
            <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-none'>log into your account</button>
          </div>
          <div>
            <h4>Billing Details</h4>
          </div>
          <div className='w-1/2 grid place-items-center'>
            <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-10'>
              <h1 className='mb-10 font-medium text-2xl'>Sign up</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-3'>

                  <div className='flex flex-col items-start'>
                    <label htmlFor='firstName' className='ml-5'>
                      First Name
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='FirstName'
                      {...register("FirstName")}
                    />
                  </div>

                  <div className='flex flex-col items-start'>
                    <label htmlFor='lastName' className='ml-5'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      {...register("lastName")}
                    />
                  </div>

                  <div className='flex flex-col items-start'>
                    <label htmlFor='email' className='ml-5'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      {...register("email")}
                    />
                  </div>

                  <div className='flex flex-col items-start'>
                    <label htmlFor='phone' className='ml-5'>
                      Phone Number
                    </label>
                    <input
                      type='number'
                      name='phone'
                      id='phone'
                      {...register("phone")}
                    />
                  </div>

                  <div className='flex flex-col items-start'>
                    <div className='flex flex-col w-full max-w-xs'>
                      <label className='mb-3' htmlFor='country'>
                        Country
                      </label>
                      <select name='country' id='country' {...register("country")} required>
                        <option value='bangladesh'>Bangladesh</option>
                        <option value='india'>India</option>
                      </select>
                    </div>
                  </div>

                  <div className='flex flex-col items-start'>
                    <div className='flex flex-col w-full max-w-xs'>
                      <label className='mb-3' htmlFor='city'>
                        Town/City
                      </label>
                      <select name='city' id='city' {...register("city")} required>
                        <option value='Dhaka'>Dhaka</option>
                        <option value='Chittagong'>Chittagong</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className='flex flex-col items-start'>
                    <label htmlFor='postCode' className='ml-5'>
                      Postcode/Zip
                    </label>
                    <input
                      type='number'
                      name='postcode'
                      id='postcode'
                      {...register("postcode")}
                    />
                  </div>

                  <div className='flex flex-col items-start'>
                    <input
                      type='radio'
                      id='billing'
                      value={true}
                      {...register("billing")}
                      required
                    />
                    <label className='ml-2 text-lg' htmlFor='available'>
                      billing Details
                    </label>
                  </div>
                  
                  <div className='!mt-8 '>
                    <button
                      type='submit'
                      className='font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                      disabled={disabled}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <button>Enter your Code</button>
          <div>
            <h4>Order Summary</h4>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default Checkout;