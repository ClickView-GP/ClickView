'use client'
import colors from '@/app/lab/colors';
import Image from 'next/image';
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};
  if (!formData.firstName) newErrors.firstName = "First name is required.";
  if (!formData.lastName) newErrors.lastName = "Last name is required.";
  if (!formData.email) newErrors.email = "Email is required.";
  if (!formData.password) newErrors.password = "Password is required.";
  else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters.";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  try {
    const response = await fetch("http://localhost:5133/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to register");
    }

    const data = await response.json();
    console.log("API Response:", data);

    if (data.message === "User registered successfully") {
      setSubmitted(true);
      // Optionally reset form:
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } else {
      alert("Something went wrong!");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
       <Image src="/logo2.svg" width={80} height={80} alt="logo"  className="absolute top-0 left-0 m-4" />
      <div className="max-w-sm w-full space-y-2">
        <div className="text-center flex flex-col items-center justify-center space-y-2 mt-5">
          <Image src="/logo1.svg" width={180} height={180} alt="logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-xl font-medium mb-5 text-black">Register</h2>
            {/*<p className="text-gray-700 ">Join the community today!</p>*/}
          </div>

          <div className="space-y-4">
            
           <div className="grid grid-cols-2 gap-4">
  <div>
    <input
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-500 rounded-xl placeholder-gray-400 text-gray-800
        hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
    />
    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
  </div>
  <div>
    <input
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-500 rounded-xl placeholder-gray-400 text-gray-800
       hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
    />
    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
  </div>
</div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-500 rounded-xl placeholder-gray-400 text-gray-800
                 hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-500 rounded-xl placeholder-gray-400 text-gray-800
                  hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            
            <button
              type="submit"
              className="w-full  py-3 rounded-xl font-Poppins text-center  cursor-pointer"  
               style={{backgroundColor:colors.secondary,color:colors.text.muted}}
            >
              Sign Up
            </button>

            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            
            <button
              type="button"
              className="w-full flex items-center justify-start gap-3 border border-gray-300 py-3 px-4
                rounded-xl hover:bg-gray-50 transition bg-white text-gray-700"
              onClick={() => alert("Google sign-in not yet implemented")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9.81818V14.4654H18.4581C18.1746 15.96 17.3235 17.2255 16.0472 18.0764L19.9417 21.0982C22.2108 19.0037 23.5199 15.9274 23.5199 12.2728C23.5199 11.4219 23.4436 10.6037 23.3017 9.81831L12 9.81818Z" fill="#4285F4"/>
                <path d="M5.2746 14.2841L4.39624 14.9564L1.28711 17.3782C3.26164 21.2945 7.3086 24 11.9995 24C15.2394 24 17.9557 22.9309 19.9412 21.0982L16.0467 18.0764C14.9776 18.7964 13.6139 19.2328 11.9995 19.2328C8.87949 19.2328 6.22866 17.1274 5.27951 14.291L5.2746 14.2841Z" fill="#34A853"/>
                <path d="M1.28717 6.62177C0.46904 8.23624 0 10.0581 0 11.9999C0 13.9416 0.46904 15.7635 1.28717 17.378C1.28717 17.3888 5.27996 14.2798 5.27996 14.2798C5.03996 13.5598 4.8981 12.7962 4.8981 11.9997C4.8981 11.2033 5.03996 10.4397 5.27996 9.71969L1.28717 6.62177Z" fill="#FBBC04"/>
                <path d="M11.9997 4.77816C13.767 4.77816 15.3379 5.38905 16.5924 6.56725L20.0287 3.13094C17.9451 1.18916 15.2397 0 11.9997 0C7.30885 0 3.26164 2.69453 1.28711 6.6218L5.27977 9.71998C6.2288 6.88359 8.87973 4.77816 11.9997 4.77816Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

          
            <p className="mt-4 text-center text-sm text-gray-600 mb-7">
              Already on ClickView?{' '}
              <a href="/auth/sign-in" className="text-indigo-700 hover:underline font-medium">
                sign in
              </a>
            </p>
          </div>
        </form>

        
        {submitted && (
          <p className="text-green-600 text-sm text-center">✅ Registration successful! (Mocked)</p>
        )}
      </div>
    </div>
  );
}
