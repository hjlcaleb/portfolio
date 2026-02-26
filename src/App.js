import React, { useEffect } from 'react';
import IDELayout from './components/IDE/IDELayout';

function App() {
  useEffect(() => {
    const el = document.getElementById('loading-screen');
    if (!el) return;

    const minDelay = new Promise(res => setTimeout(res, 1400));
    const windowLoad = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise(res => window.addEventListener('load', res, { once: true }));

    Promise.all([minDelay, windowLoad]).then(() => {
      el.classList.add('fade-out');
      setTimeout(() => el.remove(), 600);
    });
  }, []);

  return <IDELayout />;
}

export default App;
