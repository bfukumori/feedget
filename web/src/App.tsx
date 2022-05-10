import { useState } from "react";
import DarkThemeToggleButton from "./components/DarkThemeToggleButton/DarkThemeToggleButton";
import { Widget } from "./components/Widget";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const body = document.querySelector('body');

  function toggleDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
    body?.classList.toggle('dark')
    body?.classList.toggle('bg-dark-background')
  }

  return (
    <>
      <DarkThemeToggleButton isDarkTheme={isDarkTheme} toggleDarkTheme={toggleDarkTheme} />
      <Widget />
    </>
  )
}
