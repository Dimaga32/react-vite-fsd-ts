import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import "./tailwind.css"
import App from "./1_app/App.tsx"
if (import.meta.env.MODE === "development") {
  // для Vite; для CRA: process.env.NODE_ENV === 'development'
  import("@welldone-software/why-did-you-render").then(({ default: wdyr }) => {
    wdyr(React, {
      trackAllPureComponents: true, // отслеживать ВСЕ React.memo / PureComponent
      // logOnDifferentValues: true   // логировать, даже если значения разные (бывает нужно)
    })
  })
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
