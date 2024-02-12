import App from "./app/App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { AuthProvider } from "app/providers/AuthProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
