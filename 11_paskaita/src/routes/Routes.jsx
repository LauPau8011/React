import { useContext } from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { loginRoutes, authenticatedRoutes } from "../routes/const";
import NewProject from "../pages/NewProject/NewProject";

const Routes = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { Layout, routes } = isLoggedIn ? authenticatedRoutes : loginRoutes;

  const extendedRoutes = [
    ...routes, // Įtraukiame esamus maršrutus
    {
      path: "/projects/new/:project", // Naujas maršrutas
      Component: NewProject, // Komponentas, kuris atvaizduos naują projektą
    },
  ];

  return (
    <RoutesWrapper>
      {extendedRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
