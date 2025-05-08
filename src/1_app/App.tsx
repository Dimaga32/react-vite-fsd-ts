import Router from "./Routers/Router.tsx"
import { JSX } from "react"
import { HelmetProvider } from "react-helmet-async"

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  )
}

export default App
