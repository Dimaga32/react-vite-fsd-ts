import { BrowserRouter, Route, Routes } from "react-router";
import { JSX } from "react";
import { MassiveRouts } from "./massiveRouts.tsx";
export default function Router(): JSX.Element {
  console.log(123);
  return (
    <BrowserRouter>
      <Routes>
        {MassiveRouts.map(
          (route): JSX.Element => (
            <Route key={route.url} path={route.url} element={route.element} />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
}
