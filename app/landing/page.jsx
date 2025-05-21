import React from "react";
import Image from "next/image";
import colors from "../lab/colors"; 

export default function ClickViewLanding() {
  return (
    <div className="px-6 md:px-20 py-10 font-sans ">

       <section className="flex flex-col md:flex-row w-[1188px] h-[300px] items-center px-6 md:px-10 py-7 justify-center ">
      
      <div className="max-w-[406px] flex flex-col justify-between mt-10">
        <h1 className="  text-3xl font-bold font-Poppins text-black "  >
       Ace Every <br/>Interview with <br/>ClickView
        </h1>
        <p className= " w-[250px] text-black text-sm mb-7 mt-3 font-Poppins">
          your AI-powered personal interviewer <br/>
          practice, improve, and land your dream<br/> job with confidence. </p>

        <div className="flex flex-col gap-4 justify-center ">
          <button className="px-6 py-3 rounded-md cursor-pointer font-Poppins "
          style={{backgroundColor:colors.secondary,color:colors.text.muted}}>
            Start Practicing Free
          </button>
          <button className="border-2 border-black font-Poppins px-6 py-3 rounded-md cursor-pointer "
           style={{color:colors.primary}}> 
            Watch a Demo
          </button>
        </div>
      </div>

      <div className=" flex justify-center items-center mt-10 ml-40">
            <Image src="/image1.svg" width={450} height={450} alt="logo"   />
      </div>
    
    </section>

      <section className="text-center mb-16 mt-30 justify-center">
        <h2 className="text-3xl font-bold font-heading mb-10"
        style={{color:colors.primary}}>How It Works</h2>
        

       <div className="grid md:grid-cols-2 gap-10 justify-center max-w-5xl mx-auto px-4">
       <div className="flex gap-4">
    <Image src="/smart.svg" width={80} height={80} alt="logo" />
    <div>
      <h3 className="font-Poppins font-bold mb-3" style={{color:colors.primary}}>
        Smart Questions Generator
      </h3>
      <p className="text-black text-xs">
        Train with tailored questions based on your industry and experience.
        Whether you're speaking or typing, the AI adapts to your level in real time.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <Image src="/on-point.svg" width={90} height={90} alt="logo" />
    <div>
      <h3 className="font-Poppins font-bold mb-3" style={{color:colors.primary}}>
        On-point Feedback
      </h3>
      <p className="text-black text-xs">
        After every voice or text interview, get an instant breakdown of your performance — from
        response accuracy to timing.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <Image src="/track.svg" width={80} height={80} alt="logo" />
    <div>
      <h3 className="font-Poppins font-bold mb-3" style={{color:colors.primary}}>
        Track Your Feedback
      </h3>
      <p className="text-black text-xs">
        Review your past interviews and track your progress over time. See what
        you've improved on and what needs more focus.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <Image src="/res.svg" width={80} height={80} alt="logo" />
    <div>
      <h3 className="font-Poppins font-bold mb-3" style={{color:colors.primary}}>
        See Your Results After Each Interview
      </h3>
      <p className="text-black text-xs">
        Review your past interviews and track your growth over time. See where you've
        improved and what to focus on next — all in one place.
      </p>
    </div>
  </div>
</div>
      </section>
      <section className="bg-neutral-100 py-10 px-6 rounded-lg mb-9 justify-center ">
        <div className="grid md:grid-cols-3 gap-6 text-sm " style={{color:colors.primary}}>
          <div>
            <p>“ClickView’s feedback is precise and helps me improve fast, making me feel much more confident<br/> in interviews.”</p>
            <p className="font-Poppins font-bold mt-3">- Sarah James, Marketing Manager</p>
          </div>
          <div>
            <p>“I’ve never felt more confident in an interview. The tailored questions and progress tracking keep me on the right track.”</p>
            <p className="font-semibold mt-3">– Michael Lee, Software Developer</p>
          </div>
          <div>
            <p>“This app has changed the way I approach interviews. The AI-driven feedback is incredibly accurate and easy to follow.”</p>
            <p className="font-semibold mt-3">– Jessica Roberts, HR Specialist</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center" style={{color:colors.primary}}>
        <h2 className="text-4xl font-bold mb-4">Ready to impress your next interviewer?</h2>
        <p className=" mb-6">
          Join thousands already using ClickView to practice <br/> smarter and interview better.
        </p>
         <button className="px-6 py-3 rounded-md cursor-pointer font-Poppins "
          style={{backgroundColor:colors.secondary,color:colors.text.muted}}>
            Start Your Free Mock Interview
          </button>
      </section>
    </div>
  );
}

