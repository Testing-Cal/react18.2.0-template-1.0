import * as React from 'react'
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import { Outlet } from "react-router-dom";
import './style.css';
import Dashboard  from "./dashboard";
import Listing from "./listing";
import Nested from "./nested";
import PageNotFound from './page-not-found'
console.log("Inside index.tsx")


const App = () => {
  const basePath = process.env.REACT_APP_CONTEXT;
  return (
    <Router basename={basePath}>
      <div>
          <nav style={{margin: '20px'}}>
              <Link to="/" style={{marginRight: '20px'}}>Home</Link>
              <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
              <Link to="/listing" style={{marginRight: '20px'}}>Listing</Link>
              <Link to="/dashboard/listing">About</Link>

          </nav>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard/*" element={<Dashboard />} >
                    <Route index element={<Home />} />
                    <Route path='nested' element={<Nested />} /> {/*A nested route!*/}
                    <Route path='listing' element={<Listing />} /> {/*A nested route!*/}
              </Route>
              <Route path="/listing" element={<Listing />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
    </Router>
   )
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found.");
}


/*
class based component

type AppState = {
    name: string
}

type AppProp = {

}

class App extends React.Component<AppProp,AppState> {
  constructor(props:AppProp) {
    super(props);
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
    const basePath = process.env.REACT_APP_CONTEXT;
      return (
          <Router basename={basePath}>
              <div>
                  <nav style={{margin: '20px'}}>
                      <Link to="/" style={{marginRight: '20px'}}>Home</Link>
                      <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
                      <Link to="/listing">Listing</Link>
                  </nav>
                  <Routes>
                      <Route path="/" element={<Home name={this.state.name}/>} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/listing" element={<Listing />} />
                      <Route path="*" element={<PageNotFound />} />
                  </Routes>
              </div>
          </Router>
      )
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found.");
}
*/
