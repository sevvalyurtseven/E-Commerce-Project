import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const SignUp = () => {
    return (
      <div className="flex flex-col justify-center items-center  w-full sm:px-96 px-4 sm:py-20 py-10 ">
        
          <h2 className="font-bold text-2xl text-[#156691]">
            Registration Form
          </h2>
          <RegistrationForm />
        </div>
      
    );
  };
  export default SignUp;