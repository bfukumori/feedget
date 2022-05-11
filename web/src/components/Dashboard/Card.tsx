import { useState } from "react";
import { Feedback } from "../../App";

interface CardProps {
  feedback: Feedback;
}

export function Card({feedback}:CardProps) {
  const [showImg, setShowImg]= useState(false);

  return (
    <>
      <button type="button" className="bg-light-background hover:bg-light-surface_secondary-500 dark:hover:bg-dark-surface_secondary-500 dark:bg-dark-surface_secondary-300 rounded-md min-w-[200px] h-[380px] flex-1 basis-80 p-4 border-t-2 border-brand-300 relative flex flex-col focus:outline-none transition-colors focus:ring-2
      focus:border-none focus:ring-offset-2 focus:focus:ring-offset-light-surface_primary dark:focus:focus:ring-offset-dark-surface_primary  focus:ring-brand-500 shadow-md shadow-light-surface_primary-text_secondary dark:shadow-dark-surface_primary" onClick={()=>setShowImg(!showImg)}>
      {showImg ? <img src={feedback.screenshot} alt="feedback screenshot" className="w-full max-h-full absolute top-0 left-0" onClick={()=>setShowImg(false)}/> : null }
        <h2 className="text-light-text_primary dark:text-dark-text_primary font-medium mb-3 self-center">{feedback.type}</h2>
        <p className="text-light-text_primary dark:text-dark-text_primary text-left">{feedback.comment}</p>
      </button>
    </>
  )
}