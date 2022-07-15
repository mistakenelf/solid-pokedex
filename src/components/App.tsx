import { useRoutes, Router } from "solid-app-router";
import type { Component } from "solid-js";
import { ErrorBoundary } from "solid-js";

import { routes } from "../routes";

import { Button } from "./Button";

export const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <nav class="bg-black w-full h-16 flex items-center justify-center">
        <h1 class="text-white text-2xl font-bold">Solid Pokedex</h1>
      </nav>
      <ErrorBoundary
        fallback={(err, reset) => (
          <>
            <p>{err.toString()}</p>
            <p>
              Sorry, seems something has gone terribly wrong, click reset to
              reload the page and try again. If the error continues please
              contact the developer
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
