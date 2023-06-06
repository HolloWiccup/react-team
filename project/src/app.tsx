import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/counter';
import './style.sass';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPageAsync } from './pages/main/main-page.async';
import { AboutPageAsync } from './pages/about/about-page.async';

export const App = () => {
  return (
    <div className="app">
      {/* <Counter />  */}
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
