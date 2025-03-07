import React, { useState } from 'react';
import './App.css';

function App() {
  const Rjokes = [

    "How do robots eat pizza? :- One byte at a time.",
    "What does the R in Recursion stand for? :- Recursion",
    "How did the first program die? :- It was executed.",
    "Why do Java programmers wear glasses? :- They can’t C#.",
    "Three SQL Database Admins walked into a NoSQL bar. A little while later they walked out because they couldn’t find a table.",
    "There are 10 types of people in this world. Those who understand binary and those who don’t.",
    "There are two ways to write error-free programs; only the third one works.",
    "A good programmer is someone who always looks both ways before crossing a one-way street.",
    "Why do programmers prefer dark mode? :- Because light attracts bugs!",
    "What’s the first step in understanding recursion? :- To understand recursion, you must first understand recursion."
  ];

  const [currentJoke, setCurrentJoke] = useState('');

  const getJoke = () => {
    const randomjoke = Math.floor(Math.random() * Rjokes.length);
    setCurrentJoke(Rjokes[randomjoke]);
  };

  const copyjoke = () =>{
    navigator.clipboard.writeText(currentJoke);
    alert("Joke copied");
  }

  return (
    <div className="App">
      <h1>Wanna hear a joke?</h1>
      <button onClick={getJoke}>Click to get a joke</button>
      <p>{currentJoke}</p> 
      <button onClick={copyjoke} >Copy joke</button>
    </div>
  );
}

export default App;