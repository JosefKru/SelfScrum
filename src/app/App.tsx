import "./style/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { MobilePrompt } from "features/MobilePrompt";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <MobilePrompt />
      <div className={classNames("app", {}, [theme])}>
        <main>
          <AppRouter />
          <ThemeSwitcher />
        </main>
        <Navbar />
      </div>
    </>
  );
};

export default App;
