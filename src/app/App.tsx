import { useState, Suspense } from 'react';
import './style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const [count, setCount] = useState<number>(0);  
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
      <h1>{count}</h1>
      <Link to='/about'>About Page</Link>
      <br />
      <Link to='/'>Main Page</Link>
      <br />
      <button onClick={() => setCount(count + 1)}>
        PLUS
      </button>
      <br />
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};


export default App;