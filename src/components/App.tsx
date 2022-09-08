import { useRoutes, Router } from "solid-app-router";
import type { Component } from "solid-js";
import { ErrorBoundary } from "solid-js";

import { routes } from "../routes";

import { Button } from "./Button";
import { Navbar } from "./Navbar";

export const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <Navbar />
      <ErrorBoundary
        fallback={(err, reset) => (
          <>
            <p>{err.toString()}</p>
            <p>
              Sorry, seems something has gone terribly wrong, click reset to
              reload the page and try again. If the error continues please
              contact the developer and tell them their app is bricked
            </p>
            <Button onClick={reset}>Reload</Button>
          </>
        )}
      >
        <Routes />
      </ErrorBoundary>
    </Router>
  );
};
