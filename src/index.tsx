import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home';
import { Outlet } from "react-router-dom";
import './style.css';
import Dashboard from "./dashboard";
import Dashboard  from "./dashboard";
import Listing from "./listing";
import Posts from "./new";
import PageNotFound from './page-not-found'
console.log("Inside index.tsx")


const App = () => {
  const basePath = process.env.REACT_APP_CONTEXT;
              <Link to="/" style={{marginRight: '20px'}}>Home</Link>
              <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
              <Link to="/listing">Listing</Link>
              <Link to="/dashboard/listing">Listing 1</Link>

          </nav>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/*" element={<Dashboard />} >
                    <Route index element={<Home />} />
                    <Route path='new' element={<Posts />} /> {/*A nested route!*/}
                    <Route path='listing' element={<Listing />} /> {/*A nested route!*/}
              </Route>
              <Route path="/listing" element={<Listing />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
   )
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found.");
}

render(<App />, document.getElementById('root'));
/*
class based component
