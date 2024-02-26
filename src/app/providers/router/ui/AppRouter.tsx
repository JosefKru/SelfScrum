import { Suspense, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { UserAuth } from "app/providers/AuthProvider";
import { AuthPage } from "pages/AuthPage";

const AppRouter = () => {
  const { currentUser } = UserAuth();
  const isAuthenticated = Boolean(currentUser);

  const renderElement = (element: ReactNode) => isAuthenticated ? element : <AuthPage />;

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          console.log(path === '/auth')
          return <Route key={path} path={path} element={renderElement(element)} />

        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
