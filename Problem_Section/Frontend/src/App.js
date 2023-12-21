import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    const getQuestions = async ()=>{
      const res = await fetch('http://localhost:8800/problems');
      const getData = await res.json();
      setQuestions(getData);
      console.log(getData);
    }
    getQuestions();
  },[]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredQuestions = questions.filter((question) => {
    const op = question.qtitle;
    return op.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const renderQuestions = () => {
    return filteredQuestions.map((question, index) => {
      return (
        <div key={index} className="question-container">
          <span className="question-text">{question.qtitle}</span>
          <button className="solve-button">Solve Problem</button>
        </div>
      );
    });
  };
  return (
    <div className="App">
      
      <div className="search-container">
        <h1 className='title'>Problems</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
      </div>
      <div className="questions-container">{renderQuestions()}</div>
    </div>
  );
}

export default App;