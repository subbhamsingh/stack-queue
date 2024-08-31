// src/components/Stack.js
import React, { useState } from 'react';
import './StackQueue.css';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const pushToStack = () => {
    if (input.trim()) {
      setStack([input, ...stack]);
      setHistory([...history, `Pushed: ${input}`]);
      setInput('');
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      const popped = stack[0];
      setStack(stack.slice(1));
      setHistory([...history, `Popped: ${popped}`]);
    }
  };

  return (
    <div className="stack-container">
      <h2>Stack Implementation</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={pushToStack}>Push</button>
      <button onClick={popFromStack} disabled={stack.length === 0}>
        Pop
      </button>
      <div className="stack-display">
        <h3>Stack:</h3>
        <ul>
          {stack.map((item, index) => (
            <li key={index} className="stack-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="history">
        <h4>Operation History:</h4>
        <ul>
          {history.map((action, index) => (
            <li key={index} className="history-item">
              {action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
