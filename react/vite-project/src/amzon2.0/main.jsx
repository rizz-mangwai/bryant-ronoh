import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ClickMe from "./amzon2.0/clickMe.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickMe />
  </StrictMode>,
);