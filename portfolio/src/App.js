import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robert Way</h1>
        <p>implement navbar</p>
      </header>
      <section className="App-content">
        <h2>About Me</h2>
        <p>introduction</p>
        <h2>Projects</h2>
        {/* List of projects */}
        <div className="projects">
          <div className="project">
            <h3>Project Name</h3>
            <p>Description of the project.</p>
          </div>
          {/* Repeat for other projects */}
        </div>
        <h2>Contact</h2>
        <p>robertway@tamu.edu</p>
      </section>
    </div>
  );
}

export default App;