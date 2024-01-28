import "./style/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { MobilePrompt } from "features/MobilePrompt";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <MobilePrompt />
      <div className={classNames("app", {}, [theme])}>
        <main>
          <AppRouter />
          <button onClick={toggleTheme}>Toggle Theme</button>
        </main>
        <Navbar />
      </div>
    </>
  );
};

export default App;
