import { useState, Suspense, useContext } from 'react';
import style from './Test.module.scss';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const [count, setCount] = useState<number>(0);  
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <h1>{count}</h1>
      <Link to='/about'>About Page</Link>
      <br />
      <Link to='/'>Main Page</Link>
      <br />
      <button onClick={() => setCount(count + 1)} className={style.btn}>
        PLUS
      </button>
      <br />
      <button onClick={toggleTheme} className={style.btn}>
        Toggle Theme
      </button>
    </div>
  );
};


export default App;