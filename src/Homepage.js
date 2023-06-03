//App.js

import React from 'react';
import './Home.css';
import Income from './Income';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/income">abc</a>
        </li>
        <li>
          <a href="#apply-for-loan">Apply for Loan</a>
        </li>
        <li>
          <a href="#chatbot">Chatbot</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
      </ul>
    </nav>
  );
};

const Aside = () => {
  return (
    <aside className="aside">
      <h2>Loan Details</h2>
      <ul>
        <li>
          <strong>Name:</strong> John Doe
        </li>
        <li>
          <strong>Email:</strong> johndoe@example.com
        </li>
        <li>
          <strong>Phone:</strong> 123-456-7890
        </li>
        <li>
          <strong>Loan Status:</strong> In Progress
        </li>
      </ul>
    </aside>
  );
};

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Aside />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/income" component={Income} />
    </Router>
  );
}

export default App;