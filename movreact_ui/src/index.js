// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';s
// import App from './components/index';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Films from "./components/Film/Films";
import Forum from "./components/Forum/Forum";
import WatchList from "./components/WatchList/watchList";
import User from "./components/User/user";
import List from './components/List/List';
import Contribution from './components/Contribution/Contribution';


// import NoPage from "./components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="forum" element={<Forum />} />
          <Route path="watchList" element={<WatchList />} />
          <Route path="user" element={<User />} />
          <Route path="contribution" element={<Contribution />} />
          <Route path="list/:id" element={<List />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);   