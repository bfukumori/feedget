import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null
}

export function ScreenshotButton({onScreenshotTook , screenshot}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenshotTook(base64Image);
    setIsTakingScreenshot(false);
  }

  if(screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-light-surface_secondary-300 
        dark:text-dark-surface_secondary-300 hover:text-light-surface_secondary-500 dark:hover:text-dark-surface_secondary-500 transition-colors"
        title="Photo Preview"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
        onClick={()=> onScreenshotTook(null)}
      >
        <Trash weight="fill" className="text-brand-300 hover:text-brand-500 transition-colors"/>
      </button>
    )
  }
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-light-surface_secondary-300 dark:bg-dark-surface_secondary-300 rounded-md border-transparent hover:bg-light-surface_secondary-500 dark:hover:bg-dark-surface_secondary-500  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface_primary dark:focus:ring-offset-dark-surface_primary focus:ring-brand-500
      disabled:opacity-50"
      title="Enviar foto"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-light-text_primary dark:text-dark-text_primary"/>}
      
    </button>

  )
}