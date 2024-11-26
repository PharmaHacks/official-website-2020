import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Hackathon from './pages/Hackathon';
import Team from './pages/Team';
import Home from './pages/Home';
import Event from './pages/Event';
import Navbar from './containers/Navbar';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Routes, Route} from "react-router-dom";
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
serviceWorker.register();

function App() {
    return <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/Hackathon2023" element = {<Hackathon/>} />
                <Route path="/Team" element = {<Team />} />
                <Route path = "/Event" element = {<Event />} />
            </Routes>
        </BrowserRouter>
    </>;
}