import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import GitHubProject from './github project';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubProject />
  </StrictMode>,
);