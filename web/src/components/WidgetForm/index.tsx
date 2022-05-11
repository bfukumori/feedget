import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useEffect, useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccesStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }

  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }

  },
  OTHER: {
    title: ' Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

interface WidgetFormProps {
  onFetchData: () => Promise<void>
}

export function WidgetForm({onFetchData}:WidgetFormProps) {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  useEffect(()=> {
    onFetchData();
  },[feedbackSent])

  return (
    <div className="bg-light-background dark:bg-dark-surface_primary p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     {feedbackSent ? <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} /> : 
      <>
      {!feedbackType ? (
       <FeedbackTypeStep
         onFeedbackTypeChanged={setFeedbackType}
       />
     ) : (
       <FeedbackContentStep
         feedbackType={feedbackType}
         onFeedbackRestartRequested={handleRestartFeedback}
         onFeedbackSent={()=>setFeedbackSent(true)}
       />
     )}
      </>
     }
      <footer className="text-xs text-light-text_secondary dark:text-dark-text_secondary"> Feito com 💜 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> </footer>
    </div>
  )
}