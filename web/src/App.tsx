import { useCallback, useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { Widget } from './components/Widget';
import { api } from './lib/api';

export interface Feedback {
  id: string;
  type: string;
  comment: string;
  screenshot: string;
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const body = document.querySelector('body');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedbacks = useCallback(async () => {
    const response = await api('/feedbacks');
    setFeedbacks(response.data);
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  function toggleDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
    body?.classList.toggle('dark');
    body?.classList.toggle('bg-dark-background');
  }

  return (
    <>
      <Header isDarkTheme={isDarkTheme} toggleDarkTheme={toggleDarkTheme} />
      <Widget onFetchData={fetchFeedbacks} />
      <Dashboard feedbacks={feedbacks} />
    </>
  );
}
