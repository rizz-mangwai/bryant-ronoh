import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import Routing from './routing';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
);