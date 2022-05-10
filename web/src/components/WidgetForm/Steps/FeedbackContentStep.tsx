import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSent}:FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedBack(event:FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true);
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })
    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
    <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-light-text_secondary dark:text-dark-text_secondary hover:text-light-text_primary dark:hover:text-dark-text_primary transition"
          title="Voltar"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl text-light-text_primary dark:text-dark-text_primary  leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
    </header>
    <form className="my-4 w-full" onSubmit={handleSubmitFeedBack}>
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-light-text_primary dark:text-dark-text_primary border-light-stroke dark:border-dark-stroke bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-light-stroke dark:scrollbar-thumb-dark-stroke scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte-me com detalhes o que está acontecendo"
        onChange={(event)=>setComment(event.target.value)}
      ></textarea>
      <footer className="flex gap-2 mt-2">
        <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
        <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm text-text_on_brand_color hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface_primary dark:focus:ring-offset-dark-surface_primary    focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          title="Enviar feedback"
          disabled={comment.trim().length
          ===
          0 || isSendingFeedback}
        >
          {isSendingFeedback ? <Loading />
        : 'Enviar feeback' }
        </button>        
      </footer>
    </form>
   </>
  )
}