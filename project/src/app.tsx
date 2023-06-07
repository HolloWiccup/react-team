import { Route, Routes } from 'react-router-dom';
import './assets/styles/style.sass';
import { Link } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { MainPageAsync } from './pages/main/main-page.async';
import { AboutPageAsync } from './pages/about/about-page.async';
import { useTheme } from './theme/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>'Loading...'</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
