import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Widget } from "./components/Widget";
import { api } from "./lib/api";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const body = document.querySelector('body');
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(()=>{
    async function fetchFeedbacks() {
      const response = await api('https://feedget-nwl-return-impulse.vercel.app/feedbacks');
      return console.log(response)
    }
    fetchFeedbacks()
  },[])

  function toggleDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
    body?.classList.toggle('dark')
    body?.classList.toggle('bg-dark-background')
  }

  return (
    <>
      <Header isDarkTheme={isDarkTheme} toggleDarkTheme={toggleDarkTheme}/>
      <Widget />
    </>
  )
}
