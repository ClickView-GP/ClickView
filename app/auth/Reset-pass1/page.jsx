import React from 'react'
import colors from '../../lab/colors';
import Image from 'next/image';
import Link from 'next/link';

 export default function ResetPassword() {
  return (
   <div className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor:colors.background}}>

     <Image src="/logo2.svg" width={80} height={80} alt="logo"  className="absolute top-0 left-0 m-4" />

       <div className="max-w-sm w-full space-y-2">

          <div className="flex flex-col items-center justify-center ">
            <Image src="/logo1.svg" width={200} height={200} alt="logo" className='mt-1' />
          </div>

         <div className='font-Poppins text-center ' style={{color:colors.primary}}>
          <h2 className="text-xl mb-5">Reset Password</h2>
          <p className="text-sm mb-8">Enter the email you want to reset</p>
         </div>

          <div  className="w-full max-w-100 mx-auto mb-10">
               <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-500 rounded-xl placeholder-gray-400 text-gray-800
                  hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
              />
           </div>
                 
         <div  className="w-full max-w-80 mx-auto">
           <Link href="/">
             <button
              type="submit"
              className="w-full py-3 rounded-xl font-Poppins text-center cursor-pointer"
             style={{backgroundColor:colors.secondary,color:colors.text.muted}}
            >
              Continue
            </button>
            </Link>
            </div>
      </div>
    </div>
  );
}
