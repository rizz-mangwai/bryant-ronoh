import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navigation from "./Amazonpage/navigatiom";
import "./Amazonpage/index.css";
import "./Amazonpage/filterlist"
import FilterList from './Amazonpage/filterlist';
import ItemCard from './Amazonpage/itemcard';
import Sidebar from './Amazonpage/sidebar';
import MainSection from './Amazonpage/MainSection';
import AmazonPage from './Amazonpage/index';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation/>
    <FilterList/>
    <ItemCard/>
    <Sidebar/>
    <MainSection/>
  </StrictMode>,
);