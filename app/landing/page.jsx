import React from "react";
import Image from "next/image";
import colors from "../lab/colors"; 

export default function ClickViewLanding() {
  return (
     <div className="min-h-screen px-2 md:px-16 lg:px-20 font-Poppins">
      
      <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-3 md:py-3 gap-6 md:gap-10">
        <div className="max-w-md flex flex-col justify-between mr-20   ">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Ace Every <br/>Interview with <br/>ClickView
          </h1>
          <p className="w-full text-black text-sm my-4">
            your AI-powered personal interviewer <br/>
            practice, improve, and land your dream<br/> job with confidence.
          </p>

          <div className="flex flex-col gap-3">
            <button 
              className="px-6 py-2.5 rounded-md cursor-pointer w-full md:w-auto"
              style={{backgroundColor: colors.secondary, color: colors.text.muted}}
            >
              Start Practicing Free
            </button>
            <button 
              className="border-2 border-black px-6 py-2.5 rounded-md cursor-pointer w-full md:w-auto"
              style={{color: colors.primary}}
            > 
              Watch a Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-auto">
          <Image 
            src="/image1.svg" 
            width={450} 
            height={450} 
            alt="hero illustration" 
            className="w-full max-w-md "
            priority
          />
        </div>
      </section>

    
      <section className="text-center my-3 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold " style={{color: colors.primary}}>
          How It Works
        </h2>
      
        <div className="grid md:grid-cols-2 gap-10 px-4 mt-20">
          <div className="flex gap-4 text-left">
            <Image src="/smart.svg" width={80} height={80} alt="Smart Questions" />
            <div>
              <h3 className="font-bold mb-3" style={{color: colors.primary}}>
                Smart Questions Generator
              </h3>
              <p className="text-black text-xs">
                Train with tailored questions based on your industry and experience.
                Whether you're speaking or typing, the AI adapts to your level in real time.
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-left">
            <Image src="/on-point.svg" width={90} height={90} alt="On-point Feedback" />
            <div>
              <h3 className="font-bold mb-3" style={{color: colors.primary}}>
                On-point Feedback
              </h3>
              <p className="text-black text-xs">
                After every voice or text interview, get an instant breakdown of your performance — from
                response accuracy to timing.
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-left">
            <Image src="/track.svg" width={80} height={80} alt="Track Progress" />
            <div>
              <h3 className="font-bold mb-3" style={{color: colors.primary}}>
                Track Your Feedback
              </h3>
              <p className="text-black text-xs">
                Review your past interviews and track your progress over time. See what
                you've improved on and what needs more focus.
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-left">
            <Image src="/res.svg" width={80} height={80} alt="Results" />
            <div>
              <h3 className="font-bold mb-3" style={{color: colors.primary}}>
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

      <section 
        className="py-10 px-6 rounded-lg my-10 max-w-6xl mx-auto" 
        style={{backgroundColor: '#E0E7FF'}}
      >
        <div className="grid md:grid-cols-3 gap-6 text-sm" style={{color: colors.primary}}>
          <div className="text-left">
            <p>“ClickView’s feedback is precise and helps me improve fast, making me feel much more confident in interviews.”</p>
            <p className="font-bold mt-3">- Sarah James, Marketing Manager</p>
          </div>
          <div className="text-left">
            <p>“I’ve never felt more confident in an interview. The tailored questions and progress tracking keep me on the right track.”</p>
            <p className="font-bold mt-3">– Michael Lee, Software Developer</p>
          </div>
          <div className="text-left">
            <p>“This app has changed the way I approach interviews. The AI-driven feedback is incredibly accurate and easy to follow.”</p>
            <p className="font-bold mt-3">– Jessica Roberts, HR Specialist</p>
          </div>
        </div>
      </section>

      <section className="text-center max-w-6xl mx-auto" style={{color: colors.primary}}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to impress your next interviewer?</h2>
        <p className="mb-6">
          Join thousands already using ClickView to practice <br/> smarter and interview better.
        </p>
        <button 
          className="px-6 py-3  mb-10 rounded-md cursor-pointer"
          style={{backgroundColor: colors.secondary, color: colors.text.muted}}
        >
          Start Your Free Mock Interview
        </button>
      </section>
    </div>
  );
}

